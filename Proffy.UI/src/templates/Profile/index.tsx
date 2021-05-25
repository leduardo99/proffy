import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import Image from 'next/image'
import { Scope } from '@unform/core'

import Header from 'components/Header'
import Button from 'components/Button'
import Select from 'components/SimpleSelect'
import InputWithLabel from 'components/InputWithLabel'
import TextArea from 'components/TextArea'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'
import { ProfileFragment_user_profile } from 'graphql/generated/ProfileFragment'
import MaskedInput from 'components/MaskedInput'

type UserImage = {
  url: string
  hash: string
}

export type Area = {
  id: string
  name: string
}

export type UserProfile = {
  whatsapp: string | null
  bio: string | null
  area: Area | null
}

export type ProfileProps = {
  user: {
    id: string
    email: string
    name: string
    surname: string
    image?: Partial<UserImage>
    user_profile: UserProfile
  }
  areas: Area[]
}

export default function Profile({ user, areas }: Partial<ProfileProps>) {
  const formRef = useRef(null)

  function handleSubmit(data) {
    console.log(data)
  }

  const initialFormData = useMemo(() => ({ ...user }), [user])

  useEffect(() => console.log(initialFormData), [initialFormData])

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
        <span>Desenvolvedor III</span>
      </S.Banner>

      <S.Form
        initialData={initialFormData}
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <S.Block>
          <legend>Seus dados</legend>

          <S.InputGroup>
            <InputWithLabel label="Nome" name="name" />
            <InputWithLabel label="Sobrenome" name="surname" />
          </S.InputGroup>

          <S.InputGroup>
            <InputWithLabel label="E-mail" name="email" type="email" />
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
                // onChange={handleAreaSelectChange}
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
          // isLoading={loading}
          // disabled={loading}
          onClick={() => formRef.current?.submitForm()}
        >
          Salvar
        </Button>
      </S.SubmitContainer>
    </S.Container>
  )
}
