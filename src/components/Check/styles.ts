import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    align-self: center;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.textComplement};
    line-height: 2.8rem;
  }

  input[type='checkbox'] {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    color: ${(props) => props.theme.colors.textTitle};
    border: 1px solid ${(props) => props.theme.colors.boxBase};
    border-radius: 4px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    cursor: pointer;
    transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
    margin-right: 2rem;
    background: ${(props) => props.theme.colors.inputBackground};

    &::before {
      position: absolute;
      content: '';
      display: block;
      left: 5px;
      width: 8px;
      height: 14px;
      border-style: solid;
      border-color: #fff;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      opacity: 0;
    }

    &:checked {
      color: ${(props) => props.theme.colors.boxBase};
      border-color: ${(props) => props.theme.colors.secondary};
      background: ${(props) => props.theme.colors.secondary};
    }

    &:checked::before {
      opacity: 1;
    }
  }
`
