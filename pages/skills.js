import { 
    Container,
    Heading,
    Progress,
    Code 
} from '@chakra-ui/react'
import { SiCoursera,
         SiDotnet,
         SiJavascript,
         SiLinux,
         SiZsh, 
         SiNodedotjs
                   } from "react-icons/si";
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const Skills = () => {

    return (
        <Layout title="skills">
        <Container>
            <Heading as='h1' fontSize={20} mb={4}>
                Skills
            </Heading>
            <Heading as='h1' fontSize={20} mb={4}>
                Hard Skills
            </Heading>
            <Section  delay={0.1}>
            <Paragraph style={{margin:8}}>
            This section is to talk about my technical skills.
            </Paragraph>
            <Paragraph style={{margin:8}}>
            At École 42, I developed strong skills in C/C++ programming, efficient algorithms, operating systems like Unix/Linux, networking and protocols, and web development using HTML, CSS, JavaScript, and modern frameworks.
            These hard skills enable me to solve complex problems and collaborate in development teams.
            </Paragraph>
            <Heading as='h1' fontSize={20} mb={4}>
            <div style={{display:'flex'}}>
            <SiCoursera style={{margin:4}}/>
            <SiJavascript style={{margin:4}}/>
            <SiNodedotjs style={{margin:4}}/>
            <SiLinux style={{margin:4}}/>
            <SiZsh style={{margin:4}} />
            <SiDotnet style={{margin:4}}/>
            </div>
            </Heading>
            </Section>

            <Section  delay={0.1}>
            <Heading as='h1' fontSize={20} mb={4}>
                Soft Skills
            </Heading>
            <Paragraph style={{margin:8}}>
            At École 42, I've developed skills in teamwork, problem-solving, self-learning, resilience, and adaptability. 
            These soft skills are crucial for effective collaboration, tackling challenges, and continuous learning and professional growth.
            </Paragraph>
            <Heading as='h1' fontSize={20} mb={4}>
                Languages
            </Heading>
            <Paragraph style={{margin:8, fontWeight:600}}>
            Portuguese
            </Paragraph>
            <Progress value={100} />
            <Paragraph style={{margin:8, fontWeight:600}}>
            English
            </Paragraph>
            <Progress value={80} />
            </Section>
        </Container>
        </Layout>
    )
}

export default Skills