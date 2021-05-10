import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .page-full-background {
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 85%;
    height: 85%;
    z-index: 0;
  }

  & > div {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    color: ${(props) => props.theme.colors.lineInWhite};
    z-index: 999;

    h2 {
      font: 700 4rem Poppins;
      z-index: 1;
    }

    p {
      max-width: 400px;
      z-index: 1;
    }
    span {
      margin: 8rem;
      padding: 1.6rem 4rem;
    }
    a {
      margin-top: 8rem;
      padding: 1.6rem 4rem;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.buttonText};
      border: 0;
      outline: 0;
      transition: 0.2s;
      border-radius: 0.8rem;
      cursor: pointer;
      text-decoration: none;
      z-index: 1;

      &:hover {
        background: ${(props) => props.theme.colors.secondaryDark};
        color: ${(props) => props.theme.colors.buttonText};
      }
    }
  }
`
