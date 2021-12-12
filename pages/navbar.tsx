import { ReactNode   } from 'react';
import { Input, 
  Avatar, 
  Box, 
  Flex, 
  HStack, 
  IconButton, 
  Link, 
  Menu, 
  MenuButton, 
  Stack, 
  useDisclosure, 
  Text, 
  Container, 
  Button} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';


const _NavLink = ( { children } : { children: ReactNode }) => {
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

const NavItem = ( { children } : { children: ReactNode }) => {
  return (
    <Button variant='ghost' colorScheme='teal'>
      {children}
    </Button>
  ); 
}


const Navbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();  
  return (
    <Box width='100%' bg='gray.100'>
      <Container maxWidth={'container.lg'}>
        <Box width='100%' px={4}>
          <Flex alignItems='center' h={16} justifyContent='space-between'>
            <IconButton
              display={{ md: 'none' }}
              size={'md'}
              icon={ isOpen ? <CloseIcon></CloseIcon> : <HamburgerIcon></HamburgerIcon>}
              aria-label='Open Menu'
              onClick={isOpen ? onClose : onOpen}
            >
            </IconButton>
            <HStack spacing={4} alignItems='center'>
              <Box pr={4}>
                <Text
                  fontSize={'2xl'}
                  fontFamily='M PLUS Rounded 1c", sans-serif'
                  fontWeight='bold'
                >
                  Entest
                </Text>
              </Box>
              <Input
                minWidth={{ lg: 400, xl: 500 }}
                bg='white'
                display={{ base: 'none', md: 'flex' }}
                mt={2} 
                minH={10} 
                borderColor='blue.200'
                borderWidth='thin'
                focusBorderColor='blue.500'
                placeholder='Search' 
              />
            </HStack>
            <HStack spacing={8}>
              <HStack 
                spacing={4} 
                as='nav' 
                display={{ base: 'none', md: 'flex' }}
              >
                {['Dashboard','Projects','Team'].map((name,index) => {
                  return (
                    <NavItem key={index}>{name}</NavItem> 
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
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack>
                {['Dashboard','Projects','Team'].map((name,index)=>{
                  return (
                    <Flex 
                      py={2}
                      as={Link}
                      href={'#'}
                      justify={'space-between'}
                      align={'center'}
                      _hover={{textDecoration:'none'}}
                      key={index}
                    >
                      <Text fontWeight={600} color={'gray.600'}>
                        {name}
                      </Text>
                    </Flex>
                  )
                })}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
}


const LayoutNav = () => {
  return (
    <Flex width='100%' flexDirection='column' as={'main'}>
      <Navbar></Navbar>
      <Container maxWidth={'container.lg'}>
        content here 
      </Container>
    </Flex>
  ); 
}

export default LayoutNav; 