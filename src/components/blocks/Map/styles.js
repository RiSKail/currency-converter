import styled from 'styled-components'

export default styled.div`
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.unit.single};
  padding: 36px;
  width: 90%;
  margin: 45px 0 0 0;

  .leaflet-container {
    height: 500px;
    width: 100%;
  }

  .leaflet-interactive{
    stroke-width: 1;
  }

  .leaflet-popup-content-wrapper, .leaflet-popup-tip {
    background: #41485b;
    color: #fff;
  }

  .leaflet-popup-tip-container {
    width: 65px;
    height: 30px;
    margin-left: -33px;
  }

  .leaflet-popup-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 70px;
      border: 2px solid #DDDDDD;
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

        h1 {
          font-size: 13px;
          
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
  }
`
