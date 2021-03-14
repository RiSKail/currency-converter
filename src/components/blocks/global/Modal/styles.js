import styled from 'styled-components'

export default styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000087;
  display: flex;
  align-items: center;
  justify-content: center;

  .closebtn {
    margin-left: 15px;
    color: #7b7b7b;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: black;
    }
  }
`

export const ModalContent = styled.div`
  padding: 20px;
  background-color: #ffffff;
  color: black;
  opacity: 1;
  transition: opacity 0.6s;
  margin-bottom: 15px;
  border-radius: 5px;

  input {
    outline: none;
  }
`
