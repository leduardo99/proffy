import Button from 'components/Button'
import Input from 'components/Input'
import Link from 'next/link'
import React from 'react'

import * as S from './styles'

const FormSignUp: React.FC = () => {
  return (
    <S.Container>
      <S.Form>
        <Input label="Nome" />
        <Input label="Sobrenome" />
        <Input label="Email" type="email" />
        <Input label="Senha" type="password" />

        <Button label="Concluir cadastro" />

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
