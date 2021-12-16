import { Box } from '@chakra-ui/react';

const BoxTakeRemainHeight = () => {
  return (
    <Box
      width='100%'
      height='100vh'
      overflow='auto'
      position='relative'
    >
      <Box
        width='90%'
        height='100vh'
        overflow='auto'
        mx='auto'
      >
        <Box height={'60px'}></Box>
        {[...Array(10).keys()].map((val) => {
          return (
            <Box 
              bg='green.200' 
              height={'200px'} 
              py={'10px'} 
              my={'10px'} 
              key={val}
            >
              {val}
            </Box>
          )})}
      </Box>
      <Box 
        bg='tomato' 
        height='60px' 
        width='100%' 
        zIndex={1} 
        position='absolute'
        top='0px'
      >
      </Box>
    </Box>
  ); 
}

export default BoxTakeRemainHeight; 
