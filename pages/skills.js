import { 
    Container,
    Heading,
    Progress,
    Code 
} from '@chakra-ui/react';
import {
    SiMicrosoftsqlserver,
    SiDotnet,
    SiPython,
    SiLinux,
    SiZsh, 
    SiNodedotjs
} from "react-icons/si";
import Section from '../components/section';
import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';

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
                <Section delay={0.1}>
                    <Paragraph style={{ margin: 8 }}>
                        This section is to talk about my technical skills.
                    </Paragraph>
                    <Paragraph style={{ margin: 8 }}>
                        At École 42, I developed strong skills in C/C++ programming, efficient algorithms, operating systems like Unix/Linux, networking and protocols, and web development using HTML, CSS, JavaScript, and modern frameworks.
                        These hard skills enable me to solve complex problems and collaborate in development teams.
                    </Paragraph>
                    <Paragraph style={{ margin: 8 }}>
                        In addition to my studies at École 42, I have also gained practical experience working at 42labs. This experience has allowed me to apply my technical skills in real-world projects, further enhancing my abilities in software development, debugging, and project management. Working in a collaborative environment at 42labs has also improved my communication and teamwork skills, making me a more effective and versatile developer.
                    </Paragraph>
                </Section>
                <div style={{ display: 'flex' }}>
                    <SiMicrosoftsqlserver style={{ margin: 4 }} />
                    <SiPython style={{ margin: 4 }} />
                    <SiNodedotjs style={{ margin: 4 }} />
                    <SiLinux style={{ margin: 4 }} />
                    <SiZsh style={{ margin: 4 }} />
                    <SiDotnet style={{ margin: 4 }} />
                </div>
                <Section delay={0.1}>
                    <Heading as='h1' fontSize={20} mb={4}>
                        Soft Skills
                    </Heading>
                    <Paragraph style={{ margin: 8 }}>
                        At École 42, I've developed skills in teamwork, problem-solving, self-learning, resilience, and adaptability. 
                        These soft skills are crucial for effective collaboration, tackling challenges, and continuous learning and professional growth.
                    </Paragraph>
                    <Heading as='h1' fontSize={20} mb={4}>
                        Languages
                    </Heading>
                    <Paragraph style={{ margin: 8, fontWeight: 600 }}>
                        Portuguese
                    </Paragraph>
                    <Progress value={100} />
                    <Paragraph style={{ margin: 8, fontWeight: 600 }}>
                        English
                    </Paragraph>
                    <Progress value={80} />
                </Section>
            </Container>
        </Layout>
    );
};

export default Skills;
