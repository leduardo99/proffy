import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    border: 0;
    outline: 0;
    border-radius: 0.8rem;
    padding: 1.8rem;
    line-height: 2.7rem;
    font: 500 1.6rem Archivo;
    margin-top: 4rem;
    cursor: pointer;

    background-color: ${theme.colors.secondary};
    color: ${theme.colors.titleInPrimary};

    transition: background-color 0.2s;

    :hover {
      background-color: ${theme.colors.secondaryDark};
    }

    &:disabled,
    &[disabled] {
      background-color: ${theme.colors.disabledButton};
      color: ${theme.colors.textComplement};
      cursor: default;
    }
  `}
`
