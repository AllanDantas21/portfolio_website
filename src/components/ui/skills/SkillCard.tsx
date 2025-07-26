import { Box, VStack, Text, Badge, Icon, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

const MotionBox = motion(Box);

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

export default SkillCard;
