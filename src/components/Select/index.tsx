import React, { SelectHTMLAttributes } from 'react'

import * as S from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: Array<{
    value: number
    label: string
  }>
}

const Select: React.FunctionComponent<SelectProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </S.Container>
  )
}

export default Select
