import styled from 'styled-components'
import { Form as Unform } from '@unform/web'

import { InputContainer } from 'components/Input/styles'
import { LabelContainer } from 'components/Select/styles'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  > main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 3.2rem auto;
    width: 90%;

    > p {
      font: 1.5rem Poppins;
      line-height: 1.625rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textComplement};

      margin-top: 120px;
    }
  }

  @media (min-width: 700px) {
    max-width: 100%;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`

export const FormSearchProffer = styled(Unform)`
  width: 100%;
  margin-top: 3.2rem;

  label:first-of-type {
    color: ${({ theme }) => theme.colors.textInPrimary} !important;
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.buttonText};
    border: none;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 2.9rem;

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  ${LabelContainer} small {
    color: ${({ theme }) => theme.colors.textInPrimary};
  }

  ${InputContainer}, ${LabelContainer} small {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    ${InputContainer}, ${LabelContainer} small {
      margin-top: 0;
    }
  }
`
