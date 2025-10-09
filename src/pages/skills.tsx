import {
    Container,
    Heading,
    VStack,
    Text,
    Divider,
    useColorModeValue
} from '@chakra-ui/react';
import { Section, ArticleLayout } from '../components';
import ProgrammingLanguagesSection from '../components/sections/skills/ProgrammingLanguagesSection';
import WebDevelopmentSection from '../components/sections/skills/WebDevelopmentSection';
import ToolsTechnologiesSection from '../components/sections/skills/ToolsTechnologiesSection';
import LanguageSkillsSection from '../components/sections/skills/LanguageSkillsSection';
import SoftSkillsSection from '../components/sections/skills/SoftSkillsSection';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Skills = () => {
    const { t } = useTranslation('common');

    return (
        <ArticleLayout title={t('skills.skillsTitle', 'Skills')}>
            <Container maxW="container.xl" py={8}>
                {/* Header */}
                <VStack spacing={4} align="center" mb={12}>
                    <Heading
                        as="h3"
                        fontSize="2xl"
                        textAlign="center"
                        color="teal.400"
                    >
                        {t('skills.skillsTitle', 'Minhas Habilidades')}
                    </Heading>
                    <Text
                        fontSize="md"
                        textAlign="center"
                        color={useColorModeValue('gray.600', 'gray.400')}
                        maxW="2xl"
                    >
                        {t('skills.techIntro', 'Tecnologias e habilidades que domino ao longo da minha jornada como desenvolvedor')}
                    </Text>
                </VStack>

                {/* Programming Languages */}
                <ProgrammingLanguagesSection />
                <Divider my={12} />

                {/* Web Development */}
                <WebDevelopmentSection />
                <Divider my={12} />

                {/* Tools & Technologies */}
                <ToolsTechnologiesSection />
                <Divider my={12} />

                {/* Language Skills */}
                <LanguageSkillsSection />
                <Divider my={12} />

                {/* Soft Skills */}
                <SoftSkillsSection />
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
