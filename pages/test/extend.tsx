// 17 DEC 2021  TRAN MINH HAI 
// Test interface extends props 

import { Box, BoxProps } from '@chakra-ui/react';


interface MyBox extends BoxProps {
  name: string; 
}


const MyBox = ({name, ...rest}) => {
  return (
    <Box
      alignItems='center'
      justifyContent='center'
      {...rest}
      fontSize={30}
    >
      {name}
    </Box>
  );
}


const Extend  = () => {
  return (
    <Box 
      width='100%' 
      height='100vh' 
      bg='tomato'
    >
      <MyBox
        bg='green.200'
        height={16}
        name={'Entest'}
        width='100%'
        display='flex'
      >
      </MyBox> 
    </Box>
  );
}

export default Extend; 
