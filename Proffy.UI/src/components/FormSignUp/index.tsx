import React, { useRef } from 'react'
import Button from 'components/Button'
import Input from 'components/Input'
import Link from 'next/link'
import { toast } from 'react-toastify'

import { useMutation } from '@apollo/client'
import { signIn } from 'next-auth/client'

import { MUTATION_REGISTER } from 'graphql/mutations/register'

import * as S from './styles'
import { FormHandles, SubmitHandler } from '@unform/core'

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
    <S.Container>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="surname" placeholder="Sobrenome" />
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Senha" type="password" />

        <Button disabled={loading}>Concluir cadastro</Button>

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
