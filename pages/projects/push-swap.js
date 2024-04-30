import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/projects'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Project = () => (
    <Layout title="Push Swap">
      <Container>
        <Title>
          Push swap <Badge>01/2024</Badge>
        </Title>
        <P>
        push swap explain
        </P>
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
  )
  
  export default Project
  