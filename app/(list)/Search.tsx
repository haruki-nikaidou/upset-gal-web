'use client'

import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { SearchIcon } from '@chakra-ui/icons'

export function Search({
  className,
  defaultInput,
}: {
  className?: string
  defaultInput?: string
}) {
  const [input, setInput] = useState(defaultInput ?? '')
  const onSearch = () => {
    location.href = `/search?q=${encodeURIComponent(input)}`
  }
  return (
    <div className='flex items-center content-center w-full max-w-xl gap-2'>
      <Input
        className={className}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='请输入中文或者日文搜索'
        radius='lg'
        size='lg'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch()
          }
        }}
      />
      <Button isIconOnly color='primary' size='lg' onPress={onSearch}>
        <SearchIcon />
      </Button>
    </div>
  )
}
