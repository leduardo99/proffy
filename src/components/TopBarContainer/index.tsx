import React from 'react'
import Link from 'next/link'

import * as S from './styles'

interface TopBarContainerProps {
  profile?: boolean
  title?: string
  transparent?: boolean
}

const TopBarContainer: React.FunctionComponent<TopBarContainerProps> = ({
  profile = false,
  title,
  transparent = false
}) => {
  const user = {
    avatar: 'https://avatars.githubusercontent.com/u/35582603?v=4',
    name: 'Luis',
    surname: 'Eduardo'
  }

  function handleSignOut() {
    // TODO
  }

  return (
    <S.Container holder-dark={!profile || transparent}>
      {profile ? (
        <div className="top-bar-container">
          <Link href="/profile">
            <a className="profile-button">
              <img src={user.avatar} alt="Perfil" />
              <p>{[user.name, user.surname].join(' ')}</p>
            </a>
          </Link>
          <p>{title}</p>
          <img onClick={handleSignOut} src="img/icons/leave.svg" alt="Sair" />
        </div>
      ) : (
        <div className="top-bar-container">
          <Link href="/">
            <a>
              <img src="img/icons/back.svg" alt="Voltar" />
            </a>
          </Link>
          <p>{title}</p>

          <img src="img/logo.svg" alt="Proffy" />
        </div>
      )}
    </S.Container>
  )
}

export default TopBarContainer
