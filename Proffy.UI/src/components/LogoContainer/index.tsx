import React from 'react'

import * as S from './styles'

const logoContainerStyle = {
  backgroundImage: `url(img/squared-background.svg)`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: 0
}

const LogoContainer: React.FunctionComponent<{ background?: boolean }> = ({
  background = true
}) => {
  return (
    <S.Container>
      {background && (
        <div className="logo-bg-container" style={logoContainerStyle} />
      )}
      <div className="logo-hero">
        <img src="img/logo.svg" alt="Proffy" />
        <h2>Encontre o serviço ideal para os seu problema.</h2>
      </div>
    </S.Container>
  )
}

export default LogoContainer
