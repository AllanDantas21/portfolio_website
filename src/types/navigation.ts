import { ReactNode } from 'react'

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
