import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta, ArticleLayout, Paragraph } from '../../components';
import { fdfData } from '../../data';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const Project = () => {
  const { t } = useTranslation('common');
  return (
    <ArticleLayout title={t('projects.fdf.title')}>
      <Container>
        <Title>
          {t('projects.fdf.title')} <Badge>{fdfData.date}</Badge>
        </Title>
        <Paragraph>{t('projects.fdf.description1')}</Paragraph>
        {fdfData.image1 && <WorkImage src={fdfData.image1} alt={t('projects.fdf.alt1')} />}
        <Paragraph>{t('projects.fdf.description2')}</Paragraph>
        {fdfData.image2 && <WorkImage src={fdfData.image2} alt={t('projects.fdf.alt2')} />}
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href={fdfData.repoLink} target="_blank">
              {fdfData.repoLink} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </ArticleLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default Project;
