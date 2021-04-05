import styled from 'styled-components'
import { device } from '@/constants/devices'

export default styled.div`
  color: ${(props): string => props.theme.colors.font};
  background: ${(props): string => props.theme.colors.backgroundLight};
  border-radius: ${(props): string => props.theme.unit.single};
  padding: 46px;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  align-items: center;

  @media ${device.mobileL} {
    min-width: 300px;
  }

  .selectBtn {
    height: 45px;
    background: ${(props): string => props.theme.colors.fontLight};
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input, select, .selectBtn  {
      box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
      border-radius: ${(props): string => props.theme.unit.half};
      border: none;
      outline: none;
      padding: ${(props): string => props.theme.unit.double};
      margin: 0 0 20px 0;
      width: 100%;
    }

    .red-border {
      border: 2px solid ${(props): string => props.theme.colors.error};
    }

    button {
      width: 110%;
    }
  }

  .btn-switch{
    color: ${(props): string => props.theme.colors.fontBlue};

    &:hover {
      color: ${(props): string => props.theme.colors.fontBlueLight};
      cursor: pointer;
    }
  }

  p {
      color:${(props): string => props.theme.colors.fontLight};
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 105%;
      text-align: center;

      a {
        text-decoration: none;
      }
    }
`
