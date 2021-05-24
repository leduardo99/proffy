import * as S from './styles'

type AuthProps = {
  children: React.ReactNode
  layout?: 'normal' | 'reverse'
}

const Auth = ({ layout = 'normal', children }: AuthProps) => (
  <S.Container layout={layout}>
    <S.Info>
      <div>
        <img src="img/logo.svg" />
        <h2>
          Sua plataforma para encontrar o <br /> serviço ideal.
        </h2>
      </div>
    </S.Info>

    <S.Content>{children}</S.Content>
  </S.Container>
)

export default Auth
