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
  <Layout title="fdf">
    <Container>
      <Title>
        Fdf - Fil de fer <Badge>10/2023</Badge>
      </Title>
      <P>
        FdF is a project in which we convert a file with a grid of height values into a 3D wireframe using a simple graphics library called MiniLibX.
      </P>
      <WorkImage src="/images/content/fdf1.0.avif" alt="fdf map" />
      <P>
        Where the rows represent the x-axis, the columns the y-axis, and the values the z-axis (the altitude). To a graphic representation like this:
      </P>
      <WorkImage src="/images/content/fdf2.0.avif" alt="fdf result" />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/AllanDantas21/fdf/" target="_blank">
            https://github.com/AllanDantas21/fdf <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default Project;
