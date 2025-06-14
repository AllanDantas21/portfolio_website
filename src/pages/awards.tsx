import { Container, Heading, SimpleGrid, Box, Image, Badge, Text, Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Section, GridItemStyle } from '../components'
import { AWARDS } from '../data'
import { GetStaticProps } from 'next'
import { ReactNode } from 'react'

const Layout = dynamic(() => import('../components').then(mod => ({ default: mod.ArticleLayout })), {
  ssr: true
})

interface AwardGridItemProps {
  id: string
  title: string
  year: string
  placement: string
  badgeColor: string
  imageUrl: string
  children: ReactNode
}

const AwardGridItem = ({ id, title, year, placement, badgeColor, imageUrl, children }: AwardGridItemProps) => (
  <Box
    w="100%"
    textAlign="center"
    height={["auto", "auto", "450px"]}
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
    <Flex
      direction={["column", "column", "row"]}
      alignItems="center"
      gap={8}
      height="100%"
    >
      <Box
        className="award-image"
        flex={["1", "1", "0.4"]}
        mb={[4, 4, 0]}
        height={["auto", "auto", "300px"]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={imageUrl}
          alt={title}
          style={{
            maxWidth: '100%',
            maxHeight: '300px',
            objectFit: 'contain',
            borderRadius: '8px',
            filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2))'
          }}
        />
      </Box>

      <Box
        flex={["1", "1", "0.6"]}
        textAlign={["center", "center", "left"]}
        display="flex"
        flexDirection="column"
        height={["auto", "auto", "300px"]}
      >
        <Badge colorScheme={badgeColor} fontSize="md" mb={2}>
          {placement}
        </Badge>
        <Heading as="h3" fontSize={24} mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={4}>
          {year}
        </Text>
        <Box
          height={["auto", "auto", "180px"]}
          overflowY={["visible", "visible", "auto"]}
          pr={2}
        >
          <Text fontSize={16}>
            {children}
          </Text>
        </Box>
      </Box>
    </Flex>
  </Box>
)

const Awards = () => {
  const { t } = useTranslation('common')

  const getAwardDescription = (id: string) => {
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

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}