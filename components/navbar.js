import Logo from './logo'
import NextLink from 'next/link'
import dynamic from "next/dynamic";
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
import ThemeToggleButton from './theme-toggle-button.js'


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
          style={{backdropFilter:'blur(10px)'}}
          zindex={2}
        {...props}
        >
         <Container 
            display="flex"
            p={2} 
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
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            >
                <LinkItem  href="/works" path={path}>
                Works
                </LinkItem>
                <LinkItem  href="/skills" path={path}>
                Skills
                </LinkItem>
                <LinkItem  
                target="_blank"
                href="https://github.com/AllanDantas21/Portfolio-Website"
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 4 }}
                pl={2}
                >
                Source
                </LinkItem>
            </Stack>

            <Box flex={1} align="right">
                <ThemeToggleButton />
                <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                    <Menu>
                        <MenuButton 
                        as={IconButton} 
                        icon={<HamburgerIcon />} 
                        variant="outline" 
                        aria-label="Options"
                        />
                        <MenuList>
                            <NextLink href="/" passHref>
                              <MenuItem as={Link}>About</MenuItem>
                            </NextLink>
                            <NextLink href="/Works" passHref>
                              <MenuItem as={Link}>Works</MenuItem>
                            </NextLink>
                            <NextLink href="/More" passHref>
                              <MenuItem as={Link}>More</MenuItem>
                            </NextLink>
                            <NextLink  href='https://github.com/AllanDantas21'>
                              <MenuItem as={Link}>View Github</MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
         </Container>
        </Box>
    )
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})
