import styled from "styled-components"

function SolarLine() {
  return (
    <>
    <Solar>
<p>Energy Grid kWh</p>
<div className="solar-line"></div>
    </Solar>
    </>
  )
}

export default SolarLine

const Solar = styled.div`
p {
  font-size: 12px;
}

.solar-line {
height: 3px;
width: 10px;
background-color: black;
border-radius: 5px;
}
`
