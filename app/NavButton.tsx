"use client";
import { Button, Link } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

export function NavButton({
  href,
  icon,
  text,
  isExternal = false,
}: {
  href: string
  icon: React.ReactNode
  text: string
  isExternal?: boolean
}) {
  const path = usePathname();
  const isActive = path.startsWith(href);

  return (
    <Button
      as={Link}
      href={href}
      className='w-full'
      isExternal={isExternal}
      color={isActive ? 'primary' : 'default'}
    >
      <span className='gap-2 flex items-center justify-center md:justify-start w-full p-2 md:p-4'>
        {icon}
        <span className='hidden md:inline'>{text}</span>
      </span>
    </Button>
  )
}

export function RootNavButton({
  href,
  icon,
  text,
  isExternal = false,
}: {
  href: string
  icon: React.ReactNode
  text: string
  isExternal?: boolean
}) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Button
      as={Link}
      href={href}
      className='w-full'
      isExternal={isExternal}
      color={isActive ? 'primary' : 'default'}
    >
      <span className='gap-2 flex items-center justify-center md:justify-start w-full p-2 md:p-4'>
        {icon}
        <span className='hidden md:inline'>{text}</span>
      </span>
    </Button>
  )
}