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
  useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { Si42 } from "react-icons/si"
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionButton = motion(Button)

const Page = () => {
  return (
    <Layout>
      <Container>
        <MotionBox 
          borderRadius="lg" 
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
          p={3} 
          mb={6} 
          align="center"
          whileHover={{ scale: 1.1 }}
        >
          Hello! I'm an Ecole 42 student!
        </MotionBox>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Allan Dantas
            </Heading>
            <p>Software Engineering Student</p>
          </Box>
          <Box 
            flexShrink={0} 
            mt={{ base: 4, md: 0 }} 
            ml={{ md: 6 }} 
            align="center"
          >
            <Image 
              borderColor="whiteAlpha.800" 
              borderWidth={2} 
              borderStyle="solid" 
              maxWidth="100px" 
              display="inline-block" 
              borderRadius="full" 
              src="images/allan.jpeg" 
              alt="Allan Dantas"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Hello, I'm a software engineering student at 42Rio, 
            passionate about technology and 
            committed to developing myself as a Full Stack programmer.
          </Paragraph>
          <Box align="center" my={4}>
            <MotionButton
              as={NextLink}
              href="/projects"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              whileHover={{ scale: 1.1 }}
            >
              My portfolio
            </MotionButton>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>Sep 2003</BioYear>
            Born in Colinas, Maranhão.
          </BioSection>
          <BioSection>
            <BioYear>Dec 2007</BioYear>
            Moved to Rio de Janeiro.
          </BioSection>
          <BioSection>
            <BioYear>Dec 2022</BioYear>
            Started studying systems development - Estácio.
          </BioSection>
          <BioSection>
            <BioYear>Jul 2023</BioYear>
            Started studying software engineering - Ecole 42.
          </BioSection>
          <BioSection>
            <BioYear>Oct 2024 to present</BioYear>
            Working in 42Labs.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem key="github">
              <Link href="https://github.com/Allandantas21" target="_blank">
                <MotionButton
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                  whileHover={{ scale: 1.1 }}
                >
                  @Allandantas21
                </MotionButton>
              </Link>
            </ListItem>
            <ListItem key="linkedin">
              <Link href="https://www.linkedin.com/in/adn21/" target="_blank">
                <MotionButton
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                  whileHover={{ scale: 1.1 }}
                >
                  @Allan Dantas
                </MotionButton>
              </Link>
            </ListItem>
            <ListItem key="instagram">
              <Link href="https://instagram.com/Allan.dants" target="_blank">
                <MotionButton
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                  whileHover={{ scale: 1.1 }}
                >
                  @Allan.dants
                </MotionButton>
              </Link>
            </ListItem>
            <ListItem key="42">
              <Link href="https://profile.intra.42.fr/users/aldantas" target="_blank">
                <MotionButton
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Si42 />}
                  whileHover={{ scale: 1.1 }}
                >
                  @Aldantas (for 42 students)
                </MotionButton>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Box align="center" my={4}>
          <MotionButton
            as={NextLink}
            href="https://drive.google.com/file/d/1ZhIe-Toqcr0nGjjk7cOF4odok3ELKY6e/view?usp=sharing"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            whileHover={{ scale: 1.1 }}
          >
            See my curriculum
          </MotionButton>
        </Box>
      </Container>
    </Layout>
  )
}

export default Page