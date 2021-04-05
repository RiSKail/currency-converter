import styled from 'styled-components'

export default styled.footer`
  background-color: ${(props): string => props.theme.colors.backgroundDark};
  color: ${(props): string => props.theme.colors.font};
  padding-left: ${(props): string => props.theme.unit.double};
  padding-right: ${(props): string => props.theme.unit.double};
  padding-top: ${(props): string => props.theme.unit.double};
  padding-bottom: ${(props): string => props.theme.unit.double};
`
