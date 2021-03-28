import styled from 'styled-components'

export default styled.div`
  height: 128px;
  background-color: ${(props): string => props.theme.colors.primaryDark};
  color: ${(props): string => props.theme.colors.backgroundDark};
  font-size: ${(props): string => props.theme.fontSizes.weryBig};
  padding-left: ${(props): string => props.theme.unit.quadriple};
  padding-right: ${(props): string => props.theme.unit.quadriple};
  padding-top: ${(props): string => props.theme.unit.double};
  padding-bottom: ${(props): string => props.theme.unit.double};

  a {
    text-decoration: none;
    display: inline-block;
    color: ${(props): string => props.theme.colors.backgroundDark};
    margin-top: ${(props): string => props.theme.unit.quadriple};
    border: solid 1px ${(props): string => props.theme.colors.backgroundDark};
    padding: ${(props): string => props.theme.unit.half};
  }
`
