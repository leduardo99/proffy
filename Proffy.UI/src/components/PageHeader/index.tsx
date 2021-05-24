import React from 'react'
import Link from 'next/link'

import { HeaderContainer, TopBarContainer, HeaderContent } from './styles'

interface PageHeaderProps {
  title: string
  description?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  children
}) => {
  return (
    <HeaderContainer>
      <TopBarContainer>
        <Link href="/">
          <a>
            <img src="img/icons/back.svg" alt="Voltar" />
          </a>
        </Link>

        <img src="img/logo.svg" alt="Proffy" />
      </TopBarContainer>

      <HeaderContent>
        <strong>{title}</strong>

        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </HeaderContainer>
  )
}

export default PageHeader
