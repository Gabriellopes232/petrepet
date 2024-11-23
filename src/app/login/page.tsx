import React from 'react'
import Image from 'next/image'
import { Box, Button, Typography } from '@mui/material';
import { LogoTextContainer, MainContainerStyled, TextContainer } from './styles';
import FindYourPet from '@/components/Login/FindYourPet';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import CustomTextField from '@/components/ui/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

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

      <Box>
        <Typography
          variant="h4"
          color="initial"
        >
          Olá,
        </Typography>
        <Typography
          color="initial"
          variant="body1"
          component="p"
        >
          Coloque o login e a senha para continuar
        </Typography>

        <CustomTextField
          type="email"
          placeholder="Email"
          icon={<EmailIcon />}
          required
        />

        <CustomTextField
          type="password"
          placeholder="Senha"
          icon={<KeyIcon />}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            padding: "10px",
          }}
          fullWidth
        >
          Entrar
        </Button>

        <Button>
          <GoogleIcon />
        </Button>
        <Button>
          <FacebookIcon />
        </Button>

        <a>Esqueci a senha</a>

        <div>divider</div>

        <p>Ao logar você concorda com os <a>Termos e Condições</a></p>
        <p>Não tem uma conta ainda? <a href="">Criar conta</a></p>
      </Box>
    </MainContainerStyled>
  )
}
