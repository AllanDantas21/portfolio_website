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
    <Layout title="Minitalk">
      <Container>
        <Title>
          Minitalk <Badge>02/2024</Badge>
        </Title>
        <P>
       mintalk explain basic
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/AllanDantas21/ft_libft/" target="_blank">
            https://github.com/AllanDantas21/ft_libft <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

      </Container>
    </Layout>
  )
  
  export default Project
  