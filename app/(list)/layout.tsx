import { Button, Link } from '@nextui-org/react'
import Image from 'next/image'
import { AndroidOutlined, CodeOutlined, GlobalOutlined, WindowsOutlined, HomeOutlined } from '@ant-design/icons'
import KRKROutlined from '@components/icons/kirikiri'
import { ONSOutlined } from '@components/icons/ons'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import { NavButton, RootNavButton } from '@/app/NavButton'

export default function ListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen flex flex-col w-full bg-default-50 bg-opacity-50'>
      <header>
        <Image
          src='/assets/upsetgal-logo.png'
          alt='失落的小站'
          width={400}
          height={162}
          loading='lazy'
          className='mx-auto'
        />
      </header>
      <div className='flex-1 flex flex-row flex-nowrap items-start p-4 gap-4'>
        <nav className='flex flex-col items-center md:min-w-48 gap-2'>
          <RootNavButton href="/" icon={<HomeOutlined />} text='首页' />
          <NavButton
            href='https://galgame.dev/'
            icon={<GlobalOutlined />}
            text='网站论坛'
          />
          <NavButton href='/win' icon={<WindowsOutlined />} text='Windows' />
          <NavButton
            href='/krkr'
            icon={<KRKROutlined width={12} height={12} />}
            text='kirikiri 2'
          />
          <NavButton href='/apk' icon={<AndroidOutlined />} text='APK直装' />
          <NavButton
            href='/ons'
            icon={<ONSOutlined width={20} height={20} />}
            text='ONS模拟器'
          />
          <NavButton
            href='/artroid'
            icon={
              <Image
                src='/assets/icon/tyranor.png'
                alt={'artroid tyranor'}
                width={24}
                height={24}
                loading='lazy'
              />
            }
            text='tyranor'
          />
          <NavButton
            href='/simulate'
            icon={<SportsEsportsOutlinedIcon style={{ width: 16 }} />}
            text='模拟器软件'
          />
          <NavButton href='/soft' icon={<CodeOutlined />} text='软件下载' />
        </nav>
        <main className="max-h-full overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

