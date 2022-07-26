// haimtran 25 jul 2022

import {
  forwardRef,
  chakra,
  useColorModeValue,
  Flex,
  PropsOf
} from '@chakra-ui/react'
import React, { ReactElement, Ref, useEffect, useRef } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const StyledLink = forwardRef(function StyledLink(
  props: PropsOf<typeof chakra.a> & { isActive?: boolean },
  ref: Ref<any>
) {
  const { isActive, ...rest } = props

  return (
    <chakra.a
      aria-current={isActive ? 'page' : undefined}
      width="100%"
      px="3"
      py="1"
      rounded="md"
      ref={ref}
      fontSize="sm"
      fontWeight="500"
      color={useColorModeValue('gray.700', 'whiteAlpha.900')}
      transition="all 0.2s"
      _activeLink={{
        bg: useColorModeValue('teal.50', 'rgba(48, 140, 122, 0.3)'),
        color: useColorModeValue('teal.700', 'teal.200'),
        fontWeight: '600'
      }}
      {...rest}
    />
  )
})

type SidebarLinkProps = PropsOf<typeof chakra.div> & {
  href?: string
  icon?: ReactElement
}

function checkHref(href: string, slug: string | string[]) {
  const _slug = Array.isArray(slug) ? slug : [slug]
  const path = href.split('/')
  const pathSlug = path[path.length - 1]
  return _slug.includes(pathSlug)
}

export const SidebarLink = ({ href, children, ...rest }: SidebarLinkProps) => {
  const router = useRouter()
  const isActive = checkHref(href, router.query.slug) || href === router.asPath

  const link = useRef<HTMLAnchorElement>()

  useEffect(() => {
    if (isActive && router.query.scroll === 'true') {
      link.current.scrollIntoView({ block: 'center' })
    }
  }, [isActive, router.query])

  return (
    <Flex align="center" userSelect="none" lineHeight="tall" {...rest}>
      <NextLink href={href} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </NextLink>
    </Flex>
  )
}
