import React from 'react'

import * as S from './styles'
import TopBarContainer from 'components/TopBarContainer'

const WrapperContent: React.FunctionComponent<{ className?: string }> = ({
  children,
  className
}) => {
  return (
    <S.Container className={className}>
      <TopBarContainer transparent={true} />
      {children}
    </S.Container>
  )
}

export default WrapperContent
