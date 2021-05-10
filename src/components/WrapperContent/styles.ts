import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 40vh 1fr;
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colors.textInPrimary};
  background: ${(props) => props.theme.colors.primary};

  ${up('lg')} {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr !important;
    grid-template-columns: repeat(2, 1fr);

    #ad {
      grid-column: span 2 / span 2;
    }

    &.page-content-right {
      grid-template-areas: 'top bottom';
    }

    &.page-content-left {
      grid-template-areas: 'bottom top';
    }

    & > div:nth-child(1) {
      grid-area: top;
    }

    & > div:nth-child(2) {
      grid-area: bottom;
    }
  }
`
