import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { FaHeart } from 'react-icons/fa'

import Input from 'components/Input'
import Button from 'components/Button'

import * as S from './styles'

const FormSignIn: React.FC = () => {
  const routes = useRouter()
  const { push, query } = routes

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const result = await signIn('credentials', {
      // ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }
  }

  return (
    <S.Container onSubmit={() => null}>
      <Input placeholder="Email" name="email" />
      <Input placeholder="Senha" type="password" name="password" />

      <Button>Entrar</Button>

      <S.Footer>
        <div className="footer-container">
          <div className="signup">
            <p>Não tem conta?</p>
            <Link href="/sign-up">
              <a>Cadastre-se</a>
            </Link>
          </div>
          <span>
            É de graça
            <FaHeart size={20} />
          </span>
        </div>
      </S.Footer>
    </S.Container>
  )
}

export default FormSignIn
