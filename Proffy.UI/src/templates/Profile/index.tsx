import React, { useMemo, useRef } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useSession } from 'next-auth/client'
import { SubmitHandler } from '@unform/core'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Header from 'components/Header'
import Button from 'components/Button'
import Select from 'components/SimpleSelect'
import InputWithLabel from 'components/InputWithLabel'
import TextArea from 'components/TextArea'
import MaskedInput from 'components/MaskedInput'

import { getImageUrl } from 'utils/getImageUrl'

import {
  MUTATION_UPDATE_USER,
  MUTATION_UPDATE_USER_AVATAR
} from 'graphql/mutations/user'
import { MUTATION_CREATE_AREA } from 'graphql/mutations/area'

import { CreateArea } from 'graphql/generated/CreateArea'

import * as S from './styles'
import { MutationUpdateUser } from 'graphql/generated/MutationUpdateUser'
import {
  QueryProfileMe,
  QueryProfileMeVariables
} from 'graphql/generated/QueryProfileMe'
import { QUERY_PROFILE_ME } from 'graphql/queries/user'
import { UploadUserAvatar } from 'graphql/generated/UploadUserAvatar'
import { QueryAreas } from 'graphql/generated/QueryAreas'
import { QUERY_AREAS } from 'graphql/queries/area'

type UserImage = {
  url: string
  hash: string
}

export type Area = {
  id: string
  name: string
}

type User = {
  id: string
  email: string
  name: string
  surname: string
  image?: Partial<UserImage>
  whatsapp: string
  bio: string
  area?: Partial<Area>
}

export type ProfileProps = {
  user: User
  areas: Area[]
}

type FormData = User

export default function Profile() {
  const [session] = useSession()
  const formRef = useRef(null)
  const router = useRouter()

  const { data, fetchMore } = useQuery<QueryProfileMe, QueryProfileMeVariables>(
    QUERY_PROFILE_ME,
    {
      context: { session },
      fetchPolicy: 'no-cache',
      variables: {
        identifier: session?.id as string
      }
    }
  )

  const { data: areasData } = useQuery<QueryAreas>(QUERY_AREAS, {
    context: { session },
    fetchPolicy: 'no-cache'
  })

  const [updateUser, { loading }] = useMutation<MutationUpdateUser>(
    MUTATION_UPDATE_USER,
    {
      context: { session },
      fetchPolicy: 'no-cache',
      onCompleted() {
        fetchMore({ context: { session } })
      }
    }
  )

  const [createArea] = useMutation<CreateArea>(MUTATION_CREATE_AREA, {
    context: { session },
    fetchPolicy: 'no-cache',
    async onCompleted({ createArea: { area } }) {
      await updateUser({
        variables: {
          input: {
            where: { id: data.user.id },
            data: {
              area: area.id
            }
          }
        }
      })

      router.reload()
    }
  })

  const [updateAvatar] = useMutation<UploadUserAvatar>(
    MUTATION_UPDATE_USER_AVATAR,
    {
      context: { session },
      fetchPolicy: 'no-cache',
      async onCompleted({ upload: { id } }) {
        await updateUser({
          variables: {
            input: {
              where: { id: data.user.id },
              data: { image: id }
            }
          }
        })
      }
    }
  )

  const handleSubmit: SubmitHandler<FormData> = async ({ area, ...rest }) => {
    await updateUser({
      variables: {
        input: {
          where: { id: data.user.id },
          data: { ...rest, area: area?.id ?? null }
        }
      }
    })

    toast.success('Perfil atualizado com sucesso!')
  }

  async function handleCreateArea(inputValue: string) {
    try {
      await createArea({
        variables: {
          input: {
            data: {
              name: inputValue
            }
          }
        }
      })
    } catch (error) {
      toast.error('Não foi possível criar a área especificada.')
    }
  }

  const areasOptions = useMemo(() => {
    if (!areasData?.areas) return []

    if (areasData.areas.length !== 0) {
      const options = areasData.areas.map(({ id, name }) => ({
        value: id,
        label: name
      }))

      return options
    }

    return []
  }, [areasData])

  const initialData = useMemo(() => ({ ...data?.user }), [data])

  const handleUploadFile = ({
    target: {
      validity,
      files: [file]
    }
  }: any) => validity.valid && updateAvatar({ variables: { file } })

  if (!data?.user || !data.user.area) return null

  return (
    <S.Container>
      <Header backTo="/" title="Meu Perfil" />
      <S.Banner>
        <div>
          <Image
            layout="fill"
            src={
              data.user?.image
                ? getImageUrl(data.user?.image?.url)
                : '/img/logo.svg'
            }
            alt="Profile"
          />

          <input type="file" id="avatar" onChange={handleUploadFile} hidden />

          <label htmlFor="avatar">
            <img src="img/icons/camera.svg" alt="Camera" />
          </label>
        </div>
        <h1>
          {data.user.name} {data.user.surname}
        </h1>
        <span>{data.user?.area?.name}</span>
      </S.Banner>

      <S.Form initialData={initialData} onSubmit={handleSubmit} ref={formRef}>
        <S.Block>
          <legend>Seus dados</legend>

          <S.InputGroup>
            <InputWithLabel label="Nome" name="name" />
            <InputWithLabel label="Sobrenome" name="surname" />
          </S.InputGroup>

          <S.InputGroup>
            <InputWithLabel
              label="E-mail"
              name="email"
              type="email"
              disabled
              readOnly
            />
            <MaskedInput
              label="Whatsapp"
              name="whatsapp"
              mask="(99) 9 9999-9999"
            />
          </S.InputGroup>

          <TextArea
            name="bio"
            label="Biografia"
            message="(Máximo 300 caracteres)"
          />
        </S.Block>

        <S.Block>
          <legend>Sobre sua área de atuação</legend>
          <S.InputGroup>
            <Select
              name="area.id"
              label="Área de atuação"
              placeholder="Selecione uma opção"
              options={areasOptions}
              noOptionsMessage={() => 'Nenhuma opção disponível'}
              onCreateOption={handleCreateArea}
            />
          </S.InputGroup>
        </S.Block>
      </S.Form>

      <S.SubmitContainer>
        <div>
          <img src="img/icons/warning.svg" alt="Warning" />
          <p>
            Importante
            <span>Preencha todos os dados corretamente.</span>
          </p>
        </div>
        <Button
          isLoading={loading}
          disabled={loading}
          onClick={() => formRef.current?.submitForm()}
        >
          Salvar
        </Button>
      </S.SubmitContainer>
    </S.Container>
  )
}
