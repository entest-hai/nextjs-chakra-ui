import {Box} from '@chakra-ui/react';

const Nav = () => {
  return (
    <Box
      position='absolute'
      left={0}
      width='100vw'
      height={59}
      bg='tomato'
      zIndex={1}
    >
    </Box>
  )
}

const Layout = ({ children }) => {
  return (
    <Box 
      maxWidth='5xl' 
      bg='gray.100'
      mx='auto'
    >
      <Nav></Nav>
      {children}
    </Box>
  ); 
}

export default Layout; 
