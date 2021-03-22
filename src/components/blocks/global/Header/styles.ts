import styled from 'styled-components'
import { device } from '../../../../constants/devices'

interface IProps {
  props?: any
}

export default styled.header < IProps > `
  height: 78px;
  color: ${props => props.theme.colors.backgroundDark};
  font-size: ${props => props.theme.fontSizes.weryBig};
  padding-left: ${props => props.theme.unit.quadriple};
  padding-right: ${props => props.theme.unit.quadriple};
  padding-top: ${props => props.theme.unit.double};
  padding-bottom: ${props => props.theme.unit.double};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .is-active{
    color: ${props => props.theme.colors.secondaryLight};
  }

  @media ${device.tablet} {
    height: 48px;
    flex-direction: row;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.fontLight};
    display: flex;
    align-items: center;

    img {
      width: ${props => props.theme.unit.double};
    }

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.secondaryLight};
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    font-family: Arial;
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.middleSmall};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 0 32px;
    text-align: center;

    .profile-avatar {
      opacity: 1;
      border-radius: 100px;
      width: 32px;
      height: 32px;
      padding: 00;
      margin: 0 8px 0 0;
    }
  }

  ul li:first-child{
    opacity: 0.7;
  }

  ul li:first-child::after{
    display: inline-block;
    content: '';
    height: 12px;
    width: 1px;
    background: #FFFFFF;
    opacity: 0.3;
    margin: 0 0 0 32px;
  }

  ul img {
    opacity: 0.3;
    padding: 0 8px 0 0;
  }
`
