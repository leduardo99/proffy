import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.boxBase};
    border: 1px solid ${theme.colors.lineInWhite};
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;
    width: 100%;

    header {
      padding: 3.2rem 2rem;
      display: flex;
      align-items: center;

      figure {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        position: relative;
      }

      div {
        margin-left: 2.4rem;

        strong {
          font: 700 2.4rem Archivo;
          display: block;
          color: ${theme.colors.textTitle};
        }

        span {
          font-size: 1.6rem;
          display: block;
          margin-top: 0.4rem;
        }
      }
    }

    > p {
      padding: 0 2rem;
      font-size: 1.6rem;
      line-height: 2.8rem;
    }

    footer {
      padding: 3.2rem;
      background: ${theme.colors.boxFooter};
      border-top: 1px solid ${theme.colors.lineInWhite};
      margin-top: 3.2rem;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      p strong {
        color: ${theme.colors.primary};
        font-size: 1.6rem;
        display: block;
      }

      a {
        width: 20rem;
        height: 5.6rem;
        background: ${theme.colors.secondary};
        color: ${theme.colors.buttonText};
        border: none;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.4rem Archivo;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-decoration: none;

        transition: 0.2s;

        &:hover {
          background: ${theme.colors.secondaryDark};
        }
      }
    }

    @media (min-width: 700px) {
      header,
      footer {
        padding: 3.2rem;
      }

      > p {
        padding: 0 3.2rem;
      }

      footer p strong {
        display: initial;
        margin-left: 1.6rem;
      }

      footer button {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
      }

      footer button img {
        margin-right: 1.6rem;
      }
    }
  `}
`
