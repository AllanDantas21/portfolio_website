import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projects';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Project = () => {
  const { t } = useTranslation('common');
  return (
    <Layout title={t('projects.minishell.title')}>
      <Container>
        <Title>
          {t('projects.minishell.title')} <Badge>26/05/2024</Badge>
        </Title>
        <WorkImage src="/images/content/bash-img.png" alt="Minishell" />
        <P>{t('projects.minishell.description1')}</P>
        <P>{t('projects.minishell.description2')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/AllanDantas21/42cursus_minishell" target="_blank">
              https://github.com/AllanDantas21/42cursus_minishell <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default Project;
