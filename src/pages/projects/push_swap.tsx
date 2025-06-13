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
import pushSwapData from '../../data/projects-data/push-swap';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Project = () => {
  const { t } = useTranslation('common');
  return (
    <Layout title={t('projects.push_swap.title')}>
      <Container>
        <Title>
          {t('projects.push_swap.title')} <Badge>{pushSwapData.date}</Badge>
        </Title>
        {pushSwapData.img && <WorkImage src={pushSwapData.img} alt={pushSwapData.title} />}
        <P>{t('projects.push_swap.description1')}</P>
        <P>{t('projects.push_swap.description2')}</P>
        <P>{t('projects.push_swap.description3')}</P>
        <P>{t('projects.push_swap.description4')}</P>
        <P>{t('projects.push_swap.description5')}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href={pushSwapData.repoLink} target="_blank">
              {pushSwapData.repoLink} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
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
