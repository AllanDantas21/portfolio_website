import { Box, HStack, VStack, Text, CircularProgress, CircularProgressLabel, useColorModeValue } from '@chakra-ui/react';

interface LanguageSkillProps {
    language: string;
    level: number;
    description: string;
}

const LanguageSkill = ({ language, level, description }: LanguageSkillProps) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    return (
        <Box
            p={6}
            bg={bgColor}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
            shadow="sm"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'lg',
                borderColor: 'teal.400'
            }}
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
