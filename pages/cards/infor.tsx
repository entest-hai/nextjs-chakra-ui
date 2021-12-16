import * as React from 'react';
import {BoxProps, 
  Heading, 
  Text, 
  Box, 
  Flex, 
  FlexProps, 
  useColorModeValue, 
  Button } from '@chakra-ui/react';
import {HiPencilAlt} from 'react-icons/hi'; 


interface Props extends FlexProps {
  label: string
  value: string
}

const Property = (props: Props) => {
  const { label, value, ...flexProps } = props
  return (
    <Flex
      as="dl"
      direction={{ base: 'column', sm: 'row' }}
      px="6"
      py="4"
      _even={{ bg: useColorModeValue('gray.50', 'gray.600') }}
      {...flexProps}
    >
      <Box as="dt" minWidth="180px">
        {label}
      </Box>
      <Box as="dd" flex="1" fontWeight="semibold">
        {value}
      </Box>
    </Flex>
  )
}

interface Props {
  title: string
  action?: React.ReactNode
}

const CardHeader = (props: Props) => {
  const { title, action } = props
  return (
    <Flex align="center" justify="space-between" px="6" py="4" borderBottomWidth="1px">
      <Heading fontSize="lg">{title}</Heading>
      {action}
    </Flex>
  )
}

const CardContent = (props: BoxProps) => <Box {...props} />


const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    rounded={{ md: 'lg' }}
    shadow="base"
    overflow="hidden"
    {...props}
  />
)

const CardInforTest = () => (
  <Box as="section" bg={useColorModeValue('gray.100', 'inherit')} py="12" px={{ md: '8' }}>
    <Card maxW="3xl" mx="auto">
      <CardHeader
        title="Account Info"
        action={
          <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
            Edit
          </Button>
        }
      />
      <CardContent>
        <Property label="Name" value="Chakra UI" />
        <Property label="Email" value="chakra-ui.sh@gmail.com" />
        <Property label="Member since" value="February, 2021" />
        <Property label="Subscription Plan" value="Starter Pro" />
      </CardContent>
    </Card>
  </Box>
)

const CompareCards = () => {
  return (
    <Box>
      <Text>
        Reference card
      </Text>
      <CardInforTest></CardInforTest>
      <Text>
        My card
      </Text>
      <Box
        bg='gray.200'
        width='100%'
        py={'50px'}
      >
        <Box
          bg='white'
          shadow='base'
          rounded='lg'
          maxW='3xl'
          mx='auto'
        >
          <Box 
            display='flex' 
            flexDirection='row' 
            justifyContent='space-between'
            borderBottomWidth={'1px'}
            py={4}
            px={6}
          >
            <Heading fontSize='lg'>
              Account Info
            </Heading>
            <Button
              variant='outline'
              leftIcon={<HiPencilAlt></HiPencilAlt>}
            >
              Edit
            </Button>
          </Box>
          <Box>
            <Box 
              display='flex' 
              flexDirection='row' 
              px={6}
              py={4}
            >
              <Box minW='180px'as='dt'>Name</Box>
              <Box fontWeight='bold' as='dd' flex={1}>Chakra UI</Box>
            </Box>
            <Box 
              display='flex' 
              flexDirection='row' 
              px={6}
              py={4}
            >
              <Box minW='180px'as='dt'>Email</Box>
              <Box fontWeight='bold' as='dd' flex={1}>htranminhhai20@gmail.com</Box>
            </Box>
            <Box 
              display='flex' 
              flexDirection='row' 
              px={6}
              py={4}
            >
              <Box minW='180px'as='dt'>Member since</Box>
              <Box fontWeight='bold' as='dd' flex={1}>February, 2021</Box>
            </Box>
            <Box 
              display='flex' 
              flexDirection='row' 
              px={6}
              py={4}
            >
              <Box minW='180px'as='dt'>Subscription Plan</Box>
              <Box fontWeight='bold' as='dd' flex={1}>Starter Pro</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ); 
}



export default CompareCards;


