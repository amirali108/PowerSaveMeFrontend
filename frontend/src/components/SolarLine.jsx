import styled from 'styled-components'

function SolarLine() {
  return (
    <>
      <Solar>
        <p className="solar">Solar Energy kWh</p>
        <div className="solar-line"></div>
      </Solar>
    </>
  )
}

export default SolarLine

const Solar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;

  p.solar {
    font-size: 12px;
  }

  .solar-line {
    height: 4px;
    width: 30px;
    background-color: black;
    border-radius: 5px;
    margin-left: 5px;
  }
`
