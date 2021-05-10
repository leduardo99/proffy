import React from 'react'
import FullContent from 'components/FullContent'

// import { Container } from './styles';

const ValidateAccount: React.FC = () => {
  const validated = true

  return (
    <FullContent
      title={validated ? 'Conta Validada' : 'Verificando Token'}
      disabled={!validated}
      message={
        validated
          ? 'Sua conta foi validada, agora você já pode logar a acessar a plataforma Proffy!'
          : 'Aguarde enquanto verificamos seu token e validamos sua conta!'
      }
      link={{
        url: '/',
        text: 'Login'
      }}
    />
  )
}

export default ValidateAccount
