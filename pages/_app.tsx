import { ChakraProvider, 
  extendTheme, 
  ThemeConfig } from '@chakra-ui/react';
import Layout from './layout/layout';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config }) 

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps}></Component>
    </ChakraProvider>
  );
}

