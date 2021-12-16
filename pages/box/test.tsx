// 16 DEC 2021 TRAN MINH HAI Box, Flex, Stack, VStack, HStack, Container, Center, before, after
// Box 
// Box display flex 
// Box display flex alignItems-center, justifyContent-center 
// Box display flex alignItems-center, justifyContent-space-between

import { Avatar, Badge, Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'; 

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

const BasicLayout = () => {
  return (
    <Box width='100%'>
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
    </Box>
  ); 
}


export default BasicLayout; 