import { Box, VStack, HStack, Text, Badge, Icon, useColorModeValue, IconType } from '@chakra-ui/react';

export interface TimelineItemProps {
    year: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
    icon: IconType;
    color: string;
    side: 'left' | 'right';
    isLast?: boolean;
    location?: string;
    type?: string;
}

const TimelineItem = ({
    year,
    title,
    company,
    description,
    technologies,
    icon,
    color,
    side,
    isLast = false,
    location,
    type
}: TimelineItemProps) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const textColor = useColorModeValue('gray.700', 'gray.300');
    const hoverBg = useColorModeValue('gray.50', 'gray.700');

    return (
        <Box position="relative" w="100%" minH={['auto', 'auto', '200px']} display="flex" alignItems="center" mb={[8, 8, 0]}>
            {/* Content Card */}
            <Box
                w={['100%', '100%', '45%']}
                maxW="500px"
                p={6}
                bg={bgColor}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="xl"
                shadow="md"
                _hover={{
                    boxShadow: 'xl',
                    borderColor: color
                }}
                position={['relative', 'relative', 'absolute']}
                left={side === 'left' ? [0, 0, 0] : [0, 0, 'auto']}
                right={side === 'right' ? [0, 0, 0] : [0, 0, 'auto']}
                top={[0, 0, '50%']}
                transform={['none', 'none', 'translateY(-50%)']}
            >
                <VStack align="start" spacing={4}>
                    {/* Header */}
                    <VStack align="start" spacing={2} w="100%">
                        <HStack justify="space-between" w="100%" flexWrap="wrap">
                            <Text
                                fontSize="sm"
                                fontWeight="bold"
                                color={color}
                                textTransform="uppercase"
                                letterSpacing="wide"
                            >
                                {year}
                            </Text>
                            <Badge colorScheme="teal" variant="subtle" fontSize="xs">
                                {company}
                            </Badge>
                        </HStack>
                        <Text
                            fontSize="xl"
                            fontWeight="bold"
                            color={useColorModeValue('gray.800', 'white')}
                        >
                            {title}
                        </Text>
                        {(location || type) && (
                            <HStack spacing={2} fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
                                {type && <Text>{type}</Text>}
                                {location && type && <Text>•</Text>}
                                {location && <Text>{location}</Text>}
                            </HStack>
                        )}
                    </VStack>

                    {/* Description */}
                    <Text
                        fontSize="sm"
                        color={textColor}
                        lineHeight="tall"
                    >
                        {description}
                    </Text>

                    {/* Technologies */}
                    <VStack align="start" spacing={2} w="100%">
                        <Text fontSize="xs" fontWeight="semibold" color={useColorModeValue('gray.600', 'gray.400')}>
                            Tecnologias:
                        </Text>
                        <HStack flexWrap="wrap" spacing={2}>
                            {technologies.map((tech, index) => (
                                <Badge
                                    key={index}
                                    colorScheme="teal"
                                    variant="outline"
                                    fontSize="xs"
                                    px={2}
                                    py={1}
                                    borderRadius="md"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </HStack>
                    </VStack>
                </VStack>
            </Box>

            {/* Central Icon Circle */}
            <Box
                position={['relative', 'relative', 'absolute']}
                left={['auto', 'auto', '50%']}
                top={[4, 4, '50%']}
                transform={['none', 'none', 'translate(-50%, -50%)']}
                zIndex={2}
                w="60px"
                h="60px"
                borderRadius="full"
                bg={color}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderWidth="4px"
                borderColor={useColorModeValue('white', 'gray.800')}
                shadow="lg"
                mx={['auto', 'auto', 0]}
                mb={[4, 4, 0]}
            >
                <Icon as={icon} w={7} h={7} color="white" />
            </Box>
        </Box>
    );
};

export default TimelineItem;

