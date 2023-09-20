import styled from 'styled-components'

function ArrowIcon() {
  return (
    <>
      <Arrow>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </Arrow>
    </>
  )
}

export default ArrowIcon

const Arrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .feather-chevron-down {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: #000000;
    stroke-width: 1px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`
