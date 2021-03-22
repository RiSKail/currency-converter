import styled from 'styled-components'
import { device } from '@/constants/devices'

interface IProps {
  props?: any
}

export default styled.div < IProps > `
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} {
    align-items: stretch;
    flex-direction: row;
  }
`
