import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.textInPrimary};
  background: ${(props) => props.theme.colors.primary};

  .logo-container {
    text-align: center;
    margin-bottom: 3.2rem;

    img {
      height: 10rem;
    }

    h2 {
      width: auto;
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 4.6rem;
      margin-top: 0.8rem;
    }
  }

  .hero-image {
    width: 100%;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;

    a {
      width: 30rem;
      height: 10.4rem;
      border-radius: 0.8rem;
      font: 700 2rem Archivo;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${(props) => props.theme.colors.buttonText};
      transition: 0.2s;

      &:first-child {
        margin-right: 1.6rem;
      }

      img {
        width: 4rem;
        margin-right: 2.4rem;
      }
    }

    a.find-service {
      background: ${(props) => props.theme.colors.primaryLighter};

      &:hover {
        background: ${(props) => props.theme.colors.primaryLight};
      }
    }

    a.offer-services {
      background: ${(props) => props.theme.colors.secondary};

      &:hover {
        background: ${(props) => props.theme.colors.secondaryDark};
      }
    }
  }

  .total-connections {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }
  }
`
