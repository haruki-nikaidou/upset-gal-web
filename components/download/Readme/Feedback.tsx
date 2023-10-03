import { Collapse, Space, Typography } from 'antd'
import t from '../../../utils/languages'

const { Panel } = Collapse
const { Text, Link } = Typography

export const Feedback = ({ lang }: { lang: string }) => (
  <Panel header={t('Feedback', lang)} key='2'>
    <Space direction='vertical'>
      <Text>
        <span>{t('Click', lang)}</span>
        <Link target='_blank' rel='noreferrer' href='https://qm.qq.com/q/EKWa8Vo9Dq'>
          {t('QQ', lang)}
        </Link>
        <span>{t('Feedback-last', lang)}</span>
      </Text>
      <Text>
        <span>
          鉴于群内日经询问如何翻墙，这里推荐机场
        </span>
        <Link
          target='_blank'
          rel='noreferrer'
          href='https://alori.moe/index.php#/register?code=N81fWyCw'
        >
          alori
        </Link>
        <span>
          （节点名字全部都是gal）。
          使用机场的订阅链接请在这里下载开源的clash客户端，导入订阅链接(clash下载:
          <Link
            target='_blank'
            rel='noreferrer'
            href='https://shinnku.us/Clash.for.Windows.Setup.0.20.25.exe'
          >
            win
          </Link>
          ，
          <Link
            target='_blank'
            rel='noreferrer'
            href='https://shinnku.us/cfa-2.5.12-premium-universal-release.apk'
          >
            安卓
          </Link>
          )。 
        </span>
      </Text>
    </Space>
  </Panel>
)
