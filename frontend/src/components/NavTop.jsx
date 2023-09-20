import { styled } from 'styled-components'
import PlusButton from './PlusButton'
import Logo from '../assets/logo/cropped-800x800-logo.png'
import MoonLogo from './MoonLogo'

function NavTop() {
  return (
    <>
      <NavTopWrapper>
        <div className='left-wrapper'>
        <div className='psm-logo'>
          <img src={Logo} alt="Power save me logo" />
        </div>
        <div>
          <h1>Ecosystem Home</h1>
        </div>
        <div className='plus-button'>
          <PlusButton />
        </div>
        </div>
        <div className='moon-logo'>
          <MoonLogo />
        </div>
      </NavTopWrapper>
    </>
  )
}

export default NavTop

const NavTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;

  .left-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .psm-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-left: 6px;
    margin-right: 6px;
    font-size: 20px;
    font-weight: 500;
  }

  .plus.button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .moon-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  img {
    height: 30px;
    width: 30px;
  }
`
