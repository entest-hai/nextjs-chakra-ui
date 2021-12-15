import {Avatar,Box,Flex, Text,  Center, Heading, Stack, Badge, Button, Link } from '@chakra-ui/react'; 

const Profile = () => {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w='full'
        align='center'
        justify='center'
        flexDirection='column'
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
      >
        <Avatar
          src={'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'}
          size={'xl'}
          pos={'relative'}
          alt={'Avatar'}
          mb={4}
          _after={{
            content:'""',
            w: 4, 
            h: 4, 
            bg: 'green.300',
            border: '2px solid white', 
            rounded: 'full',
            pos: 'absolute',
            bottom: 0, 
            right: 3
          }}
        >
        </Avatar>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Lindsey James
        </Heading>
        <Text fontWeight={600} color='gray.500' mb={4}>
          @lindsey_jame
        </Text>
        <Text 
          textAlign='center'
          color='gray.700'
          px={3}
        >
          Actress, musician, songwriter and artist, PM for work inquires
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{ ' '  }
          me in your posts 
        </Text>
        <Stack direction='row' mt={6} align='center' justify='center'>
          <Badge
            fontWeight={'400'}
            px={2}
            py={1}
            bg='gray.50'
          >
            #art 
          </Badge>
          <Badge
            px={2}
            fontWeight={'400'}
            py={1}
            bg='gray.50'
          >
            #musician 
          </Badge>
          <Badge
            fontWeight={'400'}
            px={2}
            py={1}
            bg='gray.50'
          >
            #song writer 
          </Badge>
        </Stack>
        <Stack mt={8} spacing={4} direction='row'>
          <Button 
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{bg:'gray.200'}}
          >
            Message
          </Button>
          <Button 
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            color={'white'}
            bg={'blue.400'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _focus={{bg:'blue.500'}}
            _hover={{bg:'blue.500'}}
          >
            Follow 
          </Button>
        </Stack>
      </Box>
    </Center>
  ); 
}


const TestFlex = () => {
  return (
    <Box
      display='flex'
      height='100vh'
      width='100%'
    >
      <Box bg='tomato' mb={4} ml={4}>Hai Tran Minh</Box>
      <Box bg='tomato' mb={4} ml={4}>Hai Tran Minh</Box>
      <Box bg='tomato' mb={4} ml={4}>Hai Tran Minh</Box>
      <Box bg='tomato' mb={4} ml={4}>Hai Tran Minh</Box>
      <Box bg='tomato' mb={4} ml={4}>Hai Tran Minh</Box>
    </Box>
  );
}


const TestBox = () => {
  return (
    <Box
      bg='tomato'
    >
      <Heading bg={'white'}>ME HERE </Heading>
      <Box
        bg='gray'
      >
        Tran Minh Hai
      </Box>
      <Stack mt={8} spacing={4} direction='row' bg='teal'>
        <Button 
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          _focus={{bg:'gray.200'}}
        >
            Message
        </Button>
        <Button 
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          color={'white'}
          bg={'blue.400'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _focus={{bg:'blue.500'}}
          _hover={{bg:'blue.500'}}
        >
            Follow 
        </Button>
      </Stack>
    </Box>
  );
}

export default TestBox; 
