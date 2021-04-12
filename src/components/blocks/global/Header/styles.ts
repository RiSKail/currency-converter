import styled from 'styled-components'

import { device } from '@/constants/devices'

export default styled.header`
  height: 78px;
  color: ${(props): string => props.theme.colors.backgroundDark};
  font-size: ${(props): string => props.theme.fontSizes.small};
  padding-left: ${(props): string => props.theme.unit.quadriple};
  padding-right: ${(props): string => props.theme.unit.quadriple};
  padding-top: ${(props): string => props.theme.unit.double};
  padding-bottom: ${(props): string => props.theme.unit.double};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .is-active {
    color: ${(props): string => props.theme.colors.secondaryLight};
  }

  @media ${device.tablet} {
    height: 48px;
    flex-direction: row;
  }

  a {
    text-decoration: none;
    color: ${(props): string => props.theme.colors.fontLight};
    display: flex;
    align-items: center;

    img {
      width: ${(props): string => props.theme.unit.double};
    }

    &:hover {
      cursor: pointer;
      color: ${(props): string => props.theme.colors.secondaryLight};
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    select {
      opacity: 0.8;
    }

    li {
      font-family: Arial;
      font-weight: ${(props): string => props.theme.fontWeights.bold};
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: ${(props): string => `0 0 0 ${props.theme.unit.quadriple}`};
      text-align: center;

      &:first-child {
        opacity: 0.7;

        &::after {
          display: inline-block;
          content: '';
          height: ${(props): string => props.theme.unit.double};
          width: 1px;
          background: ${(props): string => props.theme.colors.white};
          opacity: 0.3;
          margin: ${(props): string => `0 0 0 ${props.theme.unit.quadriple}`};
        }
      }

      .profile-avatar {
        opacity: 1;
        border-radius: 100px;
        width: ${(props): string => props.theme.unit.quadriple};
        height: ${(props): string => props.theme.unit.quadriple};
        padding: 0;
        margin: ${(props): string => `0 ${props.theme.unit.single} 0 0`};
      }

      img {
        opacity: 0.3;
        padding: ${(props): string => `0 ${props.theme.unit.single} 0 0`};
      }
    }
  }
`
