import styled from 'styled-components'

import HouseIcon from './HouseIcon'
import DropDown from './DropDown'
import Connected from './Connected'

function SelectHome() {
  return (
    <>
      <Home>
        {/* HouseIcon need another SVG. More like the design.  */}
        <HouseIcon />
        <DropDown />
        <Connected />
      </Home>
    </>
  )
}

export default SelectHome

const Home = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 5px;
`
