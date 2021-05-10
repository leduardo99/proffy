import React from 'react'
import Link from 'next/link'

import * as S from './styles'

const pageFullBackgroundStyle = {
  backgroundImage: `url(img/success-background.svg)`
}

interface FullContentProps {
  className?: string
  title: string
  disabled?: boolean
  message: string
  link: {
    url: string
    text: string
  }
}

const FullContent: React.FunctionComponent<FullContentProps> = ({
  title,
  message,
  disabled = false,
  link,
  className
}) => {
  return (
    <S.Container className={className}>
      <div className="page-full-container">
        <div className="page-full-background" style={pageFullBackgroundStyle} />
        <div>
          <img src="img/icons/done.svg" alt="" />
          <h2>{title}</h2>
          <p>{message}</p>
          {!disabled ? <Link href={link.url}>{link.text}</Link> : <span></span>}
        </div>
      </div>
    </S.Container>
  )
}

export default FullContent
