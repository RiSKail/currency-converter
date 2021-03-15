import styled from 'styled-components'

export default styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.backgroundTransparentBlack};
  display: flex;
  align-items: center;
  justify-content: center;

  .close-btn {
    color: ${props => props.theme.colors.fontGray};
    font-weight: ${props => props.theme.fontWeights.bold};
    float: right;
    font-size: ${props => props.theme.fontSizes.tripleBig};
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${props => props.theme.colors.fontDark};
    }
  }
`

export const ModalContent = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.fontLight};
  color: ${props => props.theme.colors.fontDark};
  opacity: 1;
  transition: opacity 0.6s;
  margin-bottom: ${props => props.theme.unit.double};
  border-radius: ${props => props.theme.unit.half};

  input {
    outline: none;
  }
`
