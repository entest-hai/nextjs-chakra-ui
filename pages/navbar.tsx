import { ReactNode   } from 'react';
import { Avatar, Box, Flex, HStack, IconButton, Link, Menu, MenuButton, Stack, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';


const NavLink = ( { children } : { children: ReactNode }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{textDecoration: 'none', bg: 'gray.200'}}
      href={'#'}
    >
      {children}
    </Link>
  );
}

const Navbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();  
  return (
    <>
      <Box bg='gray.200' width='100%'>
        <Flex alignItems='center' h={16} justifyContent='space-between'>
          <IconButton
            display={{ md: 'none' }}
            size={'md'}
            icon={ isOpen ? <CloseIcon></CloseIcon> : <HamburgerIcon></HamburgerIcon>}
            aria-label='Open Menu'
            onClick={isOpen ? onClose : onOpen}
          >
          </IconButton>
          <HStack spacing={8} alignItems='center'>
            <Box>Logo</Box>
            <HStack 
              spacing={4} 
              as='nav' 
              display={{ base: 'none', md: 'flex' }}
            >
              {['Dashboard','Projects','Team'].map((name,index) => {
                return (
                  <NavLink key={index}>{name}</NavLink> 
                );
              })}
            </HStack>
          </HStack>
          <Flex>
            <Menu>
              <MenuButton>
                <Avatar size={'sm'}></Avatar>
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box>
            <Stack>
              {['Dashboard','Projects','Team'].map((name,index)=>{
                return (
                  <NavLink key={index}>{name}</NavLink>
                )
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar; 
