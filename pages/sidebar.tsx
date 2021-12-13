// 11 DEC 2021 TRAN MINH HAI 
// refactor sidebar and hsidebar 
// 12 DEC 2021 TRAN MINH HAI 
// combine navbar and sidebar 
import { ReactNode } from 'react';
import { Flex, Text, Avatar,Button, Menu, MenuButton, HStack, Box, Icon, FlexProps, Link, Spacer, IconButton, useDisclosure, Input, InputGroup, InputLeftElement} from '@chakra-ui/react';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'; 
import { SearchIcon } from '@chakra-ui/icons';

import {
  FiHome, 
  FiTrendingUp, 
  FiCompass, 
  FiSettings, 
  FiStar,
  FiMenu
} from 'react-icons/fi'; 

const NNavItem = ( { children } : { children: ReactNode }) => {
  return (
    <Button variant='ghost' colorScheme='teal'>
      {children}
    </Button>
  ); 
}

interface LinkItemsProps {
  name: string; 
  icon: IconType; 
}

const LinkItems: Array<LinkItemsProps> = [
  { name: 'Home', icon: FiHome }, 
  { name: 'Trending', icon: FiTrendingUp }, 
  { name: 'Explore', icon: FiCompass }, 
  { name: 'Favourite', icon: FiStar }, 
  { name: 'Settings', icon: FiSettings }
]

interface NavItemProps extends FlexProps {
  icon: IconType; 
  children: ReactText; 
}

const NavItem = ({ icon, children, ... rest }: NavItemProps) => {
  return (
    <Link href='#' style={{ textDecoration : 'none' }}>
      <Flex
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        flexDirection='row' 
        justifyContent='flex-start' 
        align='center'
        _hover={{bg: 'cyan.400', color: 'white'}}
        {...rest}
      >
        {icon && <Icon mr={4} fontSize="16" as={icon} _groupHover={{color:'white'}}></Icon>}
        {children}
      </Flex>
    </Link>
  ); 
}

const SSidebar = () => {

  const [showSidebar, _setShowSidebar] = useState(true)
  
  return (
    <Flex>
      <Flex display = {{ base: 'none', md: 'block' }}>
        <Flex 
          bg='gray.100'
          height='100vh' 
          width={60} 
          display={ showSidebar ? 'block' : 'none' }
        >
          <Flex h="20" alignItems='center' mx='8'>
            <Text fontSize={'2xl'} fontFamily='monospace' fontWeight='bold'>
              Entest
            </Text>
          </Flex>
          { LinkItems.map(( item, index ) => {
            return (
              <NavItem key={index} icon={item.icon}>{item.name}</NavItem>
            ); 
          }) }
        </Flex>
      </Flex>      
    </Flex>
  );
}


const HSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Flex>
      <Flex display = {{ base: 'block', md: 'none' }}>
        <Flex 
          bg='gray.100'
          height='100vh' 
          width={60}
          display={ showSidebar ? 'block' : 'none' }
        >
          <Flex h="20" alignItems='center' mx='8'>
            <Text fontSize={'2xl'} fontFamily='monospace' fontWeight='bold'>
              Entest
            </Text>
            <Spacer></Spacer>
            <IconButton
              aria-label='hide sidebar'
              icon={<AiOutlineMenuFold fontSize='26'></AiOutlineMenuFold>}
              onClick={() => { setShowSidebar(!showSidebar) }}
            >
            </IconButton>
          </Flex>
          { LinkItems.map(( item, index ) => {
            return (
              <NavItem key={index} icon={item.icon}>{item.name}</NavItem>
            ); 
          }) }
        </Flex>
      </Flex>      
      <Flex display={{ base: 'block', md: 'none' }}>
        <IconButton
          display={ showSidebar ? 'none' : 'flex' }
          aria-label='hide sidebar'
          icon={<AiOutlineMenuUnfold fontSize='26'></AiOutlineMenuUnfold>}
          onClick={() => { setShowSidebar(!showSidebar) }}
        >
        </IconButton>
      </Flex>
    </Flex>
  ); 
}

const LayoutNav = () => {
  return (
    <Flex width='100%' height='100vh'>
      <SSidebar></SSidebar>
      <HSidebar></HSidebar>
    </Flex>
  ); 
}


