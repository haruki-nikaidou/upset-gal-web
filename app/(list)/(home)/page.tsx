'use client'

import { Search } from '@/app/(list)/Search'
import { Accordion, AccordionItem, Link } from '@nextui-org/react'
import ExtendIntro from '@/app/(list)/(home)/ExtendIntro'

export default function HomePage() {
  return (
    <div className='flex items-center w-full flex-col gap-8 px-8 pb-8'>
      <Search />
      <Accordion
        className='max-w-5xl bg-opacity-10 backdrop-blur'
        variant='shadow'
        selectionMode='multiple'
        defaultExpandedKeys={['1', '2', '3']}
      >
        <AccordionItem key='1' title='简介'>
          <p>
            这是失落小站, 一个galgame资源站, (包括visual novel, 黄油, psp, krkr,
            ons gal资源 等), 收录了大部分的汉化galgame,
            大部分的生肉galgame资源。
          </p>
          <p>
            有在 Windows 电脑上面运行的，krkr 和 ons
            是手机版，需要进入模拟器页面下载专属的模拟器解压再运行。
          </p>
          <p>
            如果没有汉化版本, 可以先下载生肉, 之后在 vndb.org 等网站寻找汉化补丁
          </p>
        </AccordionItem>
        <AccordionItem key='2' title='有关反馈'>
          <p>搜索不到请到主页使用日文搜索</p>
          <p>
            最先进的galgame资源论坛, 这里找不到的资源就去那里问, 欢迎来到{' '}
            <Link isExternal href={'https://galgame.dev'} showAnchorIcon>
              真紅の資源討論組
            </Link>
          </p>
          <p>
            如果发现下载速度慢，或者想来真正的上网冲浪? 真红姐姐推荐使用
            <Link
              isExternal
              href='https://congyu.moe/auth/register?code=e30dc2bc97'
              showAnchorIcon
            >
              丛雨vpn: 丛雨云
            </Link>
            （柚子厨专属vpn, 高速隧道流量, 低延迟, 垃圾网络也能秒开油管4k,
            注意请使用并收藏最新发布页{' '}
            <Link isExternal href='https://congyu.org/'>
              congyu.org
            </Link>{' '}
            ）。 当然也推荐
            <Link
              isExternal
              href='https://aa.tutucloud.uk/?path=register&code=p89XrEU5'
              showAnchorIcon
            >
              兔兔云
            </Link>
            ，专业vpn.
          </p>
        </AccordionItem>
        <AccordionItem key='3' title='法律与版权'>
          <p>
            本资源仅供学习交流使用，请务必于下载后 24
            小时内删除，如有能力请购买正版支持。
          </p>
          <p>本站不承担任何为此带来的后果。</p>
          <p>法律を調べて遵守する取り組みは。</p>
          <p>
            you are still responsible to research and comply with local laws.
          </p>
          <p>本公告长期有效。</p>
        </AccordionItem>
      </Accordion>
      <div>
        <ExtendIntro />
      </div>
    </div>
  )
}
