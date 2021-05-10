import React, { CSSProperties } from 'react'
import TopBarContainer from 'components/TopBarContainer'

import * as S from './styles'

interface PageHeaderProps {
  title?: string
  description?: string
  background?: string
  page?: string
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  title,
  description,
  background,
  page,
  children
}) => {
  const headerContentStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'contain'
  }

  return (
    <S.Container style={(background as CSSProperties) && headerContentStyle}>
      <TopBarContainer title={page} />
      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </S.Container>
  )
}

export default PageHeader
