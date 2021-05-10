import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  stacked?: boolean
}

const Input: React.FunctionComponent<InputProps> = ({
  label,
  stacked = false,
  name,
  ...rest
}) => {
  return (
    <S.Container stacked={stacked}>
      {label && <label htmlFor={name}>{label}</label>}
      <input type="text" id={name} {...rest} />
    </S.Container>
  )
}

export default Input
