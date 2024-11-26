"use client"

import { Box, styled } from "@mui/material";

export const MainContainerStyled = styled(Box)(() => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
}));

export const LogoContainer = styled(Box)(() => ({
  position: 'absolute',
  top: '15px',
  left: '15px',
}));

export const FindYourPetContainer = styled(Box)(() => ({
  position: 'absolute',
  bottom: '50px',
  left: '50px',
}));

export const FormContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '30px',
  width: '50%',
  height: '100%',
  marginLeft: 'auto',
}));

export const FormContent = styled(Box)(() => ({
  background: 'white',
  borderRadius: '35px',
  height: '80%',
  width: '60%',
  position: 'relative',
  left: '150px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  border: 'none',
  padding: '2rem',
  display: 'grid'
}));
