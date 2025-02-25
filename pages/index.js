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
  useColorModeValue,
  Tooltip,
  useBreakpointValue
} from '@chakra-ui/react'
import { ChevronRightIcon, InfoIcon } from '@chakra-ui/icons' // added InfoIcon
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
import { name } from 'file-loader'

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
    { 
      year: t('timeline.dates.sep2003'), 
      text: t('timeline.events.bornInColinas'),
      mob: "Colinas, Maranhão"
    },
    { 
      year: t('timeline.dates.jul2023'), 
      text: t('timeline.events.startedStudyingEcole42'),
      detail: t('timeline.details.startedStudyingEcole42'),
      mob: "Eng. software - 42Rio"
    },
    { 
      year: t('timeline.dates.oct2024ToFeb2025'), 
      text: t('timeline.events.workingIn42Labs'),
      detail: t('timeline.details.workingIn42Labs'),
      mob: "42Labs"
    },
    { 
      year: t('timeline.dates.mar2025ToPresent'),
      text: t('timeline.events.workingInCI&T'),
      detail: t('timeline.details.workingInCI&T'),
      mob: "CI&T"
    }
  ]

  const socialLinks = [
    { href: "https://github.com/Allandantas21", icon: <IoLogoGithub />, label: "@Allandantas21" },
    { href: "https://www.linkedin.com/in/adn21/", icon: <IoLogoLinkedin />, label: "@Allan Dantas" },
    { href: "https://instagram.com/Allan.dants", icon: <IoLogoInstagram />, label: "@Allan.dants" },
    { href: "https://profile.intra.42.fr/users/aldantas", icon: <Si42 />, label: t('social.fortytwo') }
  ]

  const isMobile = useBreakpointValue({ base: true, md: false });

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
          {t('general.greeting')}
        </MotionBox>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t('general.name')}
            </Heading>
            <p>{t('general.title')}</p>
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
              alt={t('general.name')}
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t('navigation.about')}
          </Heading>
          <Paragraph>
            {t('description.about')}
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
              {t('description.portfolio')}
            </MotionButton>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant='section-title'>
            {t('navigation.biography')}
          </Heading>
          {bioData.map((bio) => (
            <BioSection key={bio.year}>
              <BioYear>
                {bio.year}
                {bio.detail && !isMobile ?
                <Tooltip pointerEvents={"all"} 
                         closeDelay={200}
                         openDelay={100}
                         label={bio.detail} 
                         aria-label="Detalhes da experiência" 
                         placement="top" hasArrow>
                  <InfoIcon ml={2} cursor="pointer"  />
                </Tooltip>
                : null }
              </BioYear>
              {bio.text && !isMobile 
              ? bio.text 
              : bio.mob }
            </BioSection>
          ))}
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('navigation.web')}
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
            href={t('footer.resumeLink')}
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            whileHover={{ scale: 1.1 }}
          >
            {t('footer.seeMyCurriculum')}
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
