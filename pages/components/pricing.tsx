import { Box, ListItem, Heading, Text, VStack, HStack, Button, List, ListIcon, useColorModeValue } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa'; 

const Pricing = () => {
  return (
    <Box
      bg='gray.50'
      shadow='base'
      borderWidth='18px'
      borderRadius={'xl'}
      alignSelf='flex-start'
    >
      <Box py={4} px={12} textAlign='center'>
        <Text fontWeight="500" fontSize="2xl">
              Hobby
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" fontWeight="600">
                $
          </Text>
          <Text fontSize="5xl" fontWeight="900">
                79
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
        </List>
        <Box w="80%" pt={7}>
          <Button w="full" colorScheme="red" variant="outline">
                Start trial
          </Button>
        </Box>
      </VStack>
    </Box>
  ); 
}

export default Pricing; 
