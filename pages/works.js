import { 
    Container,
    Heading,
    SimpleGrid,
    Divider 
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => {
    var imgFdf = require('../public/images/content/fdf.png');
    var imgPushswap = require('../public/images/content/pushswap.png');
    var imgLibft = require('../public/images/content/libft.png');
    var imgMinitalk = require('../public/images/content/minitalk.jpg');

    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={10}>
                <Section>
                    <WorkGridItem id="Fdf" title="Fil de Fer" thumbnail={imgFdf}>  
                    This project consists of graphically creating a schematic representation of a terrain in relief.
                    </WorkGridItem>
                    <WorkGridItem id="Libft" title="Libft" thumbnail={imgLibft}> 
                    In this project we have to recreate some libc functions
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Push-swap" title="Push Swap" thumbnail={imgPushswap}>  
                    is a project that involves sorting a list of integers using a limited set of operations.
                    </WorkGridItem>
                    <WorkGridItem id="Minitalk" title="Minitalk" thumbnail={imgMinitalk}>  
                    The purpose of this project is to code a small data exchange program using UNIX signals.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works