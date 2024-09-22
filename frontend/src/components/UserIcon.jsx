import styled from 'styled-components'

function UserIcon() {
  return (
    <>
      <User>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="feather feather-user"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <p>PROFILE</p>
      </User>
    </>
  )
}

export default UserIcon

const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .feather-user {
    width: 30px;
    height: 30px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  p {
    font-size: 12px;
  }
`
