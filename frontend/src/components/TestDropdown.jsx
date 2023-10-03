// import styled from 'styled-components'
import Select from 'react-select'

function TestDropdown() {
  const options = [
    { label: 'House 1', value: 'house1' },
    { label: 'House 2', value: 'house2' }
  ]

  return (
    <>
      <Select options={options} />
    </>
  )
}

export default TestDropdown
