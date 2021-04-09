import styled from 'styled-components'
import theme from '@/theme'

export const MapBlockStyle = styled.div`
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
      border: 2px solid  ${theme.colors.backgroundDark};
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
          
          &::after, &::before {
            width: 30px;
          }

          &::before {
            margin: 0 15px 0 0;
          }

          &::after {
            margin: 0 0 0 15px;
          }
        }
      }
    }
`

export const SetMapStyle = styled.div`
  position: absolute;
  z-index: 9999;
  margin: 10px 0 0 0;
`
