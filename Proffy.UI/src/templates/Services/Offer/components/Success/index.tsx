import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

const Success: React.FC = () => {
  return (
    <Container>
      <img src="/img/icons/success-check-icon.svg" alt="Success" />
      <h1>Cadastro salvo!</h1>
      <span>Tudo certo, seu cadastro foi completado com sucesso.</span>
      <span>Agora é só ficar de olho no seu WhatsApp.</span>
      <Link href="/services">
        <a>Acessar lista</a>
      </Link>
    </Container>
  )
}

export default Success
