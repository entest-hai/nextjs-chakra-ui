import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  Icon,
  IconButton,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { DiscordIcon, GithubIcon } from '../../components/icons'
import { FaYoutube, FaMoon, FaSun } from 'react-icons/fa'

const NavbarContent = () => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <>
      <Flex
        width={'100%'}
        height={'100%'}
        bg={'teal.100'}
        minH={'60px'}
        align={'center'}
        justifyContent={'space-between'}
        px={'6'}
      >
        <Flex align={'center'}>
          <NextLink href={'#'}>
            <a>
              <Text display={{ base: 'none', md: 'block' }}>Logo Full</Text>
              <Box display={{ base: 'block', md: 'none' }}>
                <Text>Logo Icon</Text>
              </Box>
            </a>
          </NextLink>
        </Flex>
        <Flex
          align={'center'}
          maxW={'1100px'}
          justify="flex-end"
          w={'100%'}
          color={'gray.400'}
          bg={'orange.100'}
        >
          <Text>Search</Text>
          <Text>Version Switcher</Text>
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
              aria-label="toggle"
              variant={'ghost'}
              color={'current'}
              ml={{ base: '0', md: '3' }}
              icon={<SwitchIcon></SwitchIcon>}
            ></IconButton>
            <IconButton
              size="md"
              fontSize={'lg'}
              aria-label="toggle"
              variant={'ghost'}
              color={'current'}
              ml={{ base: '0', md: '3' }}
              icon={<SwitchIcon></SwitchIcon>}
            ></IconButton>
          </HStack>
        </Flex>
      </Flex>
    </>
  )
}

const Navbar = () => {
  return (
    <chakra.div
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
    </chakra.div>
  )
}

export default Navbar
