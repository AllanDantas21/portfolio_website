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
  <Layout title="Push Swap">
    <Container>
      <Title>
        Push swap <Badge>01/2024</Badge>
      </Title>
      <P>
        The goal of the push_swap project is to sort a stack of integers using two stacks and a specific set of operations. Here's a basic overview of how the project typically works:
      </P>
      <P>Stacks: The project involves two stacks, Stack A and Stack B, initially containing a random set of integers.</P>
      <P>Operations: Students are required to implement a set of operations to manipulate the stacks.</P>
      <P>Sorting Algorithm: The main challenge is to devise an algorithm that uses these operations to sort Stack A in ascending order while following certain constraints or optimization criteria, such as minimizing the number of operations used.</P>
      <P>Constraints: The project typically imposes constraints on the number of operations allowed, aiming for an efficient and optimized sorting algorithm.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/AllanDantas21/push_swap/" target="_blank">
            https://github.com/AllanDantas21/push_swap <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default Project;
