import styled from 'styled-components'

export const LeafletMapContainer = styled.div`
  width: 100%;

  .leaflet-container {
    height: 510px;
    width: 100%;
  }

  .leaflet-interactive{
    stroke-width: 1;
    transition: 0.3s;
  }

  .leaflet-popup-content-wrapper, .leaflet-popup-tip {
    background: ${(props): string => props.theme.colors.mapPopup};
  }

  .leaflet-popup-tip-container {
    width: 65px;
    height: 30px;
    margin-left: -33px;
  }
`
