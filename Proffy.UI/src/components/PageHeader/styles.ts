import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};

  ${up('md')} {
    min-height: 340px;

    .header-content {
      flex: 1;
      max-width: 740px;
      margin: 0 auto;
      padding-bottom: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: flex-start;

      strong {
        max-width: 350px;
      }
    }
  }

  .header-content {
    width: 90%;
    position: relative;
    margin: 7.2rem auto;

    strong {
      font: 700 3.6rem Archivo;
      line-height: 4.2rem;
      color: ${(props) => props.theme.colors.titleInPrimary};
    }

    p {
      max-width: 30rem;
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: ${(props) => props.theme.colors.textInPrimary};
      margin-top: 2.4rem;
    }
  }
`
