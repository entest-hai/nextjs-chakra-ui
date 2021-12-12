// 11 DEC 2021 TRAN MINH HAI 
// refactor sidebar and hsidebar 
//
import { Flex, Text, Icon, FlexProps, Link, Spacer, IconButton} from '@chakra-ui/react';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'; 
import {
  FiHome, 
  FiTrendingUp, 
  FiCompass, 
  FiSettings, 
  FiStar,
  FiMenu
} from 'react-icons/fi'; 

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
        <Flex width='100%' align='center' justifyContent='center'>
          <Text m={4} fontSize={20} fontWeight='bold' fontFamily='monospace'>Home</Text> 
          <Text m={4} fontSize={20} fontWeight='bold' fontFamily='monospace'>Practice</Text> 
          <Text m={4} fontSize={20} fontWeight='bold' fontFamily='monospace'>Contribute</Text> 
          <Text m={4} fontSize={20} fontWeight='bold' fontFamily='monospace'>Register</Text> 
        </Flex>
      </Flex>
    </Flex>
  ); 
}

export default Layout; 
