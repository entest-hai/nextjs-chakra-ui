import Link from 'next/link'
import { Text, useColorModeValue, chakra, Image, Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

export const EntestLogo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" passHref>
      <chakra.a display="block" aria-label="Chakra UI, Back to homepage">
        <LogoBox>
          <Image src={footPrintImg} width={25} height={25} alt="entest-logo" />
          <Box display={{ sm: 'none', md: 'block' }}>
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c", sans-serif'
              fontWeight="bold"
              ml={3}
            >
              Entest
            </Text>
          </Box>
        </LogoBox>
      </chakra.a>
    </Link>
  )
}
