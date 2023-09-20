import styled from 'styled-components'
function MoonLogo() {
  return (
    <>
      <MoonIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="feather feather-moon"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </MoonIcon>
    </>
  )
}

export default MoonLogo

const MoonIcon = styled.div`
  .feather-moon {
    display: flex;
    width: 24px;
    height: 24px;
    fill: none;
    stroke: Black;
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`
