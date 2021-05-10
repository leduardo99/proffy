import React, { TextareaHTMLAttributes } from 'react'

import * as S from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  label,
  name,
  ...rest
}) => {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </S.Container>
  )
}

export default Textarea
