import NextLink from 'next/link'
import { 
  Container,
  Box,
  Heading,
  Image,
  Button,
  List,
  ListItem,
  Link,
  useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { BioSection, BioYear } from '../components/bio.js'
import { Si42 } from "react-icons/si"

const Page = () => {
    return (
      <Layout>
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
            <Heading as="h3" Variant="section-title">
            About
            </Heading>
            <Paragraph>
            Hello, I'm a software engineering student at 42Rio, 
            passionate about technology and 
            committed to developing myself as a Full Stack programmer.
            </Paragraph>
          <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
          </Section>

          <Section delay={0.2}>
            <Heading as="h3" variant='section-title'>
            Bio
            </Heading>
            <BioSection>
              <BioYear> Set 2003</BioYear>
              Born in Colinas, Maranhão.
            </BioSection>
            <BioSection>
              <BioYear> Dec 2007</BioYear>
              Move to Rio de janeiro.
            </BioSection>
            <BioSection>
              <BioYear> Dec 2022</BioYear>
              Start studying systems development - Estácio.
            </BioSection>
            <BioSection>
              <BioYear> July 2023</BioYear>
              Start studying software engineering - Ecole 42.
            </BioSection>
            <BioSection>
              <BioYear> Oct 2024 to present</BioYear>
              Working in 42Labs.
            </BioSection>
          </Section>
          
          <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Allandantas21" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Allandantas21
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/adn21/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Allan Dantas
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/Allan.dants" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Allan.dants
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://profile.intra.42.fr/users/aldantas" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Si42 />}
              >
                @Aldantas (for 42 students)
              </Button>
            </Link>
          </ListItem>
        </List>
        </Section>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://drive.google.com/file/d/1ZhIe-Toqcr0nGjjk7cOF4odok3ELKY6e/view?usp=sharing"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            See my curriculum
          </Button>
        </Box>
        </Container>
        </Layout>
)
}

export default Page