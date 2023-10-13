import styled from 'styled-components'

function SavingsEnergyLine() {
  return (
    <>
      <Energy>
        <div className="solar-line"></div>
        <div className="text-wrapper">
          <p className="solar">Solar Power</p>
          <p className="solar solar-kwh">1,523 kWh</p>
        </div>
      </Energy>
    </>
  )
}

export default SavingsEnergyLine

const Energy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 135px;
  margin: 10px 0 10px 0;


  .text-wrapper {
    margin: 0 8px;
  }

  p.solar {
    font-size: 14px;
    margin-bottom: 5px;
  }

  p.solar-kwh {
    font-weight: 800;
    font-size: 12px;
  }

  .solar-line {
    height: 4px;
    width: 30px;
    background-color: #AFADF3;
    border-radius: 5px;
  }
`
