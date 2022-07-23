import { Box, Flex, Text } from '@chakra-ui/react'

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

const Layout = ({ children }) => {
  return (
    <Flex direction={'row'} bg={'orange.100'}>
      <Flex
        height={'100vh'}
        bg={'teal.100'}
        width={'60'}
        display={{ base: 'none', md: 'block' }}
        marginTop={'16'}
        px={'4'}
        position={'fixed'}
      >
        <Text>Home</Text>
      </Flex>
      <Flex
        width={'100%'}
        // bg={'gray.200'}
        mt={'16'}
        justifyContent={'center'}
        ml={{ base: '0', md: '60' }}
      >
        <Flex maxW={'800px'}>{children}</Flex>
      </Flex>
    </Flex>
  )
}

const HomePage = () => {
  return (
    <Box height={'100vh'}>
      <Navbar></Navbar>
      <Layout>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, magnam
          dolores amet tempore maiores modi est earum eveniet ex adipisci
          praesentium assumenda nobis ut, voluptate numquam aspernatur, debitis
          quos error? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nesciunt, at voluptate praesentium itaque id architecto neque vel
          officiis distinctio mollitia ducimus, ab iste sit, eos consectetur
          temporibus soluta sint? At. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Expedita esse, officia inventore ad eos magni est
          deleniti placeat dignissimos, totam nihil beatae consequatur odio
          quos, quia nemo laborum nesciunt doloribus.
        </Text>
      </Layout>
    </Box>
  )
}

export default HomePage
