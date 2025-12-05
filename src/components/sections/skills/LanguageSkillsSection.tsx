import { memo } from 'react';
import { VStack, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Section } from '../../ui';
import { LanguageSkill } from '../../ui/skills';

const LanguageSkillsSection = () => {
    const { t } = useTranslation('common');

    return (
        <Section delay={0.4}>
            <VStack spacing={6} align="stretch" mb={12}>
                <Heading as="h2" size="xl" color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
                    {t('skills.languages', 'Idiomas')}
                </Heading>
                <SimpleGrid columns={[1, 2]} spacing={6}>
                    <LanguageSkill
                        language={t('skills.languageSkills.portuguese', 'Português')}
                        level={100}
                        description={t('skills.languageSkills.nativeDescription', 'Nativo')}
                    />
                    <LanguageSkill
                        language={t('skills.languageSkills.english', 'Inglês')}
                        level={70}
                        description={t('skills.languageSkills.englishDescription', 'B2 - Intermediário-Avançado')}
                    />
                </SimpleGrid>
            </VStack>
        </Section>
    );
};

export default memo(LanguageSkillsSection);
