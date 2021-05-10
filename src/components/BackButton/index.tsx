import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

import * as S from './styles'

const BackButton: React.FC = () => {
  return (
    <S.Container>
      <Link href="/">
        <a>
          <FaArrowLeft size={40} />
        </a>
      </Link>
    </S.Container>
  )
}

export default BackButton
