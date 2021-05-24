import React, { useMemo, useRef } from 'react'
import Image from 'next/image'
import { Scope } from '@unform/core'

import Header from 'components/Header'
import Button from 'components/Button'
import Select from 'components/SimpleSelect'
import InputWithLabel from 'components/InputWithLabel'
import TextArea from 'components/TextArea'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

type UserImage = {
  url: string
  hash: string
}

export type ProfileProps = {
  user: {
    id: string
    email: string
    name: string
    surname: string
    image?: Partial<UserImage>
  }
}

export default function Profile({ user }: Partial<ProfileProps>) {
  const formRef = useRef(null)

  function handleSubmit() {
    // TODO
  }

  const initialFormData = useMemo(() => {
    return {
      name: user?.name,
      surname: user?.surname,
      email: user?.email
    }
  }, [user])

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
            <InputWithLabel
              label="Whatsapp"
              name="whatsapp"
              placeholder="(  ) _ ____ ____"
            />
          </S.InputGroup>

          <TextArea
            name="bio"
            label="Biografia"
            message="(Máximo 300 caracteres)"
          />
        </S.Block>

        <Scope path="class">
          <S.Block>
            <legend>Sobre a aula</legend>
            <S.InputGroup>
              <Select
                name="subject"
                label="Matéria"
                placeholder="Selecione uma matéria"
                // options={subjectOptions}
                noOptionsMessage={() => 'Nenhuma opção disponível'}
                // onChange={handleSubjectSelectChange}
              />
              <InputWithLabel label="Custo da sua hora por aula" name="cost" />
            </S.InputGroup>
          </S.Block>

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
        </Scope>
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
        // onClick={() => formRef.current?.submitForm()}
        >
          Salvar
        </Button>
      </S.SubmitContainer>
    </S.Container>
  )
}
