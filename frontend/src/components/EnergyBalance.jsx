import styled from 'styled-components'
import GridLine from './GridLine'
import SolarLine from './SolarLine'
import BalanceChart from './BalanceChart'
import ExclamationIcon from './ExclamationIcon'

function EnergyBalance() {
  return (
    <>
      <Balance>
        <div className="lines">
          <GridLine />
          <SolarLine />
        </div>
        <div className="header">
          <h1>Energy Balance</h1>
          <ExclamationIcon />
        </div>

        <div className="chart">
          <BalanceChart />
        </div>
      </Balance>
    </>
  )
}

export default EnergyBalance

const Balance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border: 1px solid;
  border-color: #999999;
  border-radius: 20px;
  width: 361px;
  height: 319px;

  ::shadow {
    color: black;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35px;
    /* overflow-y: hidden; */
  }

  .header h1 {
    font-size: 18px;
    font-weight: 400;
    margin: 5px;
  }

  .lines {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 20px;
  }
  .chart {
  }
`
