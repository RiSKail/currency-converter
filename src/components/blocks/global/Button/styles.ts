import styled from 'styled-components'

interface Iprops {
  borderRadius?: string;
  padding?: string;
}

export default styled.button < Iprops > `
    padding: ${(props): string  => props.padding || props.theme.unit.triple};
    font-family: Arial;
    font-weight: ${(props): string  => props.theme.fontWeights.normal};
    font-size: ${(props): string  => props.theme.fontSizes.small};
    color: ${(props): string  => props.theme.colors.fontLight};
    border: none;
    outline: none;
    background: ${(props): string  => props.theme.colors.primary};
    border-radius: ${(props): string => props.borderRadius || props.theme.unit.triple};
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${(props): string  => props.theme.colors.secondaryLight};
      cursor: pointer;
    }
`
