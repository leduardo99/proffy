import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react'
import { Scope, FormHandles, SubmitHandler } from '@unform/core'
import Image from 'next/image'

import Header from 'components/Header'
import Select from 'components/SimpleSelect'
import Button from 'components/Button'
import TextArea from 'components/TextArea'
import MaskedInput from 'components/MaskedInput'
import Schedule from './components/Schedule'
import Success from './components/Success'

import { getImageUrl } from 'utils/getImageUrl'
import convertHoursToMinutes from 'utils/convertHoursToMinutes'

import {
  Container,
  Banner,
  Form,
  Block,
  InputGroup,
  SubmitContainer,
  ProfileGroup
} from './styles'
import { useMutation } from '@apollo/client'
import { useSession } from 'next-auth/client'
import { MUTATION_CREATE_SCHEDULE } from 'graphql/mutations/schedule'
import {
  MutationCreateSchedule,
  MutationCreateScheduleVariables
} from 'graphql/generated/MutationCreateSchedule'
import { toast } from 'react-toastify'
import {
  MutationCreateProffer,
  MutationCreateProfferVariables
} from 'graphql/generated/MutationCreateProffer'
import {
  MUTATION_CREATE_PROFFER,
  MUTATION_UPDATE_PROFFER
} from 'graphql/mutations/proffer'
import { MutationUpdateProffer } from 'graphql/generated/MutationUpdateProffer'

interface FormData {
  user: {
    id: string
  }
  schedule: Array<{
    id: string
    weekDay: number
    from: string
    to: string
  }>
}

interface Props {
  user: {
    id: string
    name: string
    surname: string
    bio: string
    whatsapp: string
    image?: Partial<{
      url: string
    }>
    area: Partial<{
      id: number
      name: string
    }>
  }
  areas: Array<{
    id: number
    name: string
  }>
  proffer: any | null
}

const ServicesOffer: React.FC<Props> = ({ user, areas, proffer }) => {
  const formRef = useRef<FormHandles>(null)
  const [session] = useSession()

  const [newSchedules, setNewSchedules] = useState<number[]>([])

  const [showSuccess, setShowSuccess] = useState(false)

  const handleRemoveSchedule = useCallback((index: number) => {
    setNewSchedules((state) => state.filter((value) => value !== index))
  }, [])

  const [createSchedule] = useMutation<
    MutationCreateSchedule,
    MutationCreateScheduleVariables
  >(MUTATION_CREATE_SCHEDULE, {
    context: { session }
  })

  const [createProffer] = useMutation<
    MutationCreateProffer,
    MutationCreateProfferVariables
  >(MUTATION_CREATE_PROFFER, {
    context: { session }
  })

  const [updateProffer] = useMutation<MutationUpdateProffer>(
    MUTATION_UPDATE_PROFFER,
    {
      context: { session }
    }
  )

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

  const initialData = useMemo(() => ({ ...user }), [user])

  useEffect(() => {
    if (proffer) {
      console.log(proffer)
      setNewSchedules(proffer.schedules)
    }
  }, [proffer])

  const handleSubmit: SubmitHandler<FormData> = async ({ schedule }) => {
    try {
      let schedules = []

      if (schedule.length > 0) {
        for (let i = 0; i < schedule.length; i++) {
          const data = schedule[i]

          const {
            data: {
              createSchedule: {
                schedule: { id }
              }
            }
          } = await createSchedule({
            variables: {
              input: {
                data: {
                  ...data,
                  from: convertHoursToMinutes(data.from),
                  to: convertHoursToMinutes(data.to)
                }
              }
            }
          })

          schedules = [...schedules, id]
        }
      }

      if (proffer === null) {
        await createProffer({
          variables: {
            input: { data: { user: session?.id as string, schedules } }
          }
        })
      } else {
        await updateProffer({
          variables: {
            input: {
              where: { id: proffer.id },
              data: { user: session?.id as string, schedules }
            }
          }
        })
      }

      setShowSuccess(true)
    } catch (error) {
      toast.error(
        'Não foi possivel criar seu perfil, tente novamente mais tarde.'
      )
    }
  }

  if (showSuccess) {
    return <Success />
  }

  if (!user || !user.area) return null

  return (
    <Container>
      <Header backTo="/" title="Oferecer Serviços" />
      <Banner>
        <div>
          <h1>Que incrível que você quer oferecer seus serviços.</h1>
          <div>
            <span>
              O primeiro passo, é preencher esse formulário de inscrição.
            </span>
            <small>
              <img src="/img/icons/rocket.svg" alt="Rocket" />
              Preparare-se! vai ser o máximo.
            </small>
          </div>
        </div>
      </Banner>

      <Form ref={formRef} onSubmit={handleSubmit} initialData={initialData}>
        <Block>
          <legend>Seus dados</legend>

          <ProfileGroup>
            <div>
              <aside>
                <div>
                  <Image
                    layout="fill"
                    src={
                      user?.image
                        ? getImageUrl(user?.image?.url)
                        : '/img/logo.svg'
                    }
                    alt="Profile"
                  />
                </div>
                <strong>
                  {user.name} {user.surname}
                </strong>
              </aside>
              <MaskedInput
                label="Whatsapp"
                name="whatsapp"
                mask="(99) 9 9999-9999"
                readOnly
                disabled
              />
            </div>
            <TextArea
              name="bio"
              label="Biografia"
              message="(Máximo 300 caracteres)"
              readOnly
              disabled
            />
          </ProfileGroup>
        </Block>

        <Block>
          <legend>Sobre a aula</legend>

          <InputGroup>
            <Select
              name="area.id"
              label="Área de atuação"
              placeholder="Selecione uma opção"
              options={areasOptions}
              isDisabled
              noOptionsMessage={() => 'Nenhuma opção disponível'}
            />
          </InputGroup>
        </Block>

        <Block>
          <legend>
            Horários disponíveis
            <button
              onClick={() => {
                setNewSchedules((state) => [...state, state.length])
              }}
              type="button"
            >
              + Novo horário
            </button>
          </legend>

          {newSchedules.map((value) => (
            <Scope key={value} path={`schedule[${value}]`}>
              <Schedule removeSchedule={() => handleRemoveSchedule(value)} />
            </Scope>
          ))}
        </Block>
      </Form>
      <SubmitContainer>
        <div>
          <img src="/img/icons/warning.svg" alt="Warning" />
          <p>
            Importante
            <span>Preencha todos os dados corretamente.</span>
          </p>
        </div>
        <Button onClick={() => formRef.current?.submitForm()}>
          Salvar cadastro
        </Button>
      </SubmitContainer>
    </Container>
  )
}

export default ServicesOffer
