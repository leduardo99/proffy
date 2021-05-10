import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

interface WrapperProps {
  layout: 'normal' | 'reverse'
}

export const Wrapper = styled.main<WrapperProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'banner'
    'content';

  height: 100vh;

  ${up('lg')} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: ${(props) =>
      props.layout === 'normal' ? "'banner content'" : "'content banner'"};
  }
`

export const BannerBlock = styled.div`
  grid-area: banner;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  background: url('img/auth-bg.svg') no-repeat center
    ${(props) => props.theme.colors.primary};

  width: 100%;
  height: 100%;

  padding: 30px;
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};
    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`

export const Content = styled.div`
  grid-area: content;

  ${({ theme }) => css`
    background: ${theme.colors.background};
    display: grid;

    align-items: center;
    justify-content: center;
  `}
`

export const ContentWrapper = styled.div`
  padding: 15px;

  width: 30rem;

  ${up('md')} {
    width: 36rem;
  }
`
