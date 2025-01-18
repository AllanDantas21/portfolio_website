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
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '../data/social-links.js'
import { BIO_DATA } from '../data/bio-data.js'

const MotionBox = motion(Box)
const MotionButton = motion(Button)

const SocialLink = ({ href, icon, label }) => (
  <ListItem>
    <Link href={href} target="_blank">
      <MotionButton
        variant="ghost"
        colorScheme="teal"
        leftIcon={icon}
        whileHover={{ scale: 1.1 }}
      >
        {label}
      </MotionButton>
    </Link>
  </ListItem>
)

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
          {BIO_DATA.map(({ year, text }) => (
            <BioSection key={year}>
              <BioYear>{year}</BioYear>
              {text}
            </BioSection>
          ))}
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.href} {...link} />
            ))}
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
