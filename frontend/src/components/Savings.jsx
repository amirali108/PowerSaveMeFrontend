import SavingsChart from './SavingsChart'
import SavingsHeader from './SavingsHeader'
import SavingsEnergyLine from './SavingsEnergyLine'
import SavingsSolarLine from './SavingsSolarLine'
import SavingsGridLine from './SavingsGridLine'
import styled from 'styled-components'

function Savings() {
  return (
    <>
      <Save>
        <SavingsHeader />
        <div className='chart'>
          <SavingsChart />
          <div className='savings-line'>
          <SavingsEnergyLine />
          <SavingsSolarLine />
          <SavingsGridLine />
          </div>
        </div>
      </Save>
    </>
  )
}

export default Savings

const Save = styled.div`
  margin-top: 30px;

  .chart {
    display: flex;
    justify-content: space-evenly;
  }

  .savings-line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
