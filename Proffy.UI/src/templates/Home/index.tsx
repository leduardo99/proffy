import Link from 'next/link'
import { useSession, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'

import Button from 'components/Button'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

export default function Home() {
  const [session] = useSession()
  const { push } = useRouter()

  return (
    <S.Container>
      <S.TopContent>
        <S.Header>
          <Link href="/profile">
            <a>
              {session?.user.image && (
                <img src={getImageUrl(session?.user.image)} alt="Profile" />
              )}
              <span>{session?.user.name}</span>
            </a>
          </Link>

          <button onClick={() => signOut()} type="button">
            <img src="img/icons/leave.svg" alt="Sair" />
          </button>
        </S.Header>

        <S.LogoContainer>
          <div>
            <img src="img/logo.svg" alt="Proffy" />
            <h1>Sua plataforma para encontrar o serviço ideal.</h1>
          </div>

          <img src="img/landing.svg" alt="Landing" />
        </S.LogoContainer>
      </S.TopContent>
      <S.Footer>
        <S.InfoContainer>
          <h2>
            Seja bem vindo.
            <strong>O Que deseja fazer?</strong>
          </h2>

          <small>
            Total de 10 conexões já realizadas
            <img src="img/icons/purple-heart.svg" alt="Landing" />
          </small>
        </S.InfoContainer>

        <S.ButtonsContainer>
          <Button onClick={() => push('/services')}>
            {/* <StudyIcon /> */}
            Serviços
          </Button>

          <Button onClick={() => push('/services/offer')}>
            {/* <GiveClassesIcon /> */}
            Ofecerer Serviços
          </Button>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Container>
  )
}
