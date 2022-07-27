import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { getSeo } from 'utils/seo'
import FontFace from 'components/font-face'
import theme from 'theme'

export default function App({ Component, pageProps }) {
  const seo = getSeo()

  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <meta name="theme-color" content="#319795" />
      </Head>
      <DefaultSeo {...seo}></DefaultSeo>
      <ChakraProvider theme={theme}>
        <Component {...pageProps}></Component>
      </ChakraProvider>
      <FontFace></FontFace>
    </>
  )
}
