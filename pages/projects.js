import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Layout = dynamic(() => import('../components/layouts/article'), {
    ssr: true
})

import imgFdf from '../public/images/content/fdf.png'
import imgPushswap from '../public/images/content/pushswap.png'
import imgPhilo from '../public/images/content/philo.png'
import imgMinishell from '../public/images/content/minishell.png'

const projects = [
    { id: 'fdf', title: 'Fil de Fer', thumbnail: imgFdf, description: 'This project consists of graphically creating a schematic representation of a terrain in relief.' },
    { id: 'philo', title: 'philosophers', thumbnail: imgPhilo, description: 'The famous Dining Philosophers problem, all with the same basic rules.' },
    { id: 'push-swap', title: 'Push Swap', thumbnail: imgPushswap, description: 'Is a project that involves sorting a list of integers using a limited set of operations.' },
    { id: 'minishell', title: 'Minishell', thumbnail: imgMinishell, description: 'This project is about creating a simple shell. Yes, a little bash.' }
]

const Projects = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Ecole 42 Projects
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={10}>
                {projects.map(project => (
                    <Section delay={0.1} key={project.id}>
                        <WorkGridItem {...project}>
                            {project.description}
                        </WorkGridItem>
                    </Section>
                ))}
            </SimpleGrid>
        </Container>
    </Layout>
)

export default memo(Projects)
