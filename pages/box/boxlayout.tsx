// 16 DEC 2021 TRAN MINH HAI Box, Flex, Stack, VStack, HStack, Container, Center, before, after
// Box 
// Box display flex 
// Box display flex alignItems-center, justifyContent-center 
// Box display flex alignItems-center, justifyContent-space-between

import { Avatar, ListItem,ListIcon, VStack, Badge, Box, Button, Heading, HStack, List, Stack, Text, useColorModeValue } from '@chakra-ui/react'; 
import { FaCheckCircle } from 'react-icons/fa';
import { HiPencilAlt } from 'react-icons/hi'; 


const TestBox = () => {
  return (
    <Box width='100%' bg='gray.200' py={10}>
      <Box bg='tomato' py={10} my={4} maxW='3xl' mx='auto'>
        The first box
      </Box>
      <Box bg='tomato' py={10} my={4}>
        The first box
      </Box>
      <Box bg='tomato' py={10} my={4}>
        The first box
      </Box>
    </Box>
  ); 
}


const TestFlexBox = () => {
  return (
    <Box 
      width='100%' 
      bg='gray.200' 
      py={10} 
      display='flex'
    >
      <Box bg='tomato' py={10} mx={4} flexBasis={'3xl'}>
        The first flex box
      </Box>
      <Box bg='tomato' py={10} mx={4}>
        The first flex box
      </Box>
      <Box bg='tomato' py={10} mx={4}>
        The first flex box
      </Box>
    </Box>
  );
}

const BasicBox = () => {
  return (
    <Box bg='gray.200'>
      <Box m={2} width='100px' height='100px' bg='tomato'></Box>
      <Box m={2} width='100px' height='100px' bg='tomato'></Box>
      <Box m={2} width='100px' height='100px' bg='tomato'></Box>
    </Box>
  );
}

const FlexBox = () => {
  return (
    <Box 
      bg='gray.200' 
      display='flex' 
      justifyContent='center' 
      height='200px' 
      alignItems='center'
    >
      <Box m={2} width='100px' height='100px' bg='tomato'></Box>
      <Box m={2} width='100px' height='100px' bg='tomato'></Box>
      <Box m={2} width='100px' height='100px' bg='tomato'></Box>
    </Box>
  );
}

const FlexBoxSpaceBetween = () => {
  return (
    <Box 
      bg='gray.200' 
      display='flex' 
      justifyContent='space-between' 
      height='200px' 
      alignItems='center'
    >
      <Box m={2} width='100px' height='100px' bg='tomato'></Box>
      <Box m={2} width='100px' height='100px' bg='tomato'></Box>
      <Box m={2} width='100px' height='100px' bg='tomato'></Box>
    </Box>
  );
}


const BoxTextAlign = () => {
  return (
    <Box 
      bg='gray.200' 
      display='flex' 
      flexDirection='column' 
      alignItems='center'
      height='200px'
      justifyContent='center'
    >
      <Text fontSize='2xl' fontWeight={500}>
        Hobby
      </Text>
      <Button
        w='200px'
        mt={8}
        colorScheme='teal'
        variant='solid'
        bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
      >
        Start Trials
      </Button>
    </Box>
  ); 
}

