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

const Project = () => (
  <Layout title="Minishell">
    <Container>
      <Title>
        Minishell <Badge>04/2024</Badge>
      </Title>
      <P>As beautiful as a shell</P>
      <P>
        In this project we created our own bash, on a smaller scale. The purpose is to make us work with multiple processes, file descriptors, user input handling, among several other minor challenges. By undertaking this project, we gained knowledge of how bash works under the hood, how our input is handled, and how commands given to it are executed.
      </P>
      <WorkImage src="/images/content/bash.webp" alt="Minishell project image" />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/AllanDantas21/42cursus_minishell/" target="_blank">
            https://github.com/AllanDantas21/42cursus_minishell/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default Project;
