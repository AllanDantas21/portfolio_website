import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projects';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Project = () => (
  <Layout title="Philo">
    <Container>
      <Title>
        Philosophers <Badge>05/2024</Badge>
      </Title>
      <P style={{ fontSize: 18, padding: 5 }}>
        This project is a training to multi-threads/multi-process programming with the use of mutex and semaphore.
        It contains 3 different programs simulating a twist of the famous Dining Philosophers problem, all with the same basic rules.
      </P>
      <WorkImage src="/images/content/philo1.png" alt="Philo image" />
      <P>
        This project helps to understand the basics of functions in C.
        Great for improving knowledge in memory allocation and programming logic.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/AllanDantas21/philosophers" target="_blank">
            https://github.com/AllanDantas21/philosophers <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default Project;
