import Button from 'components/Button'
import Input from 'components/Input'
import Link from 'next/link'
import React from 'react'

import * as S from './styles'

const FormSignUp: React.FC = () => {
  return (
    <S.Container>
      <S.Form>
        <Input name="name" placeholder="Nome" />
        <Input name="surname" placeholder="Sobrenome" />
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Senha" type="password" />

        <Button>Concluir cadastro</Button>

        <div className="signin">
          <p>Já possui conta?</p>
          <Link href="/sign-in">
            <a>Entre agora</a>
          </Link>
        </div>
      </S.Form>
    </S.Container>
  )
}

export default FormSignUp
