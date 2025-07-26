import { Box, HStack, VStack, Text, CircularProgress, CircularProgressLabel, useColorModeValue } from '@chakra-ui/react';

interface LanguageSkillProps {
    language: string;
    level: number;
    description: string;
}

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

export default LanguageSkill;
