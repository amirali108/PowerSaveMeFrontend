import styled from 'styled-components'

import HouseIcon from './HouseIcon'
import DropDown from './DropDown'
import Connected from './Connected'

function SelectHome() {
  return (
    <>
      <Home>
        <HouseIcon />
        <DropDown />
        <Connected />
      </Home>
    </>
  )
}

export default SelectHome

const Home = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 5px;


`
