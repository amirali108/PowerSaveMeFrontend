import styled from 'styled-components'

function MenuIcon() {
  return (
    <>
      <Menu>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <p>MENU</p>
      </Menu>
    </>
  )
}

export default MenuIcon

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .feather-menu {
    width: 30px;
    height: 30px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  p {
    font-size: 12px;
  }
`
