import { ReactNode } from 'react'
import { NextRouter } from 'next/router'

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
