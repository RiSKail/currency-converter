import styled from 'styled-components'

export default styled.div`
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.unit.single};
  padding: 36px;
  width: 90%;

  .leaflet-container {
    height: 500px;
    width: 100%;
  }

  .leaflet-interactive{
    stroke-width: 1;
  }
`
