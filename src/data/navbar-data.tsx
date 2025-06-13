import React from 'react'
import { IoLogoGithub } from 'react-icons/io5'

interface MenuItem {
  href: string
  label: string
  icon?: React.ReactElement
  target?: string
  display?: string
  alignItems?: string
  style?: { gap: number }
  pl?: number
}

export const menuItems: MenuItem[] = [
    { href: "/projects", label: "42 Projects" },
    { href: "/awards", label: "Awards" },
    { href: "/skills", label: "Skills" },
    { href: "/terminal", label: "Terminal" },
    {
      href: "https://github.com/AllanDantas21/Portfolio-Website",
      label: "Source",
      icon: <IoLogoGithub />,
      target: "_blank",
      display: "inline-flex",
      alignItems: "center",
      style: { gap: 4 },
      pl: 2
    }
]

export const mobileMenuItems: MenuItem[] = [
    { href: "/", label: "About" },
    { href: "/projects", label: "42 Projects" },
    { href: "/awards", label: "Awards" },
    { href: "/skills", label: "Skills" },
    { href: "https://github.com/AllanDantas21", label: "View Github" }  
] 