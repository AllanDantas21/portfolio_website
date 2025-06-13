import { Container, Heading, SimpleGrid, Box, Image } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Section from '../components/section'
import { WorkGridItem, GridItemStyle } from '../components/grid-item'
import { PROJECTS } from '../data/projects.js'

const Layout = dynamic(() => import('../components/layouts/article'), {
    ssr: true
})

const Projects = () => {
    const { t } = useTranslation('common')

    return (
        <Layout title={t('projects.projectsTitle')}>
            <GridItemStyle />
            <Container>
                <Heading as="h3" fontSize="2xl" mb={6}>
                    {t('projects.ecole42Projects')}
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={8} alignItems="stretch">
                    {PROJECTS.map(project => (
                        <Section delay={0.1} key={project.id}>
                            <WorkGridItem
                                id={project.id}
                                title={t(`projects.${project.id}.title`)}
                                badgeLabel={project.badgeLabel}
                                badgeColor={project.badgeColor}
                                difficulty={project.difficulty}
                            >
                                {t(`projects.${project.id}.description`)}
                            </WorkGridItem>
                        </Section>
                    ))}
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default memo(Projects)

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    };
}
