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
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { Si42 } from "react-icons/si"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useState } from 'react'

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
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState(i18n.language)

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'pt' : 'en'
    setCurrentLang(newLang)
    router.push(router.pathname, router.asPath, { locale: newLang })
  }

  const bioData = [
    { year: t('sep2003'), text: t('bornInColinas') },
    { year: t('jul2023'), text: t('startedStudyingEcole42') },
    { year: t('oct2024ToFeb2025'), text: t('workingIn42Labs') },
    { year: t('mar2025ToPresent'), text: t('workingInCI&T') }
  ]

  const socialLinks = [
    { href: "https://github.com/Allandantas21", icon: <IoLogoGithub />, label: "@Allandantas21" },
    { href: "https://www.linkedin.com/in/adn21/", icon: <IoLogoLinkedin />, label: "@Allan Dantas" },
    { href: "https://instagram.com/Allan.dants", icon: <IoLogoInstagram />, label: "@Allan.dants" },
    { href: "https://profile.intra.42.fr/users/aldantas", icon: <Si42 />, label: t('42link') }
  ]

  return (
    <Layout>
      <Container>
        <Box display="flex" justifyContent="flex-end" mb={4}>
        </Box>
        <MotionBox 
          borderRadius="lg" 
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
          p={3} 
          mb={6} 
          align="center"
          whileHover={{ scale: 1.1 }}
        >
          {t('hello')}
        </MotionBox>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t('name')}
            </Heading>
            <p>{t('softwareEngineeringStudent')}</p>
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
              alt={t('name')}
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t('about')}
          </Heading>
          <Paragraph>
            {t('aboutDescription')}
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
              {t('myPortfolio')}
            </MotionButton>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant='section-title'>
            {t('bio')}
          </Heading>
          {bioData.map((bio) => (
            <BioSection key={bio.year}>
              <BioYear>{bio.year}</BioYear>
              {bio.text}
            </BioSection>
          ))}
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('onTheWeb')}
          </Heading>
          <List>
            {socialLinks.map((link) => (
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
            {t('seeMyCurriculum')}
          </MotionButton>
        </Box>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Page
