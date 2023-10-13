import styled from 'styled-components'

//This component is going to change color when the house is connected.
function Connected() {
  return (
    <>
      <Connect>Connected</Connect>
    </>
  )
}

export default Connected

const Connect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 12px;
  margin-left: 10px;
`
