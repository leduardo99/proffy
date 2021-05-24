import React, { useRef } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { FormHandles, SubmitHandler } from '@unform/core'

import { useMutation } from '@apollo/client'

import { MUTATION_FORGOT_PASSWORD } from 'graphql/mutations/forgot-password'

import Input from 'components/Input'
import Button from 'components/Button'

import * as S from 'components/FormSignUp/styles'

interface FormData {
  email: string
}

const FormForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const [forgotPassword, { loading }] = useMutation(MUTATION_FORGOT_PASSWORD, {
    onError: () => toast.error('Não foi possível redefinir sua senha.'),
    onCompleted: () =>
      toast.success('Redefinição solicitada com sucesso, verifique seu e-mail!')
  })

  const handleSubmit: SubmitHandler<FormData> = async ({ email }) => {
    forgotPassword({
      variables: {
        email
      }
    })
  }

  return (
    <S.Form ref={formRef} onSubmit={handleSubmit}>
      <Link href="/sign-in">
        <a>
          <img src="img/icons/back.svg" alt="Back Button" />
        </a>
      </Link>

      <h1>Eita, esqueceu sua senha?</h1>
      <span>Não esquenta, vamos dar um jeito nisso.</span>

      <Input
        name="email"
        placeholder="E-mail"
        type="email"
        autoFocus
        disabled={loading}
      />

      <Button disabled={loading} isLoading={loading}>
        Enviar
      </Button>
    </S.Form>
  )
}

export default FormForgotPassword
