import { ReactNode } from 'react'
import { NextRouter } from 'next/router'

// Tipos básicos para o projeto
export interface Award {
  id: string
  title: string
  year: string
  placement: string
  badgeColor: 'gold' | 'silver' | 'bronze' | 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'purple' | 'pink' | 'yellow' | 'orange' | 'cyan'
  imageUrl: string
  description?: string
}

export interface Project {
  id: string
  badgeLabel: string
  badgeColor: 'gold' | 'silver' | 'bronze' | 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'purple' | 'pink' | 'yellow' | 'orange' | 'cyan'
  difficulty: string
}

export interface ProjectData {
  title: string
  date: string
  img?: string
  image1?: string
  image2?: string
  description1: string
  description2: string
  description3?: string
  description4?: string
  description5?: string
  repoLink: string
}

// Tipos para componentes
export interface LayoutProps {
  children: ReactNode
  title?: string
}

export interface MainLayoutProps {
  children: ReactNode
  router: NextRouter
}

export interface SectionProps {
  children: ReactNode
  delay?: number
}

export interface GridItemProps {
  children: ReactNode
  href: string
  title: string
  thumbnail: string
}

export interface WorkGridItemProps {
  children: ReactNode
  category?: string
  id: string
  title: string
  badgeLabel?: string
  badgeColor?: string
  difficulty?: string
}

export interface AwardGridItemProps {
  id: string
  title: string
  year: string
  placement: string
  badgeColor: string
  imageUrl: string
  children: ReactNode
}

// Tipos para navegação
export interface MenuItem {
  href: string
  label: string
  icon?: ReactNode
  target?: string
  display?: string
  alignItems?: string
  style?: Record<string, any>
  pl?: number
}

export interface LinkItemProps {
  href: string
  path: string
  target?: string
  children: ReactNode
  [key: string]: any
}

export interface NavbarProps {
  path: string
  [key: string]: any
}

// Tipos para biografia e dados sociais
export interface BioItem {
  year: string
  text: string
  detail?: string
  mob: string
}

export interface SocialLink {
  href: string
  icon: ReactNode
  label: string
}

// Tipos para jogo 42
export interface GameState {
  score: number
  targetPosition: { top: string; left: string }
  timeLeft: number
  gameOver: boolean
  gameWon: boolean
  animateClick: boolean
  startTimer: number
  gameStarted: boolean
  ripples: Ripple[]
}

export interface Ripple {
  x: number
  y: number
  id: number
}

// Tipos para Terminal
export interface TerminalCommand {
  command: string
  output: string
}

// Tipos de estilo e tema
export interface ThemeColors {
  glassTeal: string
}

export interface ThemeFonts {
  heading: string
}

// Props para páginas Next.js
export interface PageProps {
  [key: string]: any
}

export interface GetStaticPropsContext {
  locale: string
  [key: string]: any
}

export interface GetStaticPropsResult {
  props: {
    [key: string]: any
  }
}
