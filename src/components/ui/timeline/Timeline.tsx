import { VStack, Box, useColorModeValue } from '@chakra-ui/react';
import TimelineItem, { TimelineItemProps } from './TimelineItem';

interface TimelineProps {
    items: TimelineItemProps[];
}

const Timeline = ({ items }: TimelineProps) => {
    return (
        <Box position="relative" py={8}>
            {/* Central vertical line */}
            <Box
                position="absolute"
                left="50%"
                top="30px"
                bottom="30px"
                transform="translateX(-50%)"
                w="3px"
                bg={useColorModeValue('gray.300', 'gray.600')}
                display={['none', 'none', 'block']}
                zIndex={0}
            />
            
            <VStack spacing={16} align="stretch" position="relative">
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        {...item}
                        side={index % 2 === 0 ? 'left' : 'right'}
                        isLast={index === items.length - 1}
                    />
                ))}
            </VStack>
        </Box>
    );
};

export default Timeline;

