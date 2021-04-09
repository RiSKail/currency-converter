import styled from 'styled-components'
import { device } from '@/constants/devices'
import img from './img/check.svg'

export default styled.div`
  background: ${(props): string => props.theme.colors.backgroundLight};
  border-radius: ${(props): string => props.theme.unit.single};
  padding: ${(props): string => props.theme.unit.quadriple};
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
    border-radius: ${(props): string => props.theme.unit.half};
    border: none;
    outline: none;
    padding: ${(props): string => props.theme.unit.double};
  }

  ul {
    height: 450px;
    overflow-y: auto;
    padding: 0;

    .is-active {
      background: url( ${img}) ${(props): string => props.theme.colors.backgroundLight} no-repeat right 15px center !important;
      background-blend-mode: hue;
      background-size: ${(props): string => props.theme.unit.quadriple} !important;
    }

    li {
      list-style: none;
      background: ${(props): string => props.theme.colors.fontLight} right 15px center;
      padding: ${(props): string => 
        props.theme.unit.double + ' ' + 
        props.theme.unit.eight + ' ' + 
        props.theme.unit.double + ' ' + 
        props.theme.unit.double};
      margin: 0 10px 10px 0;
      display: flex;
      border-radius: ${(props): string => props.theme.unit.half};
      align-items: center;
      transition: 0.3s;
      
      img {
        width: 40px;
        margin: 0 10px 0 0;
      }

      &:hover {
        cursor: pointer;
        background: ${(props): string => props.theme.colors.backgroundLight} right 15px center;
      }
    }
  }
`
