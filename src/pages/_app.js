import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
            <AnimatePresence mode="wait" initial={true}>
                <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default appWithTranslation(Website, nextI18NextConfig)