import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import FootprintIcon from './icons/footprint'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Link href="/">
      <LogoBox>
        <FootprintIcon />
        <Text
          color={textColor}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Allan Dantas
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo