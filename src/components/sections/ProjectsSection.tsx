import { memo } from 'react'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { Section, WorkGridItem } from '../ui'
import { PROJECTS } from '../../data'

const ProjectsSection = () => {
    const { t } = useTranslation('common')

    return (
        <Section delay={0.1}>
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
        </Section>
    )
}

export default memo(ProjectsSection)
