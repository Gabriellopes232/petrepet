"use client"

import { Box, styled } from "@mui/material";

export const MainContainerStyled = styled(Box)(() => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}))

export const LogoTextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  height: '100%',
  padding: '15px'
}))

export const TextContainer = styled(Box)(() => ({
  textAlign: 'left',
  marginBottom: '15px',
  marginLeft: '15px',
  padding: '15px'
}))