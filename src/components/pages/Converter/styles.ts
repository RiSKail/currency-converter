import styled from 'styled-components'
import { device } from '@/constants/devices'

interface IProps {
  props?: any
}

export default styled.div < IProps > `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0 80px 0;
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
  margin: 40px 0 0 0;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;

    button {
      margin: 0 0 0 26px;

      &:first-child {
        margin: 0 !important;
      }
    }
  }

  button {
    background: transparent;
    border: 1px solid ${props => props.theme.colors.fontLight};

    &:first-child {
      margin: 0 0 26px 0;
    }
  }
`
