import styled, { css } from 'styled-components'

interface Props {
  fluid?: boolean
}

export const Container = styled.div<Props>`
  ${({ theme, fluid }) => css`
    width: 100%;
    max-width: ${!fluid ? theme.grid.container : '100%'};
    margin-left: auto;
    margin-right: auto;

    ${!fluid &&
    css`
      padding-left: calc(${theme.grid.gutter} / 2);
      padding-right: calc(${theme.grid.gutter} / 2);
    `}
  `}
`
