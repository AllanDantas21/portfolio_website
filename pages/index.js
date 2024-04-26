import { 
     Container,
     Box,
     Heading, 
     Image,
     useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section.js'

const Page = () => {
    return (
        <Container>
        <Box borderRadius="lg" 
        bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} 
        p={3} 
        mb={6} 
        align="center">
                Hello! i'm a ecole 42 student!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" Variant="page-title">
                    Allan Dantas
                    </Heading>
                    <p>Software Engineering Student</p>
                </Box>
                <Box 
                flexShrink={0} 
                mt={{base: 4, md: 0}} 
                ml={{md: 6}} 
                align="center">
                <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inline-block" 
                borderRadius="full" 
                src="images/allan.jpeg" 
                alt="Profile Image"/>
             </Box>
            </Box>
          <Section delay={0.1}>
            <Heading as="h5" Variant="section-title">
            About
            </Heading>
            {/* <Paragraph>
                asdaipduioa
            </Paragraph> */}
          </Section>
        </Container>
)
}

export default Page