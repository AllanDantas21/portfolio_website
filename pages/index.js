import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
        <Box borderRadius="lg" color="white" bg="#1D4044" p={3} mb={6} align="center">
                Hello! i'm a ecole 42 student!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" Variant="page-title">
                    Allan Dantas
                    </Heading>
                    <p>Software Engineering Student</p>
                </Box>
            </Box>
        </Container>
)
}

export default Page