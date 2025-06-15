import { ReactNode } from 'react'

export interface Award {
  id: string
  title: string
  year: string
  placement: string
  badgeColor: 'gold' | 'silver' | 'bronze' | 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'purple' | 'pink' | 'yellow' | 'orange' | 'cyan'
  imageUrl: string
  description?: string
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
