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
        Is a networking and communication project in the École 42 curriculum. Its main objective is to create a simple client-server communication system using the UNIX signals SIGUSR1 and SIGUSR2. Here's an overview of how the project typically works:
        </P>
        <P>1 - Client-Server Architecture: The project involves two programs: a client and a server. The client sends a message to the server, and the server receives and displays the message.</P>
        <P>2 - Signal Handling: The communication between the client and server is achieved using signals. Specifically, the client sends the message character by character to the server using SIGUSR1 and SIGUSR2 signals.</P>
        <P>3 - Message Encoding: Each character of the message is encoded into a binary representation before being sent to the server. For example, 'A' might be represented as 01000001 in binary.</P>
        <P>4 - Signal Transmission: The client sends the binary representation of each character to the server using a series of SIGUSR1 and SIGUSR2 signals. For instance, sending a '0' bit could be done using SIGUSR1, and sending a '1' bit could be done using SIGUSR2.</P>
        <P>5 - Server Reception: The server receives the binary data sent by the client, decodes it back into characters, and displays the original message.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/AllanDantas21/Minitalk/" target="_blank">
            https://github.com/AllanDantas21/Minitalk <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

      </Container>
    </Layout>
  )
  
  export default Project
  