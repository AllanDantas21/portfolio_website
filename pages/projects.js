import { 
    Container,
    Heading,
    SimpleGrid,
    Divider 
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Projects = () => {
    var imgFdf = require('../public/images/content/fdf.png');
    var imgPushswap = require('../public/images/content/pushswap.png');
    var imgPhilo = require('../public/images/content/philo.png')
    var imgMinishell = require('../public/images/content/minishell.png')

    return (
        <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Ecole 42 Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={10}>
                <Section delay={0.1}>
                    <WorkGridItem id="fdf" title="Fil de Fer" thumbnail={imgFdf}>  
                    This project consists of graphically creating a schematic representation of a terrain in relief.
                    </WorkGridItem>
                    <WorkGridItem id="philo" title="philosophers" thumbnail={imgPhilo}> 
                    the famous Dining Philosophers problem, all with the same basic rules.
                    </WorkGridItem>
                </Section>
                <Section Section delay={0.1}>
                    <WorkGridItem id="push-swap" title="Push Swap" thumbnail={imgPushswap}>  
                    is a project that involves sorting a list of integers using a limited set of operations.
                    </WorkGridItem>
                    <WorkGridItem id="minishell" title="Minishell" thumbnail={imgMinishell}>  
                    This project is about creating a simple shell. Yes, a little bash.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects