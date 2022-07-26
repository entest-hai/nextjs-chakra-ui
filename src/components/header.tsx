import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  Icon,
  IconButton,
  useColorModeValue,
  chakra,
  useDisclosure,
  HTMLChakraProps,
  useColorMode,
  useUpdateEffect
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { useRef, useState } from 'react'
import { DiscordIcon, GithubIcon } from './icons'
import { FaYoutube, FaMoon, FaSun } from 'react-icons/fa'
import Logo, { LogoIcon } from './logo'
import Search from './omni-search'
import SponsorButton from './sponsor-button'
import { MobileNavButton, MobileNavContent } from './mobile-nav'
import { useViewportScroll } from 'framer-motion'
import { useEffect } from 'react'

const NavbarContent = () => {
  const mobileNav = useDisclosure()
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const mobileNavBtnRef = useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <>
      <Flex
        width={'100%'}
        height={'100%'}
        // bg={'teal.100'}
        // minH={'60px'}
        align={'center'}
        justifyContent={'space-between'}
        px={'6'}
      >
        <Flex align={'center'}>
          <NextLink href={'/'} passHref>
            <chakra.a display="block" aria-label="Chakra UI, Back to homepage">
              <Logo display={{ base: 'none', md: 'block' }} />
              <Box minW="3rem" display={{ base: 'block', md: 'none' }}>
                <LogoIcon />
              </Box>
            </chakra.a>
          </NextLink>
        </Flex>
        <Flex
          align={'center'}
          maxW={'1100px'}
          justify="flex-end"
          w={'100%'}
          color={'gray.400'}
          // bg={'orange.100'}
        >
          <Search></Search>
          <Text
            width={'auto'}
            flexShrink={0}
            display={{ base: 'none', md: 'flex' }}
            pr={'5'}
          >
            Version Switcher
          </Text>
          <HStack spacing={'5'} display={{ base: 'none', md: 'flex' }}>
            <Link isExternal href="#" aria-label="github">
              <Icon
                as={GithubIcon}
                display={'block'}
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: 'gray.600' }}
              ></Icon>
            </Link>
            <Link isExternal href="#" aria-label="discord">
              <Icon
                as={DiscordIcon}
                display={'block'}
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: 'gray.600' }}
              ></Icon>
            </Link>
            <Link isExternal href="#" aria-label="youtube">
              <Icon
                as={FaYoutube}
                display={'block'}
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: 'gray.600' }}
              ></Icon>
            </Link>
          </HStack>
          <HStack spacing={'5'}>
            <IconButton
              size="md"
              fontSize={'lg'}
              aria-label={`Switch to ${text} mode`}
              variant={'ghost'}
              color={'current'}
              ml={{ base: '0', md: '3' }}
              icon={<SwitchIcon></SwitchIcon>}
              onClick={toggleMode}
            ></IconButton>
            <SponsorButton ml="5"></SponsorButton>
            <MobileNavButton
              ref={mobileNavBtnRef}
              aria-label="Open Menu"
              onClick={mobileNav.onOpen}
            ></MobileNavButton>
          </HStack>
        </Flex>
      </Flex>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </>
  )
}

const NavbarTest = () => {
  return (
    <chakra.header
      pos={'sticky'}
      top={'0'}
      zIndex={'3'}
      bg={'white'}
      _dark={{ bg: 'gray.800' }}
      left={'0'}
      right={'0'}
      width={'full'}
    >
      <chakra.div height={'4.5rem'} mx="auto" maxW={'8xl'} maxWidth={'8xl'}>
        <NavbarContent></NavbarContent>
      </chakra.div>
    </chakra.header>
  )
}

export const Navbar = (props: HTMLChakraProps<'header'>) => {
  const { maxW = '8xl', maxWidth = '8xl' } = props
  const ref = useRef<HTMLHeadingElement>()
  const [y, setY] = useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useViewportScroll()
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition="box-shadow 0.2s, background-color 0.2s"
      pos="sticky"
      top="0"
      zIndex="3"
      bg="white"
      _dark={{ bg: 'gray.800' }}
      left="0"
      right="0"
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto" maxW={maxW} maxWidth={maxWidth}>
        <NavbarContent></NavbarContent>
      </chakra.div>
    </chakra.header>
  )
}

export default Navbar
