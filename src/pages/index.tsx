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
import { ArticleLayout, Section, Paragraph } from '../components'
import { motion } from 'framer-motion'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { Si42 } from "react-icons/si"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import { ReactElement } from 'react'

const MotionBox = motion(Box)
const MotionButton = motion(Button)

interface SocialLinkProps {
  href: string
  icon: ReactElement
  label: string
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <ListItem>
    <Link href={href} target="_blank">
      <MotionButton
        variant="ghost"
        colorScheme="teal"
        leftIcon={icon}
        whileHover={{ scale: 1.1 }}
        whiteSpace="nowrap"
        wordBreak="keep-all"
      >
        {label}
      </MotionButton>
    </Link>
  </ListItem>
)

const Page = (): JSX.Element => {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState(i18n.language)

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'pt' : 'en'
    setCurrentLang(newLang)
    router.push(router.pathname, router.asPath, { locale: newLang })
  }

  const socialLinks = [
    { href: "https://github.com/Allandantas21", icon: <IoLogoGithub />, label: "@Allandantas21" },
    { href: "https://www.linkedin.com/in/adn21/", icon: <IoLogoLinkedin />, label: "@Allan Dantas" },
    { href: "https://instagram.com/Allan.dants", icon: <IoLogoInstagram />, label: "@Allan.dants" },
    { href: "https://profile.intra.42.fr/users/aldantas", icon: <Si42 />, label: t('social.fortytwo') }
  ]

  return (
    <ArticleLayout>
      <Container>
        <Box display="flex" justifyContent="flex-end" mb={4}>
        </Box>
        <MotionBox
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
          whileHover={{ scale: 1.1 }}
          wordBreak="keep-all"
          overflowWrap="break-word"
        >
          {t('general.greeting')}
        </MotionBox>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" wordBreak="keep-all" overflowWrap="break-word">
              {t('general.name')}
            </Heading>
            <p style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>{t('general.title')}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
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
          <Heading as="h3" variant="section-title" wordBreak="keep-all" overflowWrap="break-word">
            {t('navigation.about')}
          </Heading>
          <Paragraph style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
            {t('description.about')}
          </Paragraph>
          <Box textAlign="center" my={4}>
            <MotionButton
              as={NextLink}
              href="/projects"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              whileHover={{ scale: 1.1 }}
              whiteSpace="nowrap"
            >
              {t('description.portfolio')}
            </MotionButton>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" wordBreak="keep-all" overflowWrap="break-word">
            {t('navigation.web')}
          </Heading>
          <List>
            {socialLinks.map((link) => (
              <SocialLink key={link.href} {...link} />
            ))}
          </List>
        </Section>
        <Box textAlign="center" my={4}>
          <MotionButton
            as={NextLink}
            href={t('footer.resumeLink')}
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            whileHover={{ scale: 1.1 }}
            whiteSpace="nowrap"
          >
            {t('footer.seeMyCurriculum')}
          </MotionButton>
        </Box>
      </Container>
    </ArticleLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Page
