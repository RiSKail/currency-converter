import styled from 'styled-components'

export default styled.select`
  outline: none;
  border-radius: 0;
  padding: ${(props): string => props.theme.unit.half + ' ' + props.theme.unit.double};
  font-size: ${(props): string => props.theme.fontSizes.normal};
`
