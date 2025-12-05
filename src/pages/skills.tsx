import {
    Container,
    Heading,
    VStack,
    Text,
    Divider,
    useColorModeValue
} from '@chakra-ui/react';
import { Section, ArticleLayout } from '../components';
import ExperienceTimelineSection from '../components/sections/skills/ExperienceTimelineSection';
import LanguageSkillsSection from '../components/sections/skills/LanguageSkillsSection';
import SoftSkillsSection from '../components/sections/skills/SoftSkillsSection';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Skills = () => {
    const { t } = useTranslation('common');

    return (
        <ArticleLayout title={t('skills.skillsTitle', 'Skills')}>
            <Container maxW="container.xl">
                {/* Header */}
                <VStack spacing={6} align="center" mb={12}>
                    <Heading
                        as="h3"
                        fontSize="2xl"
                        textAlign="center"
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    >
                        {t('skills.skillsTitle', 'Minhas Habilidades')}
                    </Heading>
                    <Text
                        fontSize="md"
                        textAlign="center"
                        color={useColorModeValue('gray.600', 'gray.400')}
                        maxW="2xl"
                    >
                        {t('skills.techIntro', 'Tecnologias e habilidades desenvolvidas através da minha jornada profissional e acadêmica')}
                    </Text>
                </VStack>

                {/* Main Content */}
                <VStack spacing={12} align="stretch">
                    {/* Experience Timeline */}
                    <ExperienceTimelineSection />

                    <Divider borderColor={useColorModeValue('gray.200', 'gray.700')} />

                    {/* Language Skills */}
                    <Section delay={0.2}>
                        <LanguageSkillsSection />
                    </Section>

                    <Divider borderColor={useColorModeValue('gray.200', 'gray.700')} />

                    {/* Soft Skills */}
                    <Section delay={0.3}>
                        <SoftSkillsSection />
                    </Section>
                </VStack>
            </Container>
        </ArticleLayout>
    );
};

export default Skills;

import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    };
}
