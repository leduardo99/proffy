import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { FaHeart } from 'react-icons/fa'
import { SubmitHandler } from '@unform/core'

import Input from 'components/Input'
import Button from 'components/Button'

import * as S from './styles'
import CheckBox from './CheckBox'

interface FormData {
  email: string
  password: string
}

const FormSignIn: React.FC = () => {
  const routes = useRouter()
  const { push, query } = routes

  const handleSubmit: SubmitHandler<FormData> = async (values) => {
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <h1>Fazer Login</h1>

        <Input placeholder="E-mail" name="email" autoFocus />
        <Input placeholder="Senha" type="password" name="password" />

        <S.OptionsBlock>
          <CheckBox
            // onChange={(e) => setIsRememberMe(e.target.checked)}
            name="remember"
            // disabled={loading}
            // defaultChecked={getIsRememberMe()}
          />

          <a href="/">Esqueci minha senha</a>
        </S.OptionsBlock>

        <Button
          // isLoading={loading}
          // disabled={loading || !submitAvailable}
          type="submit"
        >
          Entrar
        </Button>
      </S.Form>

      <S.Footer>
        <span>
          Não tem conta? <br />
          <Link href="/sign-up">
            <a>Cadastre-se</a>
          </Link>
        </span>

        <small>
          É de graça <img src="img/icons/purple-heart.svg" />
        </small>
      </S.Footer>
    </>
  )
}

export default FormSignIn
