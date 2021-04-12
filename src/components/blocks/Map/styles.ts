import styled from 'styled-components'

import theme from '@/theme'

export const MapContainer = styled.div`
  background: ${(props): string => props.theme.colors.backgroundLight};
  border-radius: ${(props): string => props.theme.unit.single};
  padding: 36px;
  width: 90%;
  margin: 45px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MapPopup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 70px;
    border: 2px solid ${theme.colors.backgroundDark};
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;

    li {
      width: 200px;
      text-align: center;
      color: ${theme.colors.fontLightGray};

      h1 {
        font-size: ${theme.fontSizes.middleSmall};

        &::after,
        &::before {
          width: ${theme.unit.quadriple};
        }

        &::before {
          margin: 0 ${theme.unit.double} 0 0;
        }

        &::after {
          margin: 0 0 0 ${theme.unit.double};
        }
      }
    }
  }
`

export const SelectContainer = styled.div`
  position: absolute;
  z-index: 9999;
  margin: ${(props): string => `${props.theme.unit.single} 0 0 0`};
  opacity: 0.8;
`

export const MapElement = styled.div`
  height: 100%;
`
