import styled from 'styled-components'

function ExclamationIcon() {
  return (
    <>
      <Exclamation>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="feather feather-alert-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </Exclamation>
    </>
  )
}

export default ExclamationIcon

const Exclamation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .feather-alert-circle {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`
