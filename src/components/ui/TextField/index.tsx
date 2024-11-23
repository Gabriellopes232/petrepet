import { InputAdornment, TextFieldProps, TextField as MuiTextField } from '@mui/material'
import React, { ReactNode } from 'react'

interface CustomTextFieldProps extends Omit<TextFieldProps, "InputProps"> {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  InputProps?: TextFieldProps["InputProps"];
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  placeholder = "",
  icon,
  InputProps,
  ...props
}) => {
  return (
    <MuiTextField
      label={label}
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      required
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ) : undefined,
        ...InputProps
      }}
      {...props}
    />
  )
}

export default CustomTextField;