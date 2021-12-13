// 12 DEC 2021 TRAN MINH HAI 
// navbar with search and responsive 
//
import { ReactNode   } from 'react';
import { Input, 
  Avatar,
  useColorMode,
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
  Button,
  InputGroup,
  InputLeftElement,
  useColorModeValue} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';


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

  const { colorMode, toggleColorMode } = useColorMode()
  const {isOpen, onOpen, onClose} = useDisclosure();  
  return (
    <Box 
      width='100%' 
      bg={ useColorModeValue('white', 'gray.700') }
      borderBottomWidth={2}
      borderColor={ useColorModeValue('gray.300', 'gray.900' ) }
    >
      <Container maxWidth={'container.lg'}>
        <Box width='100%' px={0}>
          <Flex alignItems='center' h={16} justifyContent='space-between'>
            <IconButton
              display={{ md: 'none' }}
              size={'lg'}
              icon={ isOpen ? <CloseIcon></CloseIcon> : <HamburgerIcon></HamburgerIcon>}
              aria-label='Open Menu'
              onClick={isOpen ? onClose : onOpen}
            >
            </IconButton>
            <HStack spacing={2} alignItems='center' flex={'1'}>
              <Box pr={4} pl={4}>
                <Text
                  fontSize={'2xl'}
                  fontFamily='M PLUS Rounded 1c", sans-serif'
                  fontWeight='bold'
                >
                  Entest
                </Text>
              </Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                >
                  {<SearchIcon></SearchIcon>}
                </InputLeftElement>
                <Input
                  isFullWidth={true}
                  size='md'
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
                    <NavItem key={index}>{name}</NavItem> 
                  );
                })}
              </HStack>
              <IconButton
                bg={useColorModeValue('white', 'gray.700')}
                aria-label={'toggle theme'}
                icon={colorMode === 'light' ?  <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
                onClick={toggleColorMode}
              >
              </IconButton>
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
