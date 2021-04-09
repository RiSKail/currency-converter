import styled from 'styled-components'

export const YandexMapContainer = styled.div`
  width: 100%;
  height: 100%;

  .ymaps-2-1-78-balloon {
    border-radius: ${(props): string => props.theme.unit.half};
    box-shadow: 0 3px 14px rgb(0 0 0 / 40%);
  }

  .ymaps-2-1-78-balloon, 
  .ymaps-2-1-78-balloon__content, 
  .ymaps-2-1-78-balloon__tail, 
  .ymaps-2-1-78-balloon__tail::after {
    background: ${(props): string => props.theme.colors.mapPopup};
  }
`
