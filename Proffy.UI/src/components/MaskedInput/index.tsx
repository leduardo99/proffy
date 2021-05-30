import React, { useRef, useEffect } from 'react'
import { Props as InputProps } from 'react-input-mask'
import { useField } from '@unform/core'

import { LabelContainer, Input } from './styles'

interface Props extends InputProps {
  name: string
  label?: string
  labelStyle?: React.CSSProperties
  mask: string
}

const MaskedInput: React.FC<Props> = ({
  name,
  label,
  className,
  labelStyle,
  ...rest
}) => {
  const inputRef = useRef(null)

  const { fieldName, defaultValue = '', error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <LabelContainer style={labelStyle} className={className}>
      {label}
      <Input
        ref={inputRef}
        defaultValue={defaultValue}
        inputMode="numeric"
        {...rest}
      />
      {error && <span>{error}</span>}
    </LabelContainer>
  )
}

export default MaskedInput
