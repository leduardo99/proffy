import styled from 'styled-components'
import { down } from 'styled-breakpoints'

import { Form as UnForm } from '@unform/web'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Form = styled(UnForm)`
  margin-top: 40px;

  width: 100%;

  .signin {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 30px;

    font: 400 1.6rem Poppins;

    ${down('lg')} {
      justify-content: space-around;
    }

    a {
      color: ${(props) => props.theme.colors.primary};
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme.colors.primaryDarker};
      }
    }
  }
`
