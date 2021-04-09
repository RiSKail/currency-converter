import styled from 'styled-components'

export default styled.select`
  outline: none;
  border-radius: ${(props): string => props.theme.unit.half};
  padding: ${(props): string => props.theme.unit.half + ' ' + props.theme.unit.double};
  font-size: ${(props): string => props.theme.fontSizes.normal};
  background: ${(props): string => props.theme.colors.select};
  border: 1px solid ${(props): string => props.theme.colors.fontLight};
  color: ${(props): string => props.theme.colors.fontLight};

  &:hover {
    cursor: pointer;
  }
`
