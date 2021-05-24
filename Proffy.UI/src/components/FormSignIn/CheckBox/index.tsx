import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef
} from 'react'

import * as S from './styles'

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  onChange,
  defaultChecked,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isChecked, setIsChecked] = useState(!!defaultChecked)

  const handleToggleChecked = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked((state) => !state)

      onChange && onChange(event)
    },
    [onChange]
  )

  return (
    <S.LabelContainer htmlFor={name}>
      <S.CheckBoxIcon isChecked={isChecked}>
        <img src="img/icons/check.svg" alt="check-icon" />
      </S.CheckBoxIcon>
      <input
        ref={inputRef}
        onChange={handleToggleChecked}
        defaultChecked={defaultChecked}
        type="checkbox"
        id={name}
        {...rest}
      />
      Lembrar-me
    </S.LabelContainer>
  )
}

export default CheckBox
