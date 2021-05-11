import FullContent from 'components/FullContent'
import React from 'react'

const Notify: React.FC = () => {
  return (
    <FullContent
      title="Notificação"
      message="Está é uma página de notificação"
      link={{
        url: '/',
        text: 'Página inicial'
      }}
    />
  )
}

export default Notify
