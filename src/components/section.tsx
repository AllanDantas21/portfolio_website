import { motion } from "framer-motion"
import { chakra, shouldForwardProp, Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode
    delay?: number
}

const Section = ({ children, delay = 0 }: SectionProps) => (
    <Box
        as={motion.div}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // @ts-ignore
        transition={{ duration: 0.8, delay }}
        mb={6}
    >
        {children}
    </Box>
)

export default Section