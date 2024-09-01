import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { promises as fs } from 'fs'
import fileandfolder from '@ms-graph/fileandfolder'
import { OnedriveItemChildren } from '@/types/onedrive'
import config, { LEGACY_ONECRIVE_OAUTH } from '@/config'
import { getAccount } from '@/utils/algorithms'
import CryptoJS from 'crypto-js'

const users = config.LEGACY_ONECRIVE.map((user) => user.ONEDRIVE_NAME)
const wrong =
  "Something goes wrong, But it's not your fault, please report to shinnku."

const proxySecretKey = config.proxySecretKey

interface FilesApiRequest extends NextApiRequest {
  query: {
    files: Array<string>
    cf?: string
  }
}

export default async function handler(
  req: FilesApiRequest,
  res: NextApiResponse<any>,
) {
  // res = corsControl(req, res)
  const fullUrl = req.url
  console.log(fullUrl)

  const files = req.query.files
  const a_files = ['0', ...files]
  console.log(a_files)
  const user = getAccount()
  const i = users.indexOf(user)
  const lastfileorfolder = files[files.length - 1]
  files.pop()
  console.log(user)
  const childs = JSON.parse(
    await fs.readFile(
      path.join('data', 'legacy', user, 'root', ...files, 'child.json'),
      {
        encoding: 'utf8',
      },
    ),
  ) as OnedriveItemChildren

  const ans = await fileandfolder(
    LEGACY_ONECRIVE_OAUTH[i],
    childs,
    lastfileorfolder,
    [user, 'root', ...files],
  )

  if (ans) {
    if (typeof ans === 'string') {
      const _url = ans

      const randomNumber = Math.random()

      if (randomNumber <= 0.3 && a_files && a_files.length > 0) {
        const encodedFiles = a_files.map(encodeURIComponent)
        const newPath = encodedFiles.join('/')
        const newUrl = `https://dl.shinnku.org/file/shinnku/${newPath}`
        res.redirect(302, newUrl)
      }
      // if (randomNumber <= 0) {
      //   const encrypted = CryptoJS.AES.encrypt(_url, proxySecretKey).toString()
      //   const encoded = encodeURIComponent(encrypted)
      //   const newUrl = `https://dl.shinnku.com/proxy?&proxyUrl=${encoded}`
      //   console.log(newUrl)
      //   res.redirect(302, newUrl)
      // } else {
      console.log(_url)
      res.redirect(302, _url)
      // }
    } else if (ans instanceof Response) {
      const headers = Object.fromEntries(ans.headers.entries())
      res.status(ans.status)
      for (const [key, value] of Object.entries(headers)) {
        res.setHeader(key, value)
      }
      const responseBody = await ans.text()
      res.send(responseBody)
    } else {
      res.send(ans)
    }
  } else {
    res.send(wrong)
  }
}
