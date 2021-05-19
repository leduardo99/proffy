import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/client'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

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
  const [session] = useSession()

  function handleSignOut() {
    signOut()
  }

  return (
    <S.Container holder-dark={!profile || transparent}>
      {profile ? (
        <div className="top-bar-container">
          <Link href="/profile">
            <a className="profile-button">
              {session?.user.image && (
                <img
                  src={getImageUrl(session.user.image as string)}
                  alt={String(session?.user?.name)}
                />
              )}
              <p>{String(session?.user?.name)}</p>
            </a>
          </Link>
          <p>{title}</p>
          <img onClick={handleSignOut} src="img/icons/leave.svg" alt="Sair" />
        </div>
      ) : (
        <div className="top-bar-container">
          <Link href="/">
            <a>
              <Image
                src="/img/icons/back.svg"
                width={51.2}
                height={51.2}
                objectFit="contain"
                alt="Proffy"
              />
            </a>
          </Link>
          <p>{title}</p>

          <Image src="/img/logo.svg" width={51.2} height={51.2} alt="Proffy" />
        </div>
      )}
    </S.Container>
  )
}

export default TopBarContainer
