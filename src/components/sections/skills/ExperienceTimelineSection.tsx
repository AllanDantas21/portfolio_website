import { memo } from 'react';
import { VStack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Section } from '../../ui';
import { Timeline } from '../../ui/timeline';
import { workExperiences } from '../../../data/experience';
import type { TimelineItemProps } from '../../ui/timeline';

const ExperienceTimelineSection = () => {
    const { t } = useTranslation('common');

    // Mapear dados para o formato do timeline com traduções
    const timelineItems: TimelineItemProps[] = workExperiences.map((exp, index) => {
        const translationKey = `skills.experiences.${exp.id}`;
        
        return {
            year: t(`${translationKey}.year`, exp.year),
            title: t(`${translationKey}.title`, exp.title),
            company: exp.company,
            description: t(`${translationKey}.description`, exp.description),
            technologies: exp.technologies,
            icon: exp.icon,
            color: exp.color,
            side: index % 2 === 0 ? 'left' : 'right' as const,
            location: exp.location,
            type: exp.type
        };
    });

    return (
        <Section delay={0.1}>
            <VStack spacing={8} align="stretch">
                <VStack spacing={3} align="start">
                    <Heading 
                        as="h2" 
                        size="xl"
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    >
                        {t('skills.experienceTitle', 'Experiência Profissional')}
                    </Heading>
                    <Text 
                        fontSize="md" 
                        color={useColorModeValue('gray.600', 'gray.400')}
                        maxW="2xl"
                    >
                        {t('skills.experienceIntro', 'Minha jornada profissional e as tecnologias que utilizei em cada experiência')}
                    </Text>
                </VStack>
                <Timeline items={timelineItems} />
            </VStack>
        </Section>
    );
};

export default memo(ExperienceTimelineSection);

