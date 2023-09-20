import styled from 'styled-components'

function HomeIcon() {
  return (
    <>
      <Home>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="feather feather-home"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <p>HOME</p>
      </Home>
    </>
  )
}

export default HomeIcon

const Home = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.feather-home {
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
