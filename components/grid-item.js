import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Badge, VStack, Flex } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'projects',
  id,
  title,
  badgeLabel,
  badgeColor = 'teal',
  difficulty
}) => (
  <Box w="100%" textAlign="center" height="100%">
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      height="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ 
        transform: 'translateY(-5px)', 
        boxShadow: 'lg'
      }}
    >
      <VStack spacing={4} align="center" mb={4}>
        <Badge 
          fontSize="2xl" 
          p={4} 
          borderRadius="lg" 
          colorScheme={badgeColor} 
          variant="solid"
          width="100%"
          textAlign="center"
          boxShadow="md"
        >
          {badgeLabel || title}
        </Badge>
        
        {difficulty && (
          <Badge colorScheme="gray" fontSize="md">
            {difficulty}
          </Badge>
        )}
      </VStack>
      
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text fontWeight="bold" fontSize={21} mb={2}>
          {title}
        </Text>
      </LinkOverlay>
      
      <Text fontSize={14} flex="1">
        {children}
      </Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 16px;
        z-index: -1;
        margin: 0 auto;
        margin-bottom: 12px;
        display: block;
        transition: transform 0.2s;
      }
      .grid-item-thumbnail:hover {
        transform: scale(1.03);
      }
    `}
  />
)