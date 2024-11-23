import { Typography } from '@mui/material'
import React from 'react'

export default function FindYourPet() {
  return (
    <>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontSize: "4.5rem",
          color: "white",
          fontWeight: "semibold",
          margin: 0,
          lineHeight: 1
        }}
      >
        Encontre aqui
      </Typography>
      <Typography
        variant="h6"
        component="strong"
        sx={{
          fontSize: "5rem",
          fontWeight: "bold",
          color: "white"
        }}
      >
        o seu pet
      </Typography>
    </>
  )
}
