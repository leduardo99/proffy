import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { FormHandles, SubmitHandler } from '@unform/core'

import { useMutation } from '@apollo/client'

import { MUTATION_RESET_PASSWORD } from 'graphql/mutations/reset-password'

import Input from 'components/Input'
import Button from 'components/Button'

import * as S from 'components/FormSignUp/styles'

interface FormData {
  password: string
  passwordConfirmation: string
}

export type FormResetPasswordProps = {
  code: string
}

const FormResetPassword: React.FC<FormResetPasswordProps> = ({ code }) => {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()

  const [resetPassword, { loading }] = useMutation(MUTATION_RESET_PASSWORD, {
    onError: () => toast.error('Não foi possível redefinir sua senha.'),
    onCompleted: () => {
      toast.success('Senha redefinida com sucesso.')

      router.push('/sign-in')
    }
  })

  const handleSubmit: SubmitHandler<FormData> = async ({
    password,
    passwordConfirmation
  }) => {
    resetPassword({
      variables: {
        password,
        passwordConfirmation,
        code
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

      <h1>Vamos redefinir sua senha?</h1>
      <span>Coloque sua nova senha abaixo.</span>

      <Input
        name="password"
        placeholder="Senha"
        type="password"
        autoFocus
        disabled={loading}
      />

      <Input
        name="passwordConfirmation"
        placeholder="Confirmar Senha"
        type="password"
        disabled={loading}
      />

      <Button disabled={loading} isLoading={loading}>
        Redefinir
      </Button>
    </S.Form>
  )
}

export default FormResetPassword
