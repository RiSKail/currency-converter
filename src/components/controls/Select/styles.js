import styled from 'styled-components'

export default styled.select`
  appearance: none;
  border-radius: 0;
  padding: ${props => props.theme.unit.half} ${props => props.theme.unit.double};
  font-size: ${props => props.theme.fontSizes.normal};
`
