import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

interface Props {
  'holder-dark': boolean
}

export const Container = styled.div<Props>`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  & + div {
    margin-top: 7.2rem;
  }

  ${(props) =>
    props['holder-dark'] &&
    css`
      background: ${(props) => props.theme.colors.primaryDarker};
    `}

  .top-bar-container {
    width: 90%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.colors.textInPrimary};
    padding: 1.6rem 0;

    ${up('lg')} {
      max-width: 1100px;
    }

    & > img {
      height: 1.6rem;
    }

    .profile-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;

      img {
        height: 4.2rem;
        border-radius: 50%;
        margin-right: 1.2rem;
      }

      p {
        text-decoration: none;
        color: ${(props) => props.theme.colors.buttonText};
        font: 400 1.2rem Poppins;
        border: 0;
      }
      & + p + img {
        background: ${(props) => props.theme.colors.primaryDarker};
        height: 100%;
        padding: 0.7rem;
        border-radius: 0.8rem;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }
    }

    p {
      font: 400 1.4rem Archivo;
    }

    a {
      height: 3.2rem;
      transition: opacity 0.2s;
    }

    a:hover {
      opacity: 0.6;
    }
  }
`
