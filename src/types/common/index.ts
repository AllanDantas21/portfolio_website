import { ReactNode } from 'react'

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

export interface TerminalCommand {
  command: string
  output: string
}
