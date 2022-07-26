// haimtran 25 jul 2022

import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Navbar from 'components/header'
import { useRouter } from 'next/router'
import React from 'react'
import TableOfContent from './table-of-content'

function useHeadingFocusOnRouteChange() {
  const router = useRouter()

  React.useEffect(() => {
    const onRouteChange = () => {
      const [heading] = Array.from(document.getElementsByTagName('h1'))
      heading?.focus()
    }
    router.events.on('routeChangeComplete', onRouteChange)
    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
    }
  }, [router.events])
}

export interface Heading {
  level: 'h2' | 'h3'
  text: string
  id: string
}

interface PageContainerProps {
  frontmatter: {
    slug?: string
    title: string
    description?: string
    editUrl?: string
    version?: string
    headings?: Heading[]
  }
  children: React.ReactNode
  sidebar?: React.ReactNode
  hideToc?: boolean
  pagination?: React.ReactNode
  maxWidth?: string
}

export const PageContainer = (props: PageContainerProps) => {
  const {
    frontmatter,
    children,
    sidebar,
    hideToc,
    pagination,
    maxWidth = '48rem'
  } = props

  const { title, description, editUrl, version, headings = [] } = frontmatter

  return (
    <>
      <Navbar></Navbar>
      <Box
        as="main"
        w="full"
        maxW={'8xl'}
        mx="auto"
        // bg="gray.50"
        className="main-content"
      >
        <Box display={{ md: 'flex' }}>
          {sidebar || null}
          <Box flex={'1'} minW={'0'}>
            <Box px={5} mx={'auto'} minH={'76vh'}>
              <Flex>
                <Box
                  minW={'0'}
                  flex={'auto'}
                  px={{ base: '4', sm: '6', xl: '8' }}
                  pt={'10'}
                >
                  <Box maxW={maxWidth}>{children}</Box>
                </Box>
                <TableOfContent
                  visibility={'initial'}
                  headings={headings}
                ></TableOfContent>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
