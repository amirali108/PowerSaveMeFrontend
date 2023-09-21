import styled from 'styled-components'
import Select from 'react-select'
import Arrow from './ArrowIcon'


function DropDown() {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      contain: { Arrow },
      color: '#000000'
    }),
    input: (provided) => ({
      ...provided,
      color: '#000000',
      fontSize: '12px',
    }),
  }

  const options = [
    { label: 'House 1', value: 'house1' },
    { label: 'House 2', value: 'house2' },
    { label: 'House 3', value: 'house3' }
  ]

  // const CustomArrow = () => <img src={Arrow} alt="Custom Dropdown Icon" />
  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }

  return (
    <>
      <Drop>
        <Select
          options={options}
          styles={customStyles}
          isSearchable={false}
          placeholder={options[0].label}
          components={{ DropdownIndicator: Arrow }}
          // onChange={handleChange}
          // Other props like onChange, value, etc.
        />
      </Drop>
    </>
  )
}

export default DropDown

const Drop = styled.div`
  font-size: 12px;
`
