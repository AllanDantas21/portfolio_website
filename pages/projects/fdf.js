import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projects';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import fdfData from '../../data/projects-data/fdf.js';

const Project = () => (
  <Layout title={fdfData.title}>
    <Container>
      <Title>
        {fdfData.title} <Badge>{fdfData.date}</Badge>
      </Title>
      <P>{fdfData.description1}</P>
      <WorkImage src={fdfData.image1} alt={fdfData.alt1} />
      <P>{fdfData.description2}</P>
      <WorkImage src={fdfData.image2} alt={fdfData.alt2} />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href={fdfData.repoLink} target="_blank">
            {fdfData.repoLink} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default Project;
