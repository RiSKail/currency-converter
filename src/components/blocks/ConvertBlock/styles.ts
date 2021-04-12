import styled from 'styled-components'

import { device } from '@/constants/devices'

export default styled.div`
  color: ${(props): string => props.theme.colors.font};
  background: ${(props): string => props.theme.colors.backgroundLight};
  border-radius: ${(props): string => props.theme.unit.single};
  padding: 48px;
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

  input,
  select,
  .selectBtn {
    box-shadow: ${(props): string => props.theme.colors.boxShadow};
    border-radius: ${(props): string => props.theme.unit.half};
    border: none;
    outline: none;
    padding: 14px;
  }

  .selectBtn {
    height: 45px;
    background: ${(props): string => props.theme.colors.white};
  }

  .select {
    margin: ${(props): string => `0 0 ${props.theme.unit.triple} 0`};

    ul {
      border: none;
      outline: none;
    }
  }
`
