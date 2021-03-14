import styled from 'styled-components'
import { device } from '@/constants/devices'

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px 0 90px 0;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }

  .csv-input {
    outline: none;
    
    &:hover {
      cursor: pointer;
    }
  }
`

export const CSVBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 0 0;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;

    button {
      margin: 0 0 0 30px;

      &:first-child {
        margin: 0 !important;
      }
    }
  }

  button {
    background: transparent;
    border: 1px solid #fff;

    &:first-child {
      margin: 0 0 30px 0;
    }
  }
`
