import {
    Container,
    Heading,
    SimpleGrid,
    Box,
    VStack,
    HStack,
    Text,
    Badge,
    Icon,
    useColorModeValue,
    Divider,
    CircularProgress,
    CircularProgressLabel
} from '@chakra-ui/react';
import {
    SiMicrosoftsqlserver,
    SiDotnet,
    SiPython,
    SiLinux,
    SiZsh,
    SiNodedotjs,
    SiCplusplus,
    SiC,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiGit,
    SiDocker,
    SiShell,
    SiVim,
    SiGnubash,
    SiRust,
    SiNginx,
    SiMicrosoft
} from "react-icons/si";
import { FaJava, FaCode } from "react-icons/fa";
import { Section, ArticleLayout, Paragraph } from '../components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

interface SkillCardProps {
    name: string;
    level: number;
    icon: any;
    category: string;
    color: string;
}

interface LanguageSkillProps {
    language: string;
    level: number;
    description: string;
}

const MotionBox = motion(Box);

const SkillCard = ({ name, icon, category, color }: Omit<SkillCardProps, 'level'>) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    return (
        <MotionBox
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <Box
                p={6}
                bg={bgColor}
                border="1px"
                borderColor={borderColor}
                borderRadius="xl"
                shadow="md"
                _hover={{
                    shadow: 'lg',
                    borderColor: color
                }}
                transition="all 0.3s ease"
            >
                <VStack spacing={4} align="center">
                    <Icon as={icon} w={12} h={12} color={color} />
                    <VStack spacing={2} align="center">
                        <Text fontWeight="bold" fontSize="lg">
                            {name}
                        </Text>
                        <Badge colorScheme="teal" variant="subtle">
                            {category}
                        </Badge>
                    </VStack>
                </VStack>
            </Box>
        </MotionBox>
    );
};

const LanguageSkill = ({ language, level, description }: LanguageSkillProps) => {
    const bgColor = useColorModeValue('gray.50', 'gray.700');

    return (
        <Box
            p={6}
            bg={bgColor}
            borderRadius="xl"
            border="1px"
            borderColor={useColorModeValue('gray.200', 'gray.600')}
        >
            <HStack justify="space-between" align="center">
                <VStack align="start" flex={1}>
                    <Text fontSize="xl" fontWeight="bold">
                        {language}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        {description}
                    </Text>
                </VStack>
                <CircularProgress value={level} color="teal.400" size="80px">
                    <CircularProgressLabel fontSize="sm" fontWeight="bold">
                        {level}%
                    </CircularProgressLabel>
                </CircularProgress>
            </HStack>
        </Box>
    );
};

