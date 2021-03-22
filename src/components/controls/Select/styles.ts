import styled from 'styled-components'

interface IProps {
  props?: any
}

export default styled.select < IProps > `
  outline: none;
  border-radius: 0;
  padding: ${props => props.theme.unit.half} ${props => props.theme.unit.double};
  font-size: ${props => props.theme.fontSizes.normal};
`
