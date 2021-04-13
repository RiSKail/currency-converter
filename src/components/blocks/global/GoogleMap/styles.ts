import styled from 'styled-components'

export const GoogleMapContainer = styled.div`
  height: 512px;
  width: 100%;

  .infoBox {
    padding: ${(props): string => props.theme.unit.double};
    border-radius: ${(props): string => props.theme.unit.half};
    box-shadow: ${(props): string => props.theme.colors.mapPopupShadow};
    background: ${(props): string => props.theme.colors.mapPopup};
  }
`
