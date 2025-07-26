import { memo } from 'react';
import { VStack, Heading, Box, SimpleGrid, Badge, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Section } from '../../ui';

const SoftSkillsSection = () => {
    const { t } = useTranslation('common');

    const softSkillsData = [
        { key: 'teamwork', colorScheme: 'teal', label: 'Trabalho em Equipe' },
        { key: 'problemSolving', colorScheme: 'cyan', label: 'Resolução de Problemas' },
        { key: 'autonomousLearning', colorScheme: 'purple', label: 'Aprendizado Autônomo' },
        { key: 'adaptability', colorScheme: 'green', label: 'Adaptabilidade' },
        { key: 'resilience', colorScheme: 'orange', label: 'Resiliência' },
        { key: 'communication', colorScheme: 'pink', label: 'Comunicação' }
    ];

    return (
        <Section delay={0.5}>
            <VStack spacing={6} align="stretch">
                <Heading as="h2" size="xl" color="teal.400">
                    {t('skills.softSkills', 'Habilidades Interpessoais')}
                </Heading>
                <Box
                    p={8}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    borderRadius="xl"
                    border="1px"
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                >
                    <SimpleGrid columns={[1, 2]} spacing={8}>
                        <VStack align="start" spacing={4}>
                            {softSkillsData.slice(0, 3).map((skill) => (
                                <Badge key={skill.key} colorScheme={skill.colorScheme} size="lg" p={2}>
                                    {t(`skills.softSkillsList.${skill.key}`, skill.label)}
                                </Badge>
                            ))}
                        </VStack>
                        <VStack align="start" spacing={4}>
                            {softSkillsData.slice(3, 6).map((skill) => (
                                <Badge key={skill.key} colorScheme={skill.colorScheme} size="lg" p={2}>
                                    {t(`skills.softSkillsList.${skill.key}`, skill.label)}
                                </Badge>
                            ))}
                        </VStack>
                    </SimpleGrid>
                    <Box mt={6}>
                        <Text fontSize="md" color={useColorModeValue('gray.700', 'gray.300')}>
                            {t('skills.softSkillsDescription', "Desenvolvidas através da metodologia peer-to-peer da École 42 e experiência profissional na 42Labs")}
                        </Text>
                    </Box>
                </Box>
            </VStack>
        </Section>
    );
};

export default memo(SoftSkillsSection);
