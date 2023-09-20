import styled from 'styled-components'
import HomeIcon from './HomeIcon'
import BellIcon from './BellIcon'
import DeviceIcon from './DeviceIcon'
import UserIcon from './UserIcon'
import MenuIcon from './MenuIcon'

function NavBottom() {
  return (
    <>
      <Wrapper>
        <div className="navbar">
          <UserIcon />
          <DeviceIcon />
          <HomeIcon />
          <BellIcon />
          <MenuIcon />
        </div>
      </Wrapper>
    </>
  )
}

export default NavBottom

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding-bottom: 5px;
  padding-top: 5px;
  border: 1px solid #000000;
  border-radius: 50px;

  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: baseline;
  }
`
