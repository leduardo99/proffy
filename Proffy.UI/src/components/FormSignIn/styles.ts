import styled from 'styled-components'
import { down } from 'styled-breakpoints'

import { Form } from '@unform/web'

export const Container = styled(Form)`
  margin-top: 40px;
`

export const Footer = styled.footer`
  width: 100%;

  .footer-container {
    width: 100%;

    margin: 0 auto;
    padding: 5rem 0;
    font: 400 1.6rem Poppins;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    ${down('md')} {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .signup {
      ${down('md')} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        a {
          margin-left: 5px;
        }
      }
    }

    a {
      color: ${(props) => props.theme.colors.primary};
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme.colors.primaryDarker};
      }
    }

    span {
      color: ${(props) => props.theme.colors.textComplement};
      font-size: 1.25rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        margin-left: 5px;
        color: ${(props) => props.theme.colors.primary};
        opacity: 0.5;
      }
    }
  }
`
