import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { projects } from '../data/projects'

const Layout = dynamic(() => import('../components/layouts/article'), {
    ssr: true
})

const Projects = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize="2xl" mb={6}>
                Ecole 42 Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={8}>
                {projects.map(project => (
                    <Section delay={0.1} key={project.id}>
                        <WorkGridItem {...project} thumbnailSize="200px">
                            {project.description}
                        </WorkGridItem>
                    </Section>
                ))}
            </SimpleGrid>
        </Container>
    </Layout>
)

export default memo(Projects)
