import React from 'react'

import * as S from './styles'

interface Props {
  proffer: any
}

const Proffer: React.FC<Props> = ({ proffer }) => {
  return (
    <S.Container>
      <header>
        <img src={proffer.user.avatar} alt={proffer.user.name} />

        <div>
          <strong>{proffer.user.name}</strong>
          <span>{proffer.subject}</span>
        </div>
      </header>

      <p>{proffer.user.bio}</p>

      <footer>
        <p>
          Preço:
          <strong>R$ {proffer.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => null}
          href={`https://wa.me/${proffer.user.whatsapp}`}
        >
          <img src="/img/icons/whatsapp.svg" alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </S.Container>
  )
}

export default Proffer
