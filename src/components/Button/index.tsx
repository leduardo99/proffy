import React from 'react'

import * as S from './styles'

const Button: React.FC = ({ children, ...rest }) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>
}

export default Button
