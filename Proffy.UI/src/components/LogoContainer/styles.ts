import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const Container = styled.div`
  position: relative;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;

  ${up('lg')} {
    grid-area: logo;

    .logo-hero {
      h2 {
        font-size: 3rem !important;
        line-height: 4rem !important;
        width: 32rem !important;
      }

      img {
        height: 14rem !important;
      }
    }
  }

  .logo-bg-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .logo-hero {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    img {
      height: 7rem;
      z-index: 1;
    }

    h2 {
      width: 14rem;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 2rem;
      margin-top: 0.8rem;
      z-index: 1;
    }
  }
`
