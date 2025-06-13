import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import { Analytics } from "@vercel/analytics/react"  

const Main = ({ children, router }) => (
    <Box as="main" pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="favicon"  href="/favicon.ico" type="image/x-icon" />
            <title>Allan's - Homepage</title>
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW="container.md" pt={14}>
            <Analytics />
            {children}
        </Container>
    </Box>
)

export default Main