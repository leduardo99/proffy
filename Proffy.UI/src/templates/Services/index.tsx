import { FormHandles } from '@unform/core'
import { Container } from 'components/Container'
import Input from 'components/Input'
import PageHeader from 'components/PageHeader'
import Proffer from 'components/Proffer'
import Select from 'components/Select'
import React, { useRef } from 'react'

import * as S from './styles'

const Services: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  return (
    <Container fluid>
      <PageHeader title="Estes são os proffys disponíveis.">
        <S.UnForm ref={formRef} onSubmit={() => null}>
          <Select name="subject" label="Profissões" options={[]} />

          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' }
            ]}
          />

          <Input name="time" type="time" label="Hora" stacked />

          <button type="submit">Buscar</button>
        </S.UnForm>
      </PageHeader>

      <S.Main>
        {[1, 2, 3, 4].map((proffer) => (
          <Proffer
            key={proffer}
            proffer={{
              user: {
                avatar: 'https://avatars.githubusercontent.com/u/35582603?v=4',
                name: 'Luis Eduardo',
                bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                whatsapp: '+55 85 981675577'
              },
              subject: 'Desenvolvedor Frontend',
              cost: '10'
            }}
          />
        ))}
      </S.Main>
    </Container>
  )
}

export default Services