const BoxCard = () => {
  return (
    <Box
      bg='gray.200'
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
    >
      <Box
        textAlign='center'
        maxW={'320px'}
        rounded='lg'
        w='full'
        p={6}
        m={6}
        bg='white'
        boxShadow={'2xl'}
      >
        <Avatar
          size='xl'
          alt='Avatar Alt'
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 6,
            h: 6,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: '0px', 
            right: '0px'
          }}
          icon={<Text>HT</Text>}
        >
        </Avatar>
        <Heading
          fontSize='2xl' 
          fontFamily='body'
        >
          Hai Tran
        </Heading>
        <Text
          fontWeight={600}
          color='gray.500'
          mb={4}
        >
          @lindsey_jam3s
        </Text>
        <Text
          textAlign='center'
          color='gray.700'
          px={3}
        >
          Actress, musician, songwriter, and artist. PM for work inquries
        </Text>
        <Stack align='center' justify='center' direction='row' mt={6}>
          <Badge
            px={2}
            py={2}
            bg={'gray.50'}
          >
            #art 
          </Badge>
          <Badge
            px={2}
            py={2}
            bg={'gray.50'}
          >
            #music 
          </Badge>
          <Badge
            px={2}
            py={2}
            bg={'gray.50'}
          >
            #photography 
          </Badge>
        </Stack>
        <HStack
          justifyContent='space-between'
          mt={8}
          spacing={4}
        >
          <Button
            flex={1}
            fontSize='sm'
            rounded='full'
            _focus={{
              bg:'gray.200'
            }}
          >
            Message
          </Button>
          <Button 
            flex={1}
            fontSize='sm'
            rounded='full'
            bg={'blue.400'}
            color='white'
            _hover={{
              bg:'blue.500'
            }}
            _focus={{
              bg:'blue.500'
            }}
          >
            Follow
          </Button>
        </HStack>
      </Box>
    </Box>
  ); 
}

const BoxPriceCard = () => {
  return (
    <Box
      borderWidth='1px'
      borderRadius={'xl'}
      borderColor='gray.200'
      shadow='base'
      rounded='lg'
      bg='white'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      position='relative'
    >
      <Box
        position="absolute"
        top="-16px"
        left="50%"
        style={{ transform: 'translate(-50%)' }}>
        <Text
          textTransform="uppercase"
          bg={useColorModeValue('red.300', 'red.700')}
          px={3}
          py={1}
          color={useColorModeValue('gray.900', 'gray.300')}
          fontSize="sm"
          fontWeight="600"
          rounded="xl">
                Most Popular
        </Text>
      </Box>
      <Box py={4} px={12} textAlign='center'>
        <Text fontWeight="500" fontSize="2xl">
                Growth
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" fontWeight="600">
                  $
          </Text>
          <Text fontSize="5xl" fontWeight="900">
                  149
          </Text>
          <Text fontSize="3xl" color="gray.500">
                  /month
          </Text>
        </HStack>
      </Box>
      <VStack
        bg={useColorModeValue('gray.50', 'gray.700')}
        py={4}
        borderBottomRadius={'xl'}>
        <List spacing={3} textAlign="start" px={12}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
          </ListItem>
        </List>
        <Box w="80%" pt={7}>
          <Button w="full" colorScheme="red">
                  Start trial
          </Button>
        </Box>
      </VStack>
    </Box>
  ); 
}

const BoxPrice = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%' 
      height='700px' 
      position='relative'
    >
      <BoxPriceCard></BoxPriceCard>
    </Box>
  ); 
}


const BoxThreePriceCard = () => {
  return (
    <Box
      bg='gray.200'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      py={10}
    >
      <VStack spacing={2} textAlign='center'>
        <Heading
          as='h1'
          fontSize='4xl'
        >
          Plans that fit your need
        </Heading>
        <Text fontSize='lg' color='gray.500'>
          Start with 14-day free trial. No credit card needed. Cancel at anytime. 
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <BoxPriceCard></BoxPriceCard>
        <BoxPriceCard></BoxPriceCard>
        <BoxPriceCard></BoxPriceCard>
      </Stack>
    </Box>
  ); 
}

