import styled from 'styled-components'
import { down } from 'styled-breakpoints'

import { Form as Unform } from '@unform/web'

import { InputContainer } from 'components/Input/styles'

export const Form = styled(Unform)`
  width: 100%;
  max-width: 350px;

  a {
    margin-bottom: 1.6rem;
    display: block;
  }

  h1 {
    font: 3.6rem Poppins;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textTitle};
    margin-bottom: 2.4rem;
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.textBase};
    margin-bottom: 4rem;
    line-height: 2.6rem;
    display: block;
  }

  ${InputContainer} {
    border-radius: 0.8rem 0.8rem 0 0;
  }

  ${InputContainer} + ${InputContainer} {
    border-radius: 0;
  }

  ${InputContainer} + ${InputContainer} + ${InputContainer} + ${InputContainer} {
    border-radius: 0 0 0.8rem 0.8rem;
  }
`
