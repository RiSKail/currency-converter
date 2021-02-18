import styled from 'styled-components'

export default styled.button`
    padding: ${props => props.padding || props.theme.unit.triple};
    font-family: Arial;
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.fontLight};
    border: none;
    outline: none;
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.borderRadius};
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
`
