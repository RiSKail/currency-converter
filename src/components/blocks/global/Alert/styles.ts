import styled from 'styled-components'

interface IProps {
  props?: any
}

export default styled.div < IProps > `
  padding: ${props => props.theme.unit.triple};
  background-color: ${props => props.theme.colors.error};
  color: ${props => props.theme.colors.fontLight};
  opacity: 1;
  transition: opacity 0.6s;
  margin-bottom: ${props => props.theme.unit.double};
  border-radius: ${props => props.theme.unit.half};
  
  .close-btn {
    margin-left: ${props => props.theme.unit.double};
    color: ${props => props.theme.colors.fontLight};
    font-weight: ${props => props.theme.fontWeights.bold};
    float: right;
    font-size: ${props => props.theme.fontSizes.tripleBig};
    line-height: ${props => props.theme.unit.triple};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${props => props.theme.colors.fontDark};
    }
  }
`

export const Colors = styled.div`
  .warning {
    background-color: ${props => props.theme.colors.warning} !important;
  }

  .success {
    background-color: ${props => props.theme.colors.success} !important;
  }

  .info {
    background-color: ${props => props.theme.colors.info} !important;
  }

  .error {
    background-color: ${props => props.theme.colors.error} !important;
  }
`
