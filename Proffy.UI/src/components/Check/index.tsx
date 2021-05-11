import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

interface CheckProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const Check: React.FunctionComponent<CheckProps> = ({
  label,
  name,
  ...rest
}) => {
  return (
    <S.Container>
      <input type="checkbox" id={name} {...rest} />
      <label htmlFor={name}>{label}</label>
    </S.Container>
  )
}

export default Check
