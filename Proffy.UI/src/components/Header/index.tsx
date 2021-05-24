import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface HeaderProps {
  title: string
  backTo: string
}

const Header: React.FC<HeaderProps> = ({ title, backTo }) => {
  return (
    <Container>
      <div>
        <Link href={backTo}>
          <a>
            <img src="img/icons/back.svg" alt="Back" />
          </a>
        </Link>

        <span>{title}</span>

        <img src="img/icons/logo.svg" alt="Proffy" />
      </div>
    </Container>
  )
}

export default Header
