import { memo } from 'react';
import { VStack, Heading, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Section } from '../../ui';
import { SkillCard } from '../../ui/skills';
import { toolsSkills } from '../../../data/skills/skillsData';

const ToolsTechnologiesSection = () => {
    const { t } = useTranslation('common');

    return (
        <Section delay={0.3}>
            <VStack spacing={6} align="stretch" mb={12}>
                <Heading as="h2" size="xl" color="teal.400">
                    {t('skills.toolsTechnologies', 'Ferramentas & Tecnologias')}
                </Heading>
                <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                    {toolsSkills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            category={skill.category}
                            color={skill.color}
                        />
                    ))}
                </SimpleGrid>
            </VStack>
        </Section>
    );
};

export default memo(ToolsTechnologiesSection);
