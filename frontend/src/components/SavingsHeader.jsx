import styled from 'styled-components'
import ExclamationIcon from './ExclamationIcon'

function SavingsHeader() {
  return (
    <>
      <SavingsH2>
        <h2>Savings</h2>
        <ExclamationIcon />
      </SavingsH2>
    </>
  )
}

export default SavingsHeader

const SavingsH2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin-right: 4px;
  }
`
