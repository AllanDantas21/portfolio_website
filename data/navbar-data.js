import { IoLogoGithub } from 'react-icons/io5'

export const menuItems = [
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

export const mobileMenuItems = [
    { href: "/", label: "About" },
    { href: "/projects", label: "42 Projects" },
    { href: "/awards", label: "Awards" },
    { href: "/skills", label: "Skills" },
    { href: "https://github.com/AllanDantas21", label: "View Github" }  
] 