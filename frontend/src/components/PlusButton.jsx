import styled from 'styled-components'
function PlusButton() {
  return (
    <>
      <ButtonWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="feather feather-plus-circle"
        >
          <circle cx="12" cy="12" r="10" stroke="#3A3A3C"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </ButtonWrapper>
    </>
  )
}

export default PlusButton

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  .feather-plus-circle {
    width: 20px;
    height: 20px;
    fill: #3a3a3c;
    color: #000000;
    stroke: #ffffff;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`
