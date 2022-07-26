// haimtran 25 jul 2022

import {
  Box,
  Center,
  HStack,
  List,
  ListProps,
  ListItem,
  chakra
} from '@chakra-ui/react'
import React, { Fragment, ReactElement, ReactNode, Ref } from 'react'
import { FaCompass, FaPalette } from 'react-icons/fa'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { SidebarLink } from './sidebar-link'
import { BsFillGridFill } from 'react-icons/bs'

export type SidebarContentProps = {
  pathname?: string
  contentRef?: any
}

const routes = [...Array(10).keys()]

export const SidebarContent = ({
  pathname,
  contentRef
}: SidebarContentProps) => {
  return (
    <>
      {routes.map(item => {
        return (
          <Fragment key={item}>
            <chakra.h4
              fontSize="sm"
              fontWeight="bold"
              my="4"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {item} - Layer 1
            </chakra.h4>
            {routes.map(item => {
              return (
                <SidebarLink
                  key={item.toString()}
                  href={'#'}
                  ml={'-3'}
                  mt={'2'}
                >
                  {item}
                </SidebarLink>
              )
            })}
          </Fragment>
        )
      })}
    </>
  )
}

export const mainNavLinks = [
  {
    icon: <FaCompass></FaCompass>,
    href: '/getting-started',
    label: 'Getting Started'
  },
  {
    icon: <FaPalette></FaPalette>,
    href: '/sample-applications',
    label: 'Styled System'
  },
  {
    icon: <BsFillGridFill></BsFillGridFill>,
    href: '/posts/introduction',
    label: 'Components',
    match: (asPath: string, href: string) =>
      href.startsWith('/posts/') && asPath.startsWith('/posts/')
  }
]

type MainNavLinkProps = {
  href: string
  icon: ReactElement
  children: ReactNode
  label?: string
  isActive: boolean
}

const MainNavLink = ({ href, icon, children, isActive }: MainNavLinkProps) => {
  const router = useRouter()
  const active = router.asPath.startsWith(href) || !!isActive

  return (
    <NextLink href={href} passHref>
      <HStack
        as="a"
        spacing={'3'}
        fontSize={'sm'}
        fontWeight={active ? 'semibold' : 'medium'}
        color={active ? 'accent' : 'fg-muted'}
        _hover={{ color: active ? undefined : 'fg' }}
      >
        <Center
          w="6"
          h="6"
          borderWidth="1px"
          bg={active ? 'accent-static' : 'transparent'}
          borderColor={active ? 'accent-static' : undefined}
          rounded="base"
          color={active ? 'white' : 'accent'}
        >
          {icon}
        </Center>
        <span>{children}</span>
      </HStack>
    </NextLink>
  )
}

const MainNavLinkGroup = (props: ListProps) => {
  const router = useRouter()

  return (
    <List spacing={'4'} styleType="none" {...props}>
      {mainNavLinks.map(item => (
        <ListItem key={item.label}>
          <MainNavLink
            icon={item.icon}
            href={item.href}
            label={item.label}
            isActive={item.match?.(router.asPath, item.href)}
          >
            {item.label}
          </MainNavLink>
        </ListItem>
      ))}
    </List>
  )
}

export const Sidebar = () => {
  return (
    <Box
      aria-label="sidebar"
      as="nav"
      pos={'sticky'}
      overscrollBehavior="contain"
      top="6.5rem"
      width={'280px'}
      h="calc(100vh - 6.5rem)"
      pr="8"
      pb="6"
      pl="6"
      pt="4"
      overflow={'auto'}
      className="sidebar-content"
      flexShrink={0}
      display={{ base: 'none', md: 'block' }}
      // bg="green.100"
    >
      <MainNavLinkGroup mb="10"></MainNavLinkGroup>
      {<SidebarContent></SidebarContent>}
    </Box>
  )
}
