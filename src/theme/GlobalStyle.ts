import { createGlobalStyle } from 'styled-components'

import { device } from '@/constants/devices'
import { KeyableObj } from '@/types/otherTypes'

import bg from './img/bg.jpg'

interface Props {
  theme: KeyableObj
}

export default createGlobalStyle<Props>`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=DM+Sans:300,400,700&display=swap');
    
  ::-webkit-scrollbar-track {
    background-color: ${(props): string => props.theme.colors.scrollTrack};
  }
    
  ::-webkit-scrollbar-thumb {
    border-radius: ${(props): string => props.theme.unit.half};
    background-color: ${(props): string => props.theme.colors.scrollThumb};

    &:hover{
      background-color: ${(props): string => props.theme.colors.scrollThumbHover};
    }
  }
    
  ::-webkit-resizer{
    background-image: url('');
    background-repeat: no-repeat;
    width: ${(props): string => props.theme.unit.single};
    height: 0px;
  }
    
  ::-webkit-scrollbar{
    width: ${(props): string => props.theme.unit.single};
  }

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
        width: ${(props): string => props.theme.unit.eight};
        background: ${(props): string => props.theme.colors.titleLines};

        @media ${device.tablet} {
          width: 144px
        }
      }

      &::after {
        margin: ${(props): string => `0 0 0 ${props.theme.unit.triple}`};

        @media ${device.tablet} {
          margin: ${(props): string => `0 0 0 ${props.theme.unit.quadriple}`};
        }
      }

      &::before {
        margin: ${(props): string => `0 ${props.theme.unit.triple} 0 0`};
        
        @media ${device.tablet} {
          margin: ${(props): string => `0 ${props.theme.unit.quadriple} 0 0`};
        }
      }
    }
  }
`
