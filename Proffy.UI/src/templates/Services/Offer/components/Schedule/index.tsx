import React, { useMemo } from 'react'

import SimpleSelect from 'components/SimpleSelect'
import InputWithLabel from 'components/InputWithLabel'

import { ScheduleContainer, DeleteContainer, Divisor } from './styles'

interface ScheduleProps {
  removeSchedule: () => void
}

const Schedule: React.FC<ScheduleProps> = ({ removeSchedule }) => {
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

  return (
    <>
      <ScheduleContainer>
        <SimpleSelect
          name="weekDay"
          label="Dia da semana"
          placeholder="Selecione um dia da semana"
          options={weekDayOptions}
          defaultValue={weekDayOptions[1]}
        />
        <InputWithLabel
          name="from"
          label="Das"
          defaultValue="00:00"
          type="time"
        />
        <InputWithLabel
          name="to"
          label="Até"
          defaultValue="00:00"
          type="time"
        />
      </ScheduleContainer>
      <DeleteContainer>
        <Divisor />
        <button onClick={removeSchedule} type="button">
          Excluir horário
        </button>
        <Divisor />
      </DeleteContainer>
    </>
  )
}

export default Schedule
