import { ReactNode } from 'react'

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

export interface WorkGridItemProps {
  children: ReactNode
  category?: string
  id: string
  title: string
  badgeLabel?: string
  badgeColor?: string
  difficulty?: string
}
