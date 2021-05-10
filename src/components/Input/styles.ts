import styled, { css } from 'styled-components'

interface Props {
  stacked: boolean
}

export const Container = styled.div<Props>`
  ${({ theme, stacked }) => css`
    position: relative;

    & + & {
      margin-top: 1.4rem;
    }

    &:last-of-type {
      margin-bottom: 1.4rem;
    }

    label {
      font-size: 1.4rem;
    }

    input {
      width: 100%;
      height: 5.6rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background: ${theme.colors.inputBackground};
      border: 1px solid ${theme.colors.lineInWhite};
      outline: 0;
      padding: 0 1.6rem;
      font: 1.6rem Archivo;
    }

    input[disabled] {
      background: none;
      border: none;
    }

    &:focus-within::after {
      width: calc(100% - 3.2rem);
      content: '';
      height: 2px;
      background: ${theme.colors.primary};
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }

    ${!stacked &&
    css`
      margin: 0;

      & + & {
        margin-top: 0;
      }

      &:first-of-type {
        margin-top: 1.4rem;

        input {
          border-top-left-radius: 0.8rem;
          border-top-right-radius: 0.8rem;
        }
      }

      &:last-of-type {
        margin-bottom: 1.4rem;

        input {
          border-bottom-left-radius: 0.8rem;
          border-bottom-right-radius: 0.8rem;
        }
      }

      input {
        margin: 0;
        border-radius: 0;
      }
    `}
  `}
`
