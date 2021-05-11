import { useField } from '@unform/core'
import React, { InputHTMLAttributes, useEffect, useRef } from 'react'

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
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      }
    })
  }, [fieldName, registerField])

  return (
    <S.Container stacked={stacked}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </S.Container>
  )
}

export default Input
