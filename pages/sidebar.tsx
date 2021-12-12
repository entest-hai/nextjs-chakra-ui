// 11 DEC 2021 TRAN MINH HAI 
// refactor sidebar and hsidebar 
//
import { Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Sidebar = () => {
  return (
    <Flex 
      bg='tomato' 
      height='100vh' 
      width={60} 
      display={{ base: 'none', md: 'block' }}
    >
      <Flex flexDirection='row' justifyContent='flex-end'></Flex>
    </Flex>
  );
}

const HSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Flex>
      <Flex display = {{ base: 'block', md: 'none' }}>
        <Flex 
          bg='tomato' 
          height='100vh' 
          width={60} 
          display={ showSidebar ? 'block' : 'none' }
        >
          <Flex flexDirection='row' justifyContent='flex-end'>
            <Button 
              onClick = { () => {
                setShowSidebar(!showSidebar
                )}}
            >
            Hide
            </Button>
          </Flex>
        </Flex>
      </Flex>      
      <Flex display={{ base: 'block', md: 'none' }}>
        <Button 
          display={ showSidebar ? 'none' : 'flex'}
          onClick={() => {
            setShowSidebar(!showSidebar)
          }}
        >
        Show
        </Button>
      </Flex>
    </Flex>
  ); 
}

const Layout = () => {
  return (
    <Flex width='100%' height='100vh' bg='gray.200'>
      <Sidebar></Sidebar>
      <HSidebar></HSidebar>
    </Flex>
  ); 
}

export default Layout; 
