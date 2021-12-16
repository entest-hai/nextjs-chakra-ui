// 16 DEC 2021 TRAN MINH HAI Box, Flex, Stack, VStack, HStack, Container, Center, before, after
// Box 
// Box display flex 
// Box display flex alignItems-center, justifyContent-center 
// Box display flex alignItems-center, justifyContent-space-between

import { Box, Button, Text } from '@chakra-ui/react'; 

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
    </Box>
  ); 
}


export default BasicLayout; 
