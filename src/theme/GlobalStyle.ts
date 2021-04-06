import { createGlobalStyle } from 'styled-components'

import { device } from '@/constants/devices'
import { IkeyableObj } from '@/types/otherTypes'

import bg from './img/bg.jpg'

interface Iprops {
  theme: IkeyableObj;
}

export default createGlobalStyle < Iprops >`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=DM+Sans:300,400,700&display=swap');

  body {
    margin: 0;
    background: ${(props): string => props.theme.colors.background};
    background-size: cover;

    @media ${device.tablet} {
      background: url(${bg}) fixed no-repeat bottom right, 
      ${(props): string => props.theme.colors.background};
      background-size: cover;
    }

    color: ${(props): string => props.theme.colors.font};
    font-weight: ${(props): string => props.theme.fontWeights.normal};
    font-family: ${(props): string => props.theme.fontFamily};

    a {
      text-decoration: none;
    }
  }

  main {
    padding-left: ${(props): string => props.theme.unit.double};
    padding-right: ${(props): string => props.theme.unit.double};
    padding-top: ${(props): string => props.theme.unit.quadriple};
    padding-bottom: ${(props): string => props.theme.unit.quadriple};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-family: Roboto;
      text-transform: uppercase;
      font-size: ${(props): string => props.theme.fontSizes.weryBig};
      font-weight: ${(props): string => props.theme.fontWeights.middle};
      color: ${(props): string => props.theme.colors.fontLight};
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      &::after, &::before{
        display: inline-block;
        content: '';
        height: 1px;
        width: 64px;
        background: #DDDDDD;

        @media ${device.tablet} {
          width: 144px
        }
      }

      &::after {
        margin: 0 0 0 25px;

        @media ${device.tablet} {
          margin: 0 0 0 35px;
        }
      }

      &::before {
        margin: 0 25px 0 0;

        @media ${device.tablet} {
          margin: 0 35px 0 0;
        }
      }
    }
  }
`
