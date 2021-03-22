import styled from 'styled-components'
import { device } from '../../../constants/devices'

interface IProps {
  props?: any
}

export default styled.div < IProps > `
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.unit.single};
  padding: ${props => props.theme.unit.quadriple};
  width: 90%;
  margin: 45px 0 0 0;
  display: flex;
  flex-direction: column;
  height: 300px;

  @media ${device.laptop} {
    width: 30%;
    margin: 45px 25px 0 0;
    height: auto;
  }

  input {
    box-shadow: 0px 4px 4px rgb(51 51 51 / 4%), 0px 4px 16px rgb(51 51 51 / 8%);
    border-radius: ${props => props.theme.unit.half};
    border: none;
    outline: none;
    padding: ${props => props.theme.unit.double};
  }

  ul {
    height: 450px;
    overflow-y: auto;
    padding: 0;

    li {
      list-style: none;
      background: ${props => props.theme.colors.fontLight};
      padding: ${props => props.theme.unit.double};
      margin: 0 10px 10px 0;
      display: flex;
      border-radius: ${props => props.theme.unit.half};
      align-items: center;
      transition: 0.3s;
      
      img {
        width: 40px;
        margin: 0 10px 0 0;
      }

      &:hover {
        cursor: pointer;
        background: ${props => props.theme.colors.backgroundLight};
      }
    }
  }
`
