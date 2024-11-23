import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material';
import { LogoTextContainer, MainContainerStyled, TextContainer } from './styles';
import FindYourPet from '@/components/Login/FindYourPet';

export default function Login() {
  const backgroundImage = "/backgroundLogin.png";
  const logoPetRepet = "/logo.png"
  return (
    <MainContainerStyled aria-label='main container'>
      <Image
        src={backgroundImage}
        width={1500}
        height={1500}
        quality={100}
        alt='Background dog'
        style={{
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          position: "absolute",
          zIndex: -1,
        }}
      />
      <LogoTextContainer aria-label='logo top container'>
        <Box>
          <Image
            src={logoPetRepet}
            width={100}
            height={100}
            quality={100}
            alt='Logo petrepet'
          />
        </Box>

        <TextContainer>
          <FindYourPet />
        </TextContainer>
      </LogoTextContainer>
    </MainContainerStyled>
  )
}
