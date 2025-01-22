'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { NextUIProvider } from '@nextui-org/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>
    <NextUIProvider>
    {children}
    </NextUIProvider>
  </ChakraProvider>
}
