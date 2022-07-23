import { Box, Container, Flex, Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex
      bg={'green.200'}
      minH={'16'}
      align="center"
      justifyContent={'center'}
      position={'fixed'}
      width={'100%'}
    >
      <Flex
        bg={'orange.200'}
        justifyContent="space-between"
        width={'100%'}
        maxW={'800px'}
      >
        <Text>Logo</Text>
        <Text>Menu</Text>
      </Flex>
    </Flex>
  )
}

const Sidebar = () => {
  return (
    <Flex
      height={'100vh'}
      bg={'teal.100'}
      width={'60'}
      display={{ base: 'none', md: 'block' }}
      position={'fixed'}
      marginTop={'16'}
      px={'4'}
    >
      <Text>Home</Text>
    </Flex>
  )
}

const HomePage = () => {
  return (
    <Box bg={'gray.100'} height={'100vh'}>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Flex
        marginTop={'16'}
        marginLeft={{ base: 'none', md: '60' }}
        bg={'teal.400'}
        position={'fixed'}
        justifyContent={'center'}
        align={'center'}
        width={'100%'}
      >
        <Flex maxW={'800px'} bg={'orange.100'}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            rem! Aperiam omnis similique accusamus accusantium dolore,
            perferendis eveniet hic laboriosam itaque unde necessitatibus dicta
            facere quae ratione cumque velit nostrum. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Iure eius assumenda, aperiam
            explicabo perferendis voluptatum quos ea enim, natus quidem numquam
            obcaecati, harum velit molestiae sed hic maiores beatae cumque!
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default HomePage
