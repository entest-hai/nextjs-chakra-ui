import { Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Flex width='100%' height='100vh' bg='gray.200'>
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
      <Button 
        display={ showSidebar ? 'none' : 'flex'}
        onClick={() => {
          setShowSidebar(!showSidebar)
        }}
      >
        Show
      </Button>
    </Flex>
  ); 
}

export default Layout; 
