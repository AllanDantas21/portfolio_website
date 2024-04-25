import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <NextLink legacyBehavior href={href}>
            <Link
              p={2}
              bg={active ? 'glassTeal' : undefined}
              color = {active ? '#202023' : inactiveColor}
              >
            {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
          position="fixed"
          as="nav"
          w="100%"
          bg={useColorModeValue('#fffff40', '#20202380')}
          style={{backdropFilter:'blur(10px'}}
          zindex={1}
        {...props}
        >
         <Container 
            display="flex" p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
            >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'lighter'}>
                    <Logo />
                </Heading>
            </Flex>

            <Stack
            direction={{base: 'collumn', md: 'row'}}
            display={{base: 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            flexGrow={1}
            mt={{base: 4, nmd: 0}}
            >
                <LinkItem  href="/works" path={path}>
                Works
                </LinkItem>
                <LinkItem  href="/Projects" path={path}>
                Projects
                </LinkItem>
            </Stack>
            <Box flex={1} align="right">
                <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                    </Menu>
                </Box>
            </Box>
         </Container>
        </Box>
    )
}
export default Navbar