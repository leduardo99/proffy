import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

interface Props {
  layout: 'normal' | 'reverse'
}

export const Container = styled.div<Props>`
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: stretch;
  background: ${({ theme }) => theme.colors.primary};

  @media (min-width: 730px) {
    flex-direction: ${(props) =>
      props.layout === 'normal' ? 'row' : 'row-reverse'};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};

  padding: 0 2.4rem;

  @media (min-width: 730px) {
    width: 45%;
  }
`

export const Info = styled.div`
  flex: 1;
  background: url('img/background-asset.svg') no-repeat center;

  svg {
    max-width: 33.5rem;
    width: 100%;
  }

  h2 {
    color: ${({ theme }) => theme.colors.textInPrimary};
    font-weight: 400;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 25rem;

  @media (min-width: 730px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
