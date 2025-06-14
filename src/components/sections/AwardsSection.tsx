import { memo } from 'react'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { Section } from '../ui'
import { AWARDS } from '../../data'

interface AwardGridItemProps {
    id: string
    title: string
    year: string
    placement: string
    badgeColor: string
    imageUrl: string
    children: React.ReactNode
}

const AwardGridItem = ({ id, title, year, placement, badgeColor, imageUrl, children }: AwardGridItemProps) => {
    // This would be moved from the awards page to here
    // For now, we'll import it from the page
    return null
}

const AwardsSection = () => {
    const { t } = useTranslation('common')

    return (
        <Section delay={0.1}>
            <Container maxW="container.md">
                <Heading as="h3" fontSize={28} mb={8}>
                    {t('awards.awardsTitle')}
                </Heading>
                <SimpleGrid columns={[1]} gap={10}>
                    {AWARDS.map(award => (
                        <Section delay={0.1} key={award.id}>
                            <AwardGridItem
                                id={award.id}
                                title={t(`awards.${award.id}.title`)}
                                year={award.year}
                                placement={award.placement}
                                badgeColor={award.badgeColor}
                                imageUrl={award.imageUrl}
                            >
                                {t(`awards.${award.id}.description`)}
                            </AwardGridItem>
                        </Section>
                    ))}
                </SimpleGrid>
            </Container>
        </Section>
    )
}

export default memo(AwardsSection)
