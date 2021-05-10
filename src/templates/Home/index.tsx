import Link from 'next/link'
import LogoContainer from 'components/LogoContainer'
import TopBarContainer from 'components/TopBarContainer'

import * as S from './styles'
export default function Home() {
  return (
    <S.Container>
      <TopBarContainer profile />
      <div id="page-landing-content" className="container">
        <LogoContainer background={false} />

        <img
          src="img/landing.svg"
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link href="/services">
            <a className="find-service">Buscar Serviços</a>
          </Link>
          <Link href="/services/offer">
            <a className="offer-services">Oferecer Serviços</a>
          </Link>
        </div>

        <span className="total-connections">
          Total de 10 conexões já realizadas{' '}
          <img src="img/icons/purple-heart.svg" alt="Coração Roxo" />
        </span>
      </div>
    </S.Container>
  )
}
