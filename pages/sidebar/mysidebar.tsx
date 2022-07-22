import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const MySidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box height={'100vh'}>
      <Flex
        position={'fixed'}
        bg={'orange.200'}
        minH={'16'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
        direction={'row'}
        px={'8'}
      >
        <IconButton
          aria-label="menu"
          icon={<FiMenu></FiMenu>}
          onClick={onOpen}
        ></IconButton>
        <Text>Logo</Text>
      </Flex>

      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} size={'xs'}>
        <DrawerOverlay></DrawerOverlay>
        <DrawerContent>
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            p={'4'}
            bg={'teal.100'}
          >
            <Text>Logo</Text>
            <IconButton
              aria-label="close-menu"
              icon={<MdClose></MdClose>}
              onClick={onClose}
            ></IconButton>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default MySidebar
