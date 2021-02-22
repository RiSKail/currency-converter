import styled from 'styled-components'
import { device } from '../../../constants/devices'

export default styled.div`
  color: ${props => props.theme.colors.font};
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.unit.single};
  padding: 46px;
  display: flex;
  flex-direction: column;
  margin: 46px 0px;
  min-width: 200px;

  @media ${device.laptop} {
    margin: 0 46px;
  }

  @media ${device.mobileL} {
    min-width: 300px;
  }

  input, select, .selectBtn {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
    border-radius: ${props => props.theme.unit.half};
    border: none;
    outline: none;
    padding: 14px;
  }

  .selectBtn {
    height: 45px;
    background: #ffff;
  }

  .select {
    margin: 0 0 20px 0;

    ul {
      border: none;
      outline: none;
    }
  }
`
