import styled from 'styled-components'

function SavingsEnergyLine() {
  return (
    <>
      <Saved>
        <div className="saved-line"></div>
        <div className="text-wrapper">
          <p className="saved">Saved Energy</p>
          <p className="saved saved-kwh">3,124 kWh</p>
        </div>
      </Saved>
    </>
  )
}

export default SavingsEnergyLine

const Saved = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 135px;
  margin: 10px 0 10px 0;


  p.saved {
    font-size: 14px;
    margin-bottom: 5px;
  }

  p.saved-kwh {
    font-weight: 800;
    font-size: 12px;
  }

  .saved-line {
    height: 4px;
    width: 30px;
    background-color: #5e5ce6;
    border-radius: 5px;
  }
`
