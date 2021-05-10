import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

interface Props {
  label: string
}

type InputProps = Props & InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <S.Container>
      <input type="text" {...rest} />

      <label>{label}</label>
    </S.Container>
  )
}

export default Input
