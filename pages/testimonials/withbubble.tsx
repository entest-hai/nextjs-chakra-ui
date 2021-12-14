import {
  Box,
  Container,
  Heading,
  Stack,
  useColorModeValue,
  Text,
  Flex,
  Avatar
} from '@chakra-ui/react';

const Bubble = () => {
  return (
    <Box>
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: '""',
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <Heading as={'h3'} fontSize={'xl'}>
        Efficient Collaborating
        </Heading>
        <Text
          textAlign='center'
          color={useColorModeValue('gray.600', 'gray.500')}
          fontSize={'sm'}
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
        neque sed imperdiet nibh lectus feugiat nunc sem.
        </Text>
      </Stack>
      <Flex align='center' mt={8} direction='column'>
        <Avatar
          src='https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          name='Jane Cooper'
          mb={2}
        >
        </Avatar>
        <Stack spacing={-1} align={'center'}>
          <Text
            fontWeight={600}
          >
            Jane Cooper
          </Text>
          <Text
            fontSize={'sm'}
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            CEO at ABC Corporation
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

const WithSpeechBubbles = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align='center'>
          <Heading>Our Clients</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Bubble></Bubble>
          <Bubble></Bubble>
          <Bubble></Bubble>
        </Stack>
      </Container>
    </Box>
  );
}

export default WithSpeechBubbles
