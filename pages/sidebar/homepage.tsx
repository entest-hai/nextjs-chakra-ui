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
        <Flex maxW={'800px'} direction={'column'}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

const HomePage = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Box height={'100vh'}>
      <Navbar></Navbar>
      <Layout>
        {items.map(item => (
          <Text key={item}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            vel minus doloremque qui obcaecati eligendi rerum, tenetur
            laboriosam, ipsam, perspiciatis officiis animi incidunt. Veniam cum
            unde ut officia perspiciatis distinctio. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Laboriosam aperiam id repellat,
            laborum distinctio rem facilis vel quae impedit, eos repellendus
            dolorem tempora ipsam consectetur delectus doloremque fugit tenetur
            officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus consectetur harum minima perspiciatis nam omnis asperiores
            voluptates, nostrum est dignissimos deleniti quisquam tempore vitae
            reprehenderit reiciendis quibusdam placeat pariatur voluptate?
          </Text>
        ))}
      </Layout>
    </Box>
  )
}

export default HomePage
