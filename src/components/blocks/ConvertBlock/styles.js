import styled from 'styled-components'

export default styled.div`
  color: ${props => props.theme.colors.font};
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.unit.single};
  padding: 46px;
  display: flex;
  flex-direction: column;
  margin: 0 46px;
  min-width: 300px;

  input, select {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
    border-radius: ${props => props.theme.unit.half};
    border: none;
    outline: none;
    padding: 14px;
  }

  select {
    margin: 0 0 27px 0;
  }
`
