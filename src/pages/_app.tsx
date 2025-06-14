import { ChakraProvider } from '@chakra-ui/react'
import { MainLayout, Fonts } from '../components'
import { theme } from '../lib'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config'
import { AppProps } from 'next/app'

const Website = ({ Component, pageProps, router }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <MainLayout router={router}>
                <AnimatePresence mode="wait" initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </MainLayout>
        </ChakraProvider>
    )
}

export default appWithTranslation(Website, nextI18NextConfig)