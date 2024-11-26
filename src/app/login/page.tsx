import React from 'react';
import Image from 'next/image';
import { Button, Box, Typography, Divider } from '@mui/material';
import {
  MainContainerStyled,
  LogoContainer,
  FindYourPetContainer,
  FormContainer,
  FormContent,
} from './styles';
import FindYourPet from '@/components/Login/FindYourPet';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import CustomTextField from '@/components/ui/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Login() {
  const backgroundImage = "/backgroundLogin.png";
  const logoPetRepet = "/logo.png";

  return (
    <MainContainerStyled aria-label="main container">
      <Image
        src={backgroundImage}
        width={1500}
        height={1500}
        quality={100}
        alt="Background dog"
        style={{
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          zIndex: -1,
        }}
      />

      <LogoContainer>
        <Image
          src={logoPetRepet}
          width={100}
          height={100}
          quality={100}
          alt="Logo petrepet"
        />
      </LogoContainer>

      <FindYourPetContainer>
        <FindYourPet />
      </FindYourPetContainer>

      <FormContainer>
        <FormContent>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: '#3E7CB1',
            }}
          >
            Olá,{' '}
            <br />
            <Typography
              variant="body1"
              component="span"
              sx={{
                fontSize: 24,
                fontWeight: 'regular',
                color: '#3E7CB1',
              }}
            >
              Coloque o login e a senha para continuar
            </Typography>
          </Typography>

          <CustomTextField
            type="email"
            placeholder="Email"
            icon={<EmailIcon sx={{
              color: '#81A4CD'
            }} />}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                height: '50px',
                '& fieldset': {
                  borderColor: '#81A4CD',
                  borderWidth: '1px',
                  background: 'none'
                },
                '&:hover fieldset': {
                  borderColor: '#81A4CD',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#81A4CD',
                  background: 'none'
                },
              },
              '& .MuiInputBase-input': {
                padding: '10px 15px',
                fontSize: '1rem',
                background: 'none',
                color: '#3E7CB1',
              },
            }}
          />

          <CustomTextField
            type="password"
            placeholder="Senha"
            icon={<KeyIcon sx={{
              color: '#81A4CD'
            }} />}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                height: '50px',
                '& fieldset': {
                  borderColor: '#81A4CD',
                  borderWidth: '1px',
                  background: 'none'
                },
                '&:hover fieldset': {
                  borderColor: '#81A4CD',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#81A4CD',
                },
              },
              '& .MuiInputBase-input': {
                padding: '10px 15px',
                fontSize: '1rem',
                background: 'none',
                color: '#3E7CB1',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              textTransform: 'none',
              fontSize: '1rem',
              padding: '10px 20px',
              borderRadius: '25px',
              height: '70%',
              backgroundColor: '#3E7CB1',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#316C9B',
              },
            }}
            fullWidth
          >
            Entrar
          </Button>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="body1"
              component="span"
              sx={{
                fontSize: 16,
                fontWeight: 'regular',
                color: '#3E7CB1',
              }}
            >ou</Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10
          }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                padding: '10px 20px',
                borderRadius: '25px',
                borderColor: '#3E7CB1',
                color: '#3E7CB1',
                width: '50%',
                fontWeight: 'bold',
                '&:hover': {
                  borderColor: '#316C9B',
                  backgroundColor: '#F0F7FF',
                },
              }}
            >
              <GoogleIcon sx={{ marginRight: '10px', color: '#3E7CB1' }} />
              Google
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                padding: '10px 20px',
                borderRadius: '25px',
                borderColor: '#3E7CB1',
                color: '#3E7CB1',
                fontWeight: 'bold',
                width: '50%',
                '&:hover': {
                  borderColor: '#316C9B',
                  backgroundColor: '#F0F7FF',
                },
              }}
            >
              <FacebookIcon sx={{ marginRight: '10px', color: '#3E7CB1' }} />
              Facebook
            </Button>
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <a href="#" style={{
              color: '#81A4CD'
            }}>Esqueci a senha</a>
          </Box>

          <Divider
            sx={{
              color: '#81A4CD'
            }}
          ></Divider>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <p style={{
              color: '#9D9D9D'
            }}>
              Ao logar você concorda com os <a href="#" style={{
                color: '#81A4CD'
              }}>Termos e Condições</a>
            </p>
            <p style={{
              color: '#9D9D9D'
            }}>
              Não tem uma conta ainda? <a href="#" style={{
                color: '#81A4CD'
              }}>Criar conta</a>
            </p>
          </Box>
        </FormContent>
      </FormContainer>
    </MainContainerStyled>
  );
}
