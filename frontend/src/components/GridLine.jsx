import styled from 'styled-components'

function GridLine() {
  return (
    <>
      <Grid>
        <p className="grid">Grid Energy kWh</p>
        <div className="grid-line"></div>
      </Grid>
    </>
  )
}

export default GridLine

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;

  p.grid {
    font-size: 12px;
  }

  .grid-line {
    height: 4px;
    width: 30px;
    background-color: #7ac813;
    border-radius: 5px;
    margin-left: 10px;
  }
`
