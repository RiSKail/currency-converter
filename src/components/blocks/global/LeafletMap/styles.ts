import styled from 'styled-components'

export const LeafletMapContainer = styled.div`
  width: 100%;

  .leaflet-container {
    height: 512px;
    width: 100%;
  }

  .leaflet-interactive {
    stroke-width: 1;
    transition: 0.3s;
  }

  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    background: ${(props): string => props.theme.colors.mapPopup};
  }

  .leaflet-popup-tip-container {
    width: ${(props): string => props.theme.unit.eight};
    height: ${(props): string => props.theme.unit.quadriple};
    margin-left: ${(props): string => `-${props.theme.unit.quadriple}`};
  }
`
