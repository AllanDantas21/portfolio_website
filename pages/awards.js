import { Container, Heading, SimpleGrid, Box, Image, Badge, Text, Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Section from '../components/section'
import { GridItemStyle } from '../components/grid-item'
import { AWARDS } from '../data/awards.js'

const Layout = dynamic(() => import('../components/layouts/article'), {
    ssr: true
})

const AwardGridItem = ({ id, title, year, placement, badgeColor, imageUrl, children }) => (
  <Box 
    w="100%" 
    textAlign="center" 
    height="100%" 
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={6}
    transition="transform 0.3s, box-shadow 0.3s"
    _hover={{ 
      transform: 'translateY(-5px)', 
      boxShadow: 'lg'
    }}
  >
    <Flex direction={["column", "column", "row"]} alignItems="center" gap={8}>
      <Box 
        className="award-image" 
        flex={["1", "1", "0.4"]}
        mb={[4, 4, 0]}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          style={{ 
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '8px',
            filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2))'
          }}
        />
      </Box>
      
      <Box flex={["1", "1", "0.6"]} textAlign={["center", "center", "left"]}>
        <Badge colorScheme={badgeColor} fontSize="md" mb={2}>
          {placement}
        </Badge>
        <Heading as="h3" fontSize={24} mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={4}>
          {year}
        </Text>
        <Text fontSize={16}>
          {children}
        </Text>
      </Box>
    </Flex>
  </Box>
)

const Awards = () => {
    const { t } = useTranslation('common')

    const getAwardDescription = (id) => {
      return t(`awards.${id}.description`);
    }

    return (
        <Layout title="Awards">
            <GridItemStyle />
            <Container maxW="container.md">
                <Heading as="h3" fontSize={28} mb={8}>
                    {t('awards.awardsTitle')}
                </Heading>
                <SimpleGrid columns={[1]} gap={10}>
                    {AWARDS.map(award => (
                        <Section delay={0.1} key={award.id}>
                            <AwardGridItem
                                id={award.id}
                                title={t(`awards.${award.id}.title`)}
                                year={award.year}
                                placement={award.placement}
                                badgeColor={award.badgeColor}
                                imageUrl={award.imageUrl}
                            >
                                {getAwardDescription(award.id)}
                            </AwardGridItem>
                        </Section>
                    ))}
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default memo(Awards)

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    };
}