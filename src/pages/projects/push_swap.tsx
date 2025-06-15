import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta, ArticleLayout, Paragraph } from '../../components';
import { pushSwapData } from '../../data';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Project = () => {
  const { t } = useTranslation('common');
  return (
    <ArticleLayout title={t('projects.push_swap.title')}>
      <Container>
        <Title>
          {t('projects.push_swap.title')} <Badge>{pushSwapData.date}</Badge>
        </Title>
        {pushSwapData.img && <WorkImage src={pushSwapData.img} alt={pushSwapData.title} />}
        <Paragraph>{t('projects.push_swap.description1')}</Paragraph>
        <Paragraph>{t('projects.push_swap.description2')}</Paragraph>
        <Paragraph>{t('projects.push_swap.description3')}</Paragraph>
        <Paragraph>{t('projects.push_swap.description4')}</Paragraph>
        <Paragraph>{t('projects.push_swap.description5')}</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href={pushSwapData.repoLink} target="_blank">
              {pushSwapData.repoLink} <ExternalLinkIcon mx="2px" />
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
