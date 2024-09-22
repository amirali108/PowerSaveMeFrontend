import styled from 'styled-components'

function SavingsGridLine() {
  return (
    <>
      <Grid>
        <div className="grid-line"></div>
        <div className="text-wrapper">
          <p className="grid">Grid Power</p>
          <p className="grid grid-kwh">948 kWh</p>
        </div>
      </Grid>
    </>
  )
}

export default SavingsGridLine

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 135px;
  margin: 10px 0 10px 0;


  .text-wrapper {
    margin: 0 14px;
  }

  p.grid {
    font-size: 14px;
    margin-bottom: 5px;
  }

  p.grid-kwh {
    font-weight: 800;
    font-size: 12px;
  }

  .grid-line {
    height: 4px;
    width: 30px;
    background-color: #dfdefa;
    border-radius: 5px;
  }
`
