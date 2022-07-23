import { Box } from '@chakra-ui/react'

export default function DefaultLayout({ children, ...rest }) {
  return (
    <Box bg={'teal.100'} height={'100vh'} {...rest}>
      {children}
    </Box>
  )
}
