import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

interface Props {
  label: string
}

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <S.Wrapper {...rest}>{label}</S.Wrapper>
}

export default Button
