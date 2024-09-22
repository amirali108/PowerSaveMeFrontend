import { useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import Arrow from './ArrowIcon'

function DropDown() {
  //Data should be coming from database
  const options = [
    { label: 'House 1', value: 'house1' },
    { label: 'House 2', value: 'house2' }
  ]

  const [selected, setSelected] = useState(options[0].label)

  const handleChange = (selectedOption) => {
    setSelected(selectedOption)
  }

  //customStyles for Dropdown since using React-Select.
  //The blue outline when active needs to be removed.
  const customStyles = {
    control: (provided) => ({
      ...provided,
      fontSize: '12px',
      border: 'none',
      padding: '0',
      margin: '0'
    }),
    container: (provided) => ({
      ...provided,

      padding: '0',
      margin: '0',
      zIndex: '9999',
      backgroundColor: '#ffffff'
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#000000'
    }),
    input: (provided) => ({
      ...provided,
      color: '#000000',
      fontSize: '12px'
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: '12px',
      margin: '0',
      border: 'none',
      boxShadow: 'none'
    }),
    menuList: (provided) => ({
      ...provided,

      backgroundColor: '#ffffff'
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '5px',
      color: state.isSelected ? '#000000' : '#000000',
      backgroundColor: state.isSelected ? '#a0a0a0' : '#ffffff'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#000000'
    })
  }

  return (
    <>
      <Drop>
        <Select
          className="drop"
          options={options}
          styles={customStyles}
          isSearchable={false}
          placeholder={options[0].label}
          components={{ DropdownIndicator: Arrow }}
          onChange={handleChange}
        />
        <div className="house">
          <p>{selected.label}</p>
        </div>
      </Drop>
    </>
  )
}

export default DropDown

const Drop = styled.div`
  display: flex;
  height: auto;
  z-index: 10000;

  .drop::focus {
    border-color: grey !important;
  }

  .house {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }
`
