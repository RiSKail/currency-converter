import styled from 'styled-components'

export const GoogleMapContainer = styled.div`
  height: 510px;
  width: 100%;

  .infoBox {
    padding: ${(props): string => props.theme.unit.double};
    border-radius: ${(props): string => props.theme.unit.half};
    box-shadow: 0 3px 14px rgb(0 0 0 / 40%);
    background: ${(props): string => props.theme.colors.mapPopup};
  }
`
