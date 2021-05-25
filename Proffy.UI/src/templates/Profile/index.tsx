import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useSession } from 'next-auth/client'
import { Scope, SubmitHandler } from '@unform/core'
import Image from 'next/image'
import _ from 'lodash'

import Header from 'components/Header'
import Button from 'components/Button'
import Select from 'components/SimpleSelect'
import InputWithLabel from 'components/InputWithLabel'
import TextArea from 'components/TextArea'
import MaskedInput from 'components/MaskedInput'

import { getImageUrl } from 'utils/getImageUrl'

import {
  MUTATION_UPDATE_USER,
  MUTATION_UPDATE_USER_PROFILE
} from 'graphql/mutations/user'

import * as S from './styles'
import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
import { QUERY_PROFILE_ME } from 'graphql/queries/user'
import { toast } from 'react-toastify'
import { MUTATION_CREATE_AREA } from 'graphql/mutations/area'

type UserImage = {
  url: string
  hash: string
}

export type Area = {
  id: string
  name: string
}

export type UserProfile = {
  id: string | null
  whatsapp: string | null
  bio: string | null
  area: Area | null
}

type User = {
  id: string
  email: string
  name: string
  surname: string
  image?: Partial<UserImage>
  user_profile?: UserProfile
}

export type ProfileProps = {
  user: User
  areas: Area[]
}

interface FormData {
  id: string
  email: string
  name: string
  surname: string
  image?: Partial<UserImage>
  user_profile: UserProfile
}

export default function Profile({ user, areas }: Partial<ProfileProps>) {
  const [createdArea, setCreatedArea] = useState({} as Area)

  const [session] = useSession()
  const formRef = useRef(null)

  const [updateUser, { loading }] = useMutation(MUTATION_UPDATE_USER, {
    context: { session }
  })

  const [updateUserProfile, { loading: loadingProfile }] = useMutation(
    MUTATION_UPDATE_USER_PROFILE,
    {
      context: { session }
    }
  )

  const [createArea, { loading: loadingArea }] = useMutation(
    MUTATION_CREATE_AREA,
    {
      context: { session },
      onCompleted(data) {
        setCreatedArea(data.createArea.area)
      }
    }
  )

  const handleSubmit: SubmitHandler<FormData> = async ({
    user_profile,
    ...rest
  }) => {
    const areaExists = areas.find(({ id }) => user_profile.area.id === id)

    if (!areaExists) {
      await createArea({
        variables: {
          input: {
            data: {
              name: user_profile.area.id
            }
          }
        }
      })
    }

    await updateUserProfile({
      variables: {
        input: {
          where: { id: initialFormData.user_profile.id },
          data: {
            ...user_profile,
            area: user_profile.area.id,
            whatsapp: user_profile.whatsapp.replace(/[^\d]/g, '')
          }
        }
      }
    })

    await updateUser({
      variables: {
        input: {
          where: { id: initialFormData.id },
          data: { ...rest }
        }
      }
    })

    toast.success('Perfil atualizado com sucesso!')
  }

  const initialFormData = useMemo(() => ({ ...user }), [user])

  const areasOptions = useMemo(() => {
    if (areas.length !== 0) {
      const options = areas.map(({ id, name }) => ({
        value: id,
        label: name
      }))

      return options
    }

    return []
  }, [areas])

  return (
    <S.Container>
      <Header backTo="/" title="Meu Perfil" />
      <S.Banner>
        {user?.image && (
          <div>
            <Image
              layout="fill"
              src={getImageUrl(user?.image?.url)}
              alt="Profile"
            />
          </div>
        )}
        <h1>
          {user?.name} {user?.surname}
        </h1>
        <span>{user.user_profile.area?.name}</span>
      </S.Banner>

      <S.Form
        initialData={initialFormData}
        onSubmit={handleSubmit}
        ref={formRef}
      >
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
              name="user_profile.whatsapp"
              mask="(99) 9 9999-9999"
            />
          </S.InputGroup>

          <TextArea
            name="user_profile.bio"
            label="Biografia"
            message="(Máximo 300 caracteres)"
          />
        </S.Block>

        <Scope path="user_profile">
          <S.Block>
            <legend>Sobre sua área de atuação</legend>
            <S.InputGroup>
              <Select
                name="area.id"
                label="Área de atuação"
                placeholder="Selecione uma opção"
                options={areasOptions}
                noOptionsMessage={() => 'Nenhuma opção disponível'}
              />
            </S.InputGroup>
          </S.Block>
        </Scope>

        {/* {selectedSubjectValue !== null && (
            <S.Block>
              <legend>
                Horários disponívies
                <button
                  onClick={() => {
                    setNewClassSchedules((state) => [...state, state.length])
                  }}
                  type="button"
                >
                  + Novo horário
                </button>
              </legend>

              {classes[selectedSubjectValue].class_schedule.map(
                (schedule, index) => (
                  <Scope path={`class_schedule[${index}]`} key={schedule.id}>
                    <Schedule
                      removeSchedule={handleRemoveClassScheduleFromState}
                      schedule={schedule}
                    />
                  </Scope>
                )
              )}

              {newClassSchedules.length !== 0 &&
                newClassSchedules.map((value) => (
                  <Scope key={value} path={`newClassSchedules[${value}]`}>
                    <Schedule />
                  </Scope>
                ))}
            </S.Block>
          )} */}
        {/* </Scope> */}
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
          isLoading={loading || loadingProfile || loadingArea}
          disabled={loading || loadingProfile || loadingArea}
          onClick={() => formRef.current?.submitForm()}
        >
          Salvar
        </Button>
      </S.SubmitContainer>
    </S.Container>
  )
}
