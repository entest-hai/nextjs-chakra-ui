// 10 DEC 2022 TRAN MINH HAI 
// justifyContent for main-axis for example column growth 
// alignItems for cross-axis
// conflict Flex overflow and justifyContent cause missing items   

import { Box, Flex, VStack, FlexProps } from '@chakra-ui/react';


interface ChatBubbleProp extends FlexProps{
  message: string
}

const ChatBubble = ({ message }: ChatBubbleProp) => {
  return (
    <VStack mt={6} alignItems={'flex-start'}>
      <Box 
        bg={'blue.50'} 
        px={6} 
        py={4} 
        borderTopLeftRadius={32} 
        borderTopRightRadius={32} 
        borderBottomLeftRadius={0} 
        borderBottomRightRadius={32}
      >
        {message}
      </Box>
    </VStack>
  ); 
}

const Center = () => {

  const messages: Array<string> = [... Array(100).keys()].map((index) => 'Hello Hai Tran' + index)

  return (
    <Flex
      bg='gray.200'
      width='100%'
      height='100vh'
      align='center'
      flexDirection='column'
      overflow='auto'
    >
      <Flex
        p={10}
        bg='tomato'
        overflow='auto'
        flexDirection='column'
      >
        {messages.map((message, index) => { 
          return <ChatBubble key={index} message={message}></ChatBubble> 
        })}
      </Flex>
    </Flex>
  );
}

export default Center; 
