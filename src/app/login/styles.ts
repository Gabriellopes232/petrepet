"use client"

import { Box, styled } from "@mui/material";

export const MainContainerStyled = styled(Box)(() => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
}))

export const LogoTextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '100%',
  padding: '15px',
  position: 'relative',
  flex: 1
}))

export const TextContainer = styled(Box)(() => ({
  textAlign: 'left',
  marginBottom: '15px',
  marginLeft: '15px',
  padding: '15px'
}))