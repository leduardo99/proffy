import React, { useEffect, useMemo, useRef } from 'react'

import PageHeader from 'components/PageHeader'
import ProfferItem, { Proffer } from './Proffer'

import { Container, FormSearchProffer } from './styles'
import InputWithLabel from 'components/InputWithLabel'
import { useQuery } from '@apollo/client'
import {
  QueryProffersWithFilters,
  QueryProffersWithFiltersVariables
} from 'graphql/generated/QueryProffersWithFilters'
import { QUERY_PROFFERS_WITH_FILTERS } from 'graphql/queries/proffer'
import { useSession } from 'next-auth/client'
import Select from 'components/Select'
import { SubmitHandler } from '@unform/core'
import convertHoursToMinutes from 'utils/convertHoursToMinutes'

type Props = {
  areas: Array<{
    id: string
    name: string
  }>
}

type FormData = {
  time: string
  area: { id: string }
  day: string
}

const TeacherList: React.FC<Props> = ({ areas }) => {
  const formRef = useRef(null)
  const [session] = useSession()
  // const [proffers, setProffers] = useState([])

  const { data, loading, refetch } = useQuery<
    QueryProffersWithFilters,
    QueryProffersWithFiltersVariables
  >(QUERY_PROFFERS_WITH_FILTERS, {
    context: { session },
    fetchPolicy: 'no-cache'
  })

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

  const weekDayOptions = useMemo(() => {
    return [
      { value: 1, label: 'Domingo' },
      { value: 2, label: 'Segunda-Feira' },
      { value: 3, label: 'Terça-Feira' },
      { value: 4, label: 'Quarta-Feira' },
      { value: 5, label: 'Quinta-Feira' },
      { value: 6, label: 'Sexta-Feira' },
      { value: 7, label: 'Sábado' }
    ]
  }, [])

  useEffect(() => console.log(data), [data])

  const handleSubmit: SubmitHandler<FormData> = async ({ area, day, time }) => {
    let where = {}

    if (area.id) {
      where = { ...where, user: { area } }
    }

    console.log(day)
    if (day || day === '0') {
      console.log(day)
      where = { ...where, schedules: { weekDay: day } }
    }

    if (time) {
      where = { ...where, schedules: { from: convertHoursToMinutes(time) } }
    }

    await refetch({
      where
    })
  }

  if (loading) return null

  return (
    <Container>
      <PageHeader
        title="Estes são os Proffys disponívies."
        description="Busque o serviço ideal para o seu problema."
      >
        <FormSearchProffer ref={formRef} onSubmit={handleSubmit}>
          <InputWithLabel type="time" name="time" label="Horário" />

          <Select
            name="area.id"
            label="Área de atuação"
            placeholder="Selecione"
            options={areasOptions}
            noOptionsMessage={() => 'Nenhuma opção disponível'}
            isClearable
          />

          <Select
            name="day"
            label="Dia da semana"
            placeholder="Selecione"
            options={weekDayOptions}
            noOptionsMessage={() => 'Nenhuma opção disponível'}
            isClearable
          />

          <button onClick={() => formRef.current?.submitForm()}>Buscar</button>
        </FormSearchProffer>
      </PageHeader>

      <main>
        {data.proffers.map((proffer: Proffer) => (
          <ProfferItem key={proffer.id} proffer={proffer} />
        ))}
        {data.proffers.length <= 0 && <p>Nenhum proffy foi encontrado.</p>}
      </main>
    </Container>
  )
}

export default TeacherList
