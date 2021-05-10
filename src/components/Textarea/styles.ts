import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  & + & {
    margin-top: 1.4rem;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    content: '';
    height: 2px;
    background: ${(props) => props.theme.colors.primaryLighter};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.colors.inputBackground};
    border: 1px solid ${(props) => props.theme.colors.lineInWhite};
    outline: 0;
    padding: 1.2rem 1.2rem;
    resize: vertical;
    font: 1.6rem Archivo;
    min-height: 8rem;
  }
`
