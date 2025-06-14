import { forwardRef } from 'react'
import Logo from '../ui/logo'
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
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../ui/theme-toggle-button'
import { menuItems, mobileMenuItems } from '../../data/navigation'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from 'react'

interface LinkItemProps {
  href: string
  path: string
  target?: string
  children: ReactNode
  [key: string]: any
}

interface NavbarProps {
  path: string
  [key: string]: any
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#0a1225' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef<HTMLAnchorElement, any>((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = ({ path, ...props }: NavbarProps) => {
  const { i18n } = useTranslation('common')
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState(i18n.language)

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'pt' : 'en'
    setCurrentLang(newLang)
    router.push(router.pathname, router.asPath, { locale: newLang })
  }

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
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
          {menuItems.map(item => (
            <LinkItem key={item.href} path={path} {...item}>
              {item.icon}
              {item.label}
            </LinkItem>
          ))}
        </Stack>

        <Box flex={1} display="flex" alignItems="center" justifyContent="flex-end">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={currentLang} style={{ display: 'inline-block' }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <Button
                onClick={toggleLanguage}
                colorScheme="teal"
                mr={2}
                minW="100px"
                transition="transform 0.2s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                _active={{ transform: "scale(0.95)" }}
              >
                {currentLang === 'en' ? 'Português' : 'English'}
              </Button>
            </motion.div>
          </AnimatePresence>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {mobileMenuItems.map(item => (
                  <NextLink key={item.href} href={item.href} passHref>
                    <MenuItem as={Link}>{item.label}</MenuItem>
                  </NextLink>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
