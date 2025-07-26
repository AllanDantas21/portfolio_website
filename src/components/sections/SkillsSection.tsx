import { memo } from 'react';
import { VStack } from '@chakra-ui/react';
import {
    ProgrammingLanguagesSection,
    WebDevelopmentSection,
    ToolsTechnologiesSection,
    LanguageSkillsSection,
    SoftSkillsSection
} from './skills';

const SkillsSection = () => {
    return (
        <VStack spacing={12} align="stretch">
            <ProgrammingLanguagesSection />
            <WebDevelopmentSection />
            <ToolsTechnologiesSection />
            <LanguageSkillsSection />
            <SoftSkillsSection />
        </VStack>
    );
};

export default memo(SkillsSection);
