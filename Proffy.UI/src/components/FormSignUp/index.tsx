import React, { useRef } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { FormHandles, SubmitHandler } from '@unform/core'

import { useMutation } from '@apollo/client'
import { signIn } from 'next-auth/client'

import { MUTATION_REGISTER } from 'graphql/mutations/register'

import Input from 'components/Input'
import Button from 'components/Button'

import * as S from './styles'

interface FormData {
  name: string
  email: string
  password: string
  surname: string
}

const FormSignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const [register, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: () => toast.error('Não foi possível realizar o cadastro.'),
    onCompleted: () => {
      !error &&
        formRef?.current &&
        signIn('credentials', {
          email: formRef.current.getFieldValue('email'),
          password: formRef.current.getFieldValue('password'),
          callbackUrl: '/'
        })
    }
  })

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    register({
      variables: {
        input: { ...data }
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

      <h1>Cadastro</h1>
      <span>
        Preencha os dados abaixo
        <br /> para começar.
      </span>

      <Input name="name" placeholder="Nome" autoFocus disabled={loading} />
      <Input name="surname" placeholder="Sobrenome" disabled={loading} />
      <Input
        name="email"
        placeholder="E-mail"
        type="email"
        disabled={loading}
      />
      <Input
        name="password"
        placeholder="Senha"
        type="password"
        disabled={loading}
      />

      <Button disabled={loading} isLoading={loading}>
        Concluir cadastro
      </Button>
    </S.Form>
  )
}

export default FormSignUp