const Skills = () => {
    const { t } = useTranslation('common');

    const programmingSkills = [
        { name: 'C', level: 95, icon: SiC, category: 'Systems', color: '#A8B9CC' },
        { name: 'C++', level: 90, icon: SiCplusplus, category: 'Systems', color: '#00599C' },
        { name: 'Python', level: 85, icon: SiPython, category: 'Backend', color: '#3776AB' },
        { name: 'Java', level: 75, icon: FaJava, category: 'Backend', color: '#ED8B00' },
        { name: 'Rust', level: 70, icon: SiRust, category: 'Systems', color: '#CE422B' },
        { name: 'TypeScript', level: 82, icon: SiTypescript, category: 'Frontend', color: '#3178C6' }
    ];

    const webSkills = [
        { name: 'JavaScript', level: 88, icon: SiJavascript, category: 'Frontend', color: '#F7DF1E' },
        { name: 'React', level: 85, icon: SiReact, category: 'Frontend', color: '#61DAFB' },
        { name: 'Next.js', level: 80, icon: SiNextdotjs, category: 'Framework', color: '#000000' }
    ];

    const toolsSkills = [
        { name: 'Linux', level: 92, icon: SiLinux, category: 'OS', color: '#FCC624' },
        { name: 'Git', level: 88, icon: SiGit, category: 'VCS', color: '#F05032' },
        { name: 'Docker', level: 75, icon: SiDocker, category: 'DevOps', color: '#2496ED' },
        { name: 'Nginx', level: 70, icon: SiNginx, category: 'Web Server', color: '#009639' },
        { name: 'Bash', level: 85, icon: SiGnubash, category: 'Shell', color: '#4EAA25' },
        { name: 'Vim', level: 80, icon: SiVim, category: 'Editor', color: '#019733' },
        { name: 'SQL Server', level: 75, icon: SiMicrosoftsqlserver, category: 'Database', color: '#CC2927' },
        { name: 'Prompt Flow', level: 65, icon: SiMicrosoft, category: 'AI/ML', color: '#0078D4' },
        { name: 'MCP', level: 70, icon: FaCode, category: 'Protocol', color: '#6366F1' }
    ];

    return (
        <ArticleLayout title={t('skills.skillsTitle')}>
            <Container maxW="container.xl" py={8}>
                {/* Header */}
                <VStack spacing={8} align="center" mb={12}>
                    <Heading
                        as="h1"
                        size="2xl"
                        textAlign="center"
                        bgGradient="linear(to-r, teal.400, teal.500)"
                        bgClip="text"
                    >
                        {t('skills.skillsTitle')}
                    </Heading>
                    <Text
                        fontSize="xl"
                        textAlign="center"
                        color="gray.500"
                        maxW="2xl"
                    >
                        {t('skills.techIntro')}
                    </Text>
                </VStack>

                {/* Programming Languages */}
                <Section delay={0.1}>
                    <VStack spacing={6} align="stretch" mb={12}>
                        <Heading as="h2" size="xl" color="teal.400">
                            {t('skills.programmingLanguages')}
                        </Heading>
                        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                            {programmingSkills.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Section>

                <Divider my={12} />

                {/* Web Development */}
                <Section delay={0.2}>
                    <VStack spacing={6} align="stretch" mb={12}>
                        <Heading as="h2" size="xl" color="teal.400">
                            {t('skills.webDevelopment')}
                        </Heading>
                        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                            {webSkills.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Section>

                <Divider my={12} />

                {/* Tools & Technologies */}
                <Section delay={0.3}>
                    <VStack spacing={6} align="stretch" mb={12}>
                        <Heading as="h2" size="xl" color="teal.400">
                            {t('skills.toolsTechnologies')}
                        </Heading>
                        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                            {toolsSkills.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Section>

                <Divider my={12} />

                {/* Language Skills */}
                <Section delay={0.4}>
                    <VStack spacing={6} align="stretch" mb={12}>
                        <Heading as="h2" size="xl" color="teal.400">
                            {t('skills.languages')}
                        </Heading>
                        <SimpleGrid columns={[1, 2]} spacing={6}>
                            <LanguageSkill
                                language={t('skills.languageSkills.portuguese')}
                                level={100}
                                description={t('skills.languageSkills.nativeDescription')}
                            />
                            <LanguageSkill
                                language={t('skills.languageSkills.english')}
                                level={70}
                                description={t('skills.languageSkills.englishDescription')}
                            />
                        </SimpleGrid>
                    </VStack>
                </Section>

                <Divider my={12} />

                {/* Soft Skills */}
                <Section delay={0.5}>
                    <VStack spacing={6} align="stretch">
                        <Heading as="h2" size="xl" color="teal.400">
                            {t('skills.softSkills')}
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
                                    <Badge colorScheme="teal" size="lg" p={2}>
                                        {t('skills.softSkillsList.teamwork')}
                                    </Badge>
                                    <Badge colorScheme="cyan" size="lg" p={2}>
                                        {t('skills.softSkillsList.problemSolving')}
                                    </Badge>
                                    <Badge colorScheme="purple" size="lg" p={2}>
                                        {t('skills.softSkillsList.selfLearning')}
                                    </Badge>
                                </VStack>
                                <VStack align="start" spacing={4}>
                                    <Badge colorScheme="green" size="lg" p={2}>
                                        {t('skills.softSkillsList.adaptability')}
                                    </Badge>
                                    <Badge colorScheme="orange" size="lg" p={2}>
                                        {t('skills.softSkillsList.resilience')}
                                    </Badge>
                                    <Badge colorScheme="pink" size="lg" p={2}>
                                        {t('skills.softSkillsList.communication')}
                                    </Badge>
                                </VStack>
                            </SimpleGrid>
                            <Box mt={6}>
                                <Text fontSize="md" color={useColorModeValue('gray.700', 'gray.300')}>
                                    {t('skills.soft')}
                                </Text>
                            </Box>
                        </Box>
                    </VStack>
                </Section>
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
