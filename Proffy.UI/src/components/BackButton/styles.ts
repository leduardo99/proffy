import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  padding: 3rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.primary};
    min-width: 36rem;

    svg {
      margin-left: -0.5rem;
    }
  }

  @media (min-width: 700px) {
    position: absolute;
    top: 0;
  }
`
