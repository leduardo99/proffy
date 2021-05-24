import styled from 'styled-components'
import { darken } from 'polished'
import { down } from 'styled-breakpoints'

import { Form as Unform } from '@unform/web'

import { InputContainer } from 'components/Input/styles'

export const Form = styled(Unform)`
  width: 100%;
  max-width: 350px;

  h1 {
    font: 3.6rem Poppins;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textTitle};
    margin-bottom: 4rem;
  }

  ${InputContainer} {
    border-radius: 0.8rem 0.8rem 0 0;
  }

  ${InputContainer} + ${InputContainer} {
    border-radius: 0 0 0.8rem 0.8rem;
  }
`

export const OptionsBlock = styled.div`
  margin-top: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.textComplement};

    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => darken(0.3, theme.colors.textComplement)};
    }
  }
`

export const Footer = styled.footer`
  margin-top: 12.8rem;
  width: 100%;
  max-width: 350px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    line-height: 3.2rem;
    color: ${({ theme }) => theme.colors.textBase};

    a {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};

      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
      }
    }
  }

  small {
    display: flex;
    align-items: center;

    img {
      margin-left: 0.8rem;
    }
  }
`
