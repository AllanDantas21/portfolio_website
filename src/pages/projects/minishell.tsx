import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta, ArticleLayout, Paragraph } from '../../components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Project = () => {
  const { t } = useTranslation('common');
  return (
    <ArticleLayout title={t('projects.minishell.title')}>
      <Container>
        <Title>
          {t('projects.minishell.title')} <Badge>26/05/2024</Badge>
        </Title>
        <WorkImage src="/images/content/bash-img.webp" alt="Minishell" />
        <Paragraph>{t('projects.minishell.description1')}</Paragraph>
        <Paragraph>{t('projects.minishell.description2')}</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/AllanDantas21/42cursus_minishell" target="_blank">
              https://github.com/AllanDantas21/42cursus_minishell <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </ArticleLayout>
  );
};

import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default Project;
