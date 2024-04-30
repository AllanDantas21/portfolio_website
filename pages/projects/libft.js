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
    <Layout title="Libft">
      <Container>
        <Title>
          Libft <Badge>10/2023</Badge>
        </Title>
        <P>
        Libft is an individual project at 42 that requires us to re-create some standard C library functions including
         some additional ones that can be used later to build a library of useful functions for the rest of the program.
        </P>
        <P style={{fontSize:18, padding:5}}>
            We need to recreate all this functions
        </P>
        <WorkImage src="/images/content/libft1.0.png" alt="fdf result"/>
        <P>is a project to understand the basis of functions in c.
        Great for improving knowledge in memory allocation and programming logic</P>
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
  