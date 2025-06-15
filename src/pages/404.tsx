import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'

const NotFound = (): JSX.Element => {
  const { t } = useTranslation('common');
  return (
    <Container>
      <Heading as="h1">{t('notFound.title', 'Not found')}</Heading>
      <Text>{t('notFound.description', "The page you're looking for was not found.")}</Text>
      <Divider my={6} />
      <Box my={6} textAlign="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          {t('notFound.home', 'Return to home')}
        </Button>
      </Box>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default NotFound