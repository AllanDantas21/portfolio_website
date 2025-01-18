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
import minishellData from '../../data/projects-data/minishell.js';

const Project = () => (
  <Layout title={minishellData.title}>
    <Container>
      <Title>
        {minishellData.title} <Badge>{minishellData.date}</Badge>
      </Title>
      <P>{minishellData.description1}</P>
      <P>{minishellData.description2}</P>
      <WorkImage src={minishellData.image1} alt={minishellData.alt1} />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href={minishellData.repoLink} target="_blank">
            {minishellData.repoLink} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default Project;
