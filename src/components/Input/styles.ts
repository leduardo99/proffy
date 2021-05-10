import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.boxFooter};
    border-radius: 0.8rem 0.8rem 0 0;
    border: 1px solid ${theme.colors.lineInWhite};

    display: flex;
    align-items: center;

    &:focus-within::before {
      height: calc(100% - 2rem);
      content: '';
      background: ${theme.colors.primaryLight};
      position: absolute;
      top: 1.2rem;
      bottom: 1.2rem;
      left: -1px;
      width: 2px;
    }

    & + & {
      border-top: 0;
      border-radius: 0 0 0.8rem 0.8rem;
    }

    label {
      position: absolute;
      top: 25px;
      left: 25px;
      font: 400 1.6rem Poppins;
      color: ${theme.colors.textComplement};
      line-height: 2.5rem;
      transition: all 0.2s;
      cursor: pointer;
    }

    input[type='email'],
    input[type='password'],
    input[type='text'] {
      border: 0;
      width: 100%;
      outline: 0;
      margin: 2.8rem 0 0.5rem 1.8rem;
      padding: 0.8rem;
      background: ${theme.colors.boxFooter};
      font: 400 1.6rem Poppins;
      color: ${theme.colors.textBase};
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
      top: 17px;
      font: 400 1.25rem Poppins;
    }
  `}
`