const Layout = () => {

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <Flex flexDirection='row'>
      <Flex display = { showSidebar ? 'block' : 'none' }>
        <Flex 
          bg='gray.100'
          height='100vh' 
          width={60} 
          display={ showSidebar ? 'block' : 'none' }
        >
          <Flex height={'58'} alignItems='center' mx='8'>
            <Text fontSize={'2xl'} fontFamily='monospace' fontWeight='bold'>
              Entest
            </Text>
            <Spacer></Spacer>
            <IconButton
              aria-label='die sidebar'
              icon={<AiOutlineMenuFold fontSize={26}></AiOutlineMenuFold>}
              onClick={ () => { setShowSidebar(!showSidebar) } }
            >
            </IconButton>
          </Flex>
          { LinkItems.map(( item, index ) => {
            return (
              <NavItem key={index} icon={item.icon}>{item.name}</NavItem>
            ); 
          }) }
        </Flex>
      </Flex>      
      <Flex bg='tomato' width='100%'height={'58'} align='center'>
        <IconButton
          icon={<FiMenu fontSize={24}></FiMenu>}
          ml={5}
          aria-label='hide sidebar'
          display={ showSidebar ? 'none' : 'flex' }
          onClick={() => { setShowSidebar(!showSidebar) }}
        >
        </IconButton>
      </Flex>
    </Flex>
  ); 
}


const LayoutTest = ()  => {

  const {isOpen, onOpen, onClose} = useDisclosure(); 

  return (
    <Flex flexDirection='row'>
      <Flex 
        bg='gray.100' 
        height='100vh' 
        width={60} 
        flexDirection='column' 
        display={isOpen ?  'flex' : 'none'}
      >
        <Flex height={'58'} alignItems='center' mx='8'>
          <Text
            fontSize={'2xl'}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight='bold'
          >
            Entest
          </Text>
          <Spacer></Spacer>
          <IconButton
            aria-label='hide sidebar'
            icon={<AiOutlineMenuFold fontSize={26}></AiOutlineMenuFold>}
            onClick={onClose}
          >
          </IconButton>
        </Flex>
        { LinkItems.map(( item, index ) => {
          return (
            <NavItem key={index} icon={item.icon}>{item.name}</NavItem>
          ); 
        }) }
      </Flex>
      <Flex bg='gray.100' height={61} width='100%' align='center' justifyContent='space-between'>
        <HStack spacing={2} alignItems='center' flex={'1'} maxW={'600'}>
          <IconButton
            ml={0}
            display={isOpen ? 'none' : 'flex'}
            aria-label='hide sidebar'
            icon={<AiOutlineMenuUnfold fontSize={26}></AiOutlineMenuUnfold>}
            onClick={onOpen}
          >
          </IconButton>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <Box pr={4} pl={4} display={ isOpen ? 'none' : 'flex' }>
              <Text
                fontSize={'2xl'}
                fontFamily='M PLUS Rounded 1c", sans-serif'
                fontWeight='bold'
              >
              Entest
              </Text>
            </Box>
          </Flex>
          <InputGroup display={{ base: 'flex', md: 'flex' }}>
            <InputLeftElement
              pointerEvents='none'
            >
              {<SearchIcon></SearchIcon>}
            </InputLeftElement>
            <Input
              isFullWidth={true}
              bg='white'
              minH={10} 
              borderColor='blue.200'
              borderWidth='thin'
              focusBorderColor='blue.500'
              placeholder='Search' 
            />
          </InputGroup>
        </HStack>
        <HStack spacing={4} ml={2}>
          <HStack 
            spacing={4} 
            as='nav' 
            display={{ base: 'none', md: 'flex' }}
          >
            {['Dashboard','Projects','Team'].map((name,index) => {
              return (
                <NNavItem key={index}>{name}</NNavItem> 
              );
            })}
          </HStack>
          <Menu>
            <MenuButton>
              <Avatar size={'sm'}></Avatar>
            </MenuButton>
          </Menu>
        </HStack>
      </Flex>
    </Flex>
  ); 
}


export default LayoutTest; 
