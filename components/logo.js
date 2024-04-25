import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return (
        <Link legacyBehavior href="/">
           <a>
                <LogoBox>
                <Image src={footPrintImg} width={20} height={20} alt="logo" />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeiht="bold"
                    ml={3}
                    >
                    Allan Dantas
                </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo