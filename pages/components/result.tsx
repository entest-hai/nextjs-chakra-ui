import {Text, Box, Heading, Button } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Box textAlign='center' py={10} px={6}>
      <Heading
        size='2xl'
        as='h2'
        bgGradient='linear(to-r, teal.400, teal.600)'
        backgroundClip='text'
      >
        404
      </Heading>
      <Text
        fontSize='18px'
        mt={3}
        mb={2}
      >
        Page Not Found
      </Text>
      <Text
        color={'gray.500'}
        mb={5}
      >
        The page you're looking for does not seem exist 
      </Text>
      <Button
        bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
        color='white'
        variant='solid'
      >
        Go to home 
      </Button>
    </Box>
  ); 
}

export default NotFound; 
