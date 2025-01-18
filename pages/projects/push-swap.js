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
import pushSwapData from '../../data/projects-data/push-swap.js';

const Project = () => (
  <Layout title={pushSwapData.title}>
    <Container>
      <Title>
        {pushSwapData.title} <Badge>{pushSwapData.date}</Badge>
      </Title>
      <P>{pushSwapData.description1}</P>
      <P>{pushSwapData.description2}</P>
      <P>{pushSwapData.description3}</P>
      <P>{pushSwapData.description4}</P>  
      <P>{pushSwapData.description5}</P>
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

export default Project;
