import styled from 'styled-components'

function DeviceIcon() {
  return (
    <>
      <Device>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="feather feather-grid"
        >
          <rect x="3.5" y="3.5" width="7" height="7"></rect>
          <rect x="13.5" y="3.5" width="7" height="7"></rect>
          <rect x="13.5" y="13.5" width="7" height="7"></rect>
          <rect x="3.5" y="13.5" width="7" height="7"></rect>
        </svg>
        <p>DEVICES</p>
      </Device>
    </>
  )
}

export default DeviceIcon

const Device = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .feather-grid {
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
