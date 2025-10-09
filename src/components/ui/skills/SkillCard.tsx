import { Box, VStack, Text, Badge, Icon, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface SkillCardProps {
    name: string;
    icon: IconType;
    category: string;
    color: string;
}

const SkillCard = ({ name, icon, category, color }: SkillCardProps) => {
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
                borderColor: color
            }}
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
    );
};

export default SkillCard;