const CardInfor = () => {

  return (
    <Box
      bg='gray.200' 
      width='100%' 
      as='section'
      py={10}
    >
      <Box
        mx='auto'
        maxW={'3xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={{ md: 'lg' }}
        shadow='base'
        overflow='hidden'
      >
        <Box
          px={'6'}
          py={'4'}
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          borderBottomWidth={'1px'}
        >
          <Heading 
            fontSize='lg'
          >
            Account Info
          </Heading>
          <Button 
            minW='20'
            variant='outline'
            leftIcon={<HiPencilAlt></HiPencilAlt>}
          >
            Edit
          </Button>
        </Box>
        <Box>
          <Box
            as="dl"
            px='6'
            py='4'
            display='flex'
            flexDirection='row'
          >
            <Box as='dt' minWidth='180px'>
              Name
            </Box>
            <Box as='dd' flex={1} fontWeight='semibold'>
              Chakra UI
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            px='6'
            py='4'
            bg={'gray.50'}
          >
            <Box as='dt' minWidth='180px'>
              Email
            </Box>
            <Box as='dd' flex={1} fontWeight='semibold'>
              htranminhhai20@gmail.com
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            px='6'
            py='4'
            bg={'gray.50'}
          >
            <Box as='dt' minWidth='180px'>
              Email
            </Box>
            <Box as='dd' flex={1} fontWeight='semibold'>
              htranminhhai20@gmail.com
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            px='6'
            py='4'
            bg={'gray.50'}
          >
            <Box as='dt' minWidth='180px'>
              Email
            </Box>
            <Box as='dd' flex={1} fontWeight='semibold'>
              htranminhhai20@gmail.com
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


const XCenterBoxByMargin = () => {
  return (
    <Box bg='gray.200' width='100%'py={10}>
      <Box width='500px' height='300px' bg='tomato' mx='auto'>
      </Box>
    </Box>
  );
}

const XCenterBoxContent = () => {
  return (
    <Box 
      bg='gray.200' 
      width='100%' py='10'
    >
      <Box 
        bg='tomato' 
        display='flex' 
        flexDirection='row' 
        justifyContent='space-between'
        px={4}
        py={6}
        maxW='3xl'
        mx='auto'
      >
        <Box 
          minW={'180px'}
        >
            Name
        </Box>
        <Box 
          fontWeight='semibold'
          flex={1}
        >
            Tran Minh Hai
        </Box>
      </Box>
    </Box>
  );
}


const XCenterFlexBoxContent = () => {
  return (
    <Box 
      bg='gray.200' 
      width='100%' py='10'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Box
        maxW='3xl'
        bg='tomato' 
        display='flex' 
        flexDirection='row' 
        justifyContent='space-between'
        px={4}
        py={6}
      >
        <Box 
          minW='180px'
        >
            Name
        </Box>
        <Box
          fontWeight='semibold'
        >
            Tran Minh Hai
        </Box>
      </Box>
    </Box>
  );
}

const BasicLayout = () => {
  return (
    <Box width='100%'>
      <Text>Test simple Box</Text>
      <TestBox></TestBox>
      <Text>Test flex Box</Text>
      <TestFlexBox></TestFlexBox>
      <Text>The most basic box, as a div with items in a column</Text>
      <BasicBox></BasicBox>
      <Text>Box with display flex, justifyContent-center-main-axis, alignItems-center-cross-axis</Text>
      <FlexBox></FlexBox>
      <Text>Box with display flex, justifyContent-space-between</Text>
      <FlexBoxSpaceBetween></FlexBoxSpaceBetween>
      <Text>Box display-flex, flexDirection-column, alignItems-center, justifyContent-center</Text>
      <BoxTextAlign></BoxTextAlign>
      <Text>Creat a Login-Card-Profile using Box</Text>
      <BoxCard></BoxCard>
      <Text>Price Box</Text>
      <BoxPrice></BoxPrice>
      <Text>Three price box</Text>
      <BoxThreePriceCard></BoxThreePriceCard>
      <Text>Card information</Text>
      <CardInfor></CardInfor>
      <Text>Center box by auto-margin</Text>
      <XCenterBoxByMargin></XCenterBoxByMargin>
      <Text>XCenter box content by auto-margin</Text>
      <XCenterBoxContent></XCenterBoxContent>
      <Text>XCenter flex box content</Text>
      <XCenterFlexBoxContent></XCenterFlexBoxContent>
    </Box>
  ); 
}


export default BasicLayout; 
