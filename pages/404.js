import NextLink from 'next/link'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  const { t } = useTranslation('common');
  return (
    <Container>
      <Heading as="h1">{t('notFound.title', 'Not found')}</Heading>
      <Text>{t('notFound.description', "The page you're looking for was not found.")}</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          {t('notFound.home', 'Return to home')}
        </Button>
      </Box>
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default NotFound