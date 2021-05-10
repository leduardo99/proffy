import Heading from 'components/Heading'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
  layout?: 'normal' | 'reverse'
}

const Auth = ({ title, layout = 'normal', children }: AuthProps) => (
  <S.Wrapper layout={layout}>
    <S.BannerBlock>
      <img src="img/proffy.svg" />
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Heading lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
