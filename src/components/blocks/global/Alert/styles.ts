import styled from 'styled-components'

export default styled.div`
  padding: ${(props): string => props.theme.unit.triple};
  background-color: ${(props): string => props.theme.colors.error};
  color: ${(props): string => props.theme.colors.fontLight};
  opacity: 1;
  transition: opacity 0.6s;
  margin-bottom: ${(props): string => props.theme.unit.double};
  border-radius: ${(props): string => props.theme.unit.half};
  
  .close-btn {
    margin-left: ${(props): string => props.theme.unit.double};
    color: ${(props): string => props.theme.colors.fontLight};
    font-weight: ${(props): string => props.theme.fontWeights.bold};
    float: right;
    font-size: ${(props): string => props.theme.fontSizes.tripleBig};
    line-height: ${(props): string => props.theme.unit.triple};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${(props): string => props.theme.colors.fontDark};
    }
  }
`

export const Colors = styled.div`
  .warning {
    background-color: ${(props): string => props.theme.colors.warning} !important;
  }

  .success {
    background-color: ${(props): string => props.theme.colors.success} !important;
  }

  .info {
    background-color: ${(props): string => props.theme.colors.info} !important;
  }

  .error {
    background-color: ${(props): string => props.theme.colors.error} !important;
  }
`
