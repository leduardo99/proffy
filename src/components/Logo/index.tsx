import * as S from './styles'

export type LogoProps = {
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
}

const Logo = ({ size = 'normal', hideOnMobile = false }: LogoProps) => (
  <S.Wrapper size={size} hideOnMobile={hideOnMobile}>
    <svg
      width="192"
      height="192"
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="192" height="192" fill="#9871F5" />
      <path
        d="M117.418 56H73.5608C61.89 56 56 61.7138 56 73.0313V133.603C56 135.087 56.79 136 58.4922 136H71.7495C73.336 136 74.3573 135.087 74.3573 133.603V131.303C74.3573 125.693 76.7017 122.635 82.5275 122.046H117.418C130.219 122.046 136 116.449 136 104.218V73.8282C136 61.5972 130.219 56 117.418 56ZM117.662 99.0739C117.662 105.708 116.172 107.075 108.348 107.075H89.7664C81.9494 107.075 76.9587 109.705 74.3509 114.848V77.4884C74.3509 72.3446 75.5969 70.9713 81.8274 70.9713H108.348C116.172 70.9713 117.662 72.3446 117.662 78.9719V99.0739Z"
        fill="white"
      />
    </svg>
  </S.Wrapper>
)

export default Logo
