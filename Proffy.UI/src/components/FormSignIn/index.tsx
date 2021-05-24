import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { SubmitHandler } from '@unform/core'

import Input from 'components/Input'
import Button from 'components/Button'

import * as S from './styles'
import { toast } from 'react-toastify'

interface FormData {
  email: string
  password: string
}

const FormSignIn: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)

  const routes = useRouter()
  const { push, query } = routes

  const handleSubmit: SubmitHandler<FormData> = async (values) => {
    setLoading(true)

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }

    toast.error('Credenciais inválidas')

    setLoading(false)
  }

  return (
    <>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Fazer Login</h1>

        <Input placeholder="E-mail" name="email" autoFocus disabled={loading} />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          disabled={loading}
        />

        <S.OptionsBlock>
          <Link href="/forgot-password">
            <a>Esqueci minha senha</a>
          </Link>
        </S.OptionsBlock>

        <Button isLoading={loading} disabled={loading} type="submit">
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
