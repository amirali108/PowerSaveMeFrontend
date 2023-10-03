import { useState } from 'react'
import styled from 'styled-components'
import EnergyBalance from './EnergyBalance'
import EnergyBalanceMonth from './EnergyBalanceMonth'
import EnergyBalanceYear from './EnergyBalanceYear'


function TimeNavigation() {
  const [toggleTab, setToggleTab] = useState(1)

  const toggleTabs = (index) => {
    setToggleTab(index)
  }

  return (
    <>
      <TimelineContainer>
      {/* <i className='line'></i> */}
      <div className='time'>
      <div className="tabs">

<div
  className={toggleTab === 1 ? 'tab active-tab' : 'tab'}
  onClick={() => toggleTabs(1)}
>
  <p>Day</p>
  <i
    className={toggleTab === 1 ? 'border active-border' : 'border'}
  ></i>
</div>
<div
  className={toggleTab === 2 ? 'tab active-tab' : 'tab'}
  onClick={() => toggleTabs(2)}
>
  <p>Month</p>
  <i
    className={toggleTab === 2 ? 'border active-border' : 'border'}
  ></i>
</div>
<div
  className={toggleTab === 3 ? 'tab active-tab' : 'tab'}
  onClick={() => toggleTabs(3)}
>
  <p>Year</p>
  <i
    className={toggleTab === 3 ? 'border active-border' : 'border'}
  ></i>
</div>
</div>

<div className="tab-content">
<div
  className={toggleTab === 1 ? 'content active-content' : 'content'}
>
  <EnergyBalance />
</div>
<div
  className={toggleTab === 2 ? 'content active-content' : 'content'}
>
  <EnergyBalanceMonth />
</div>
<div
  className={toggleTab === 3 ? 'content active-content' : 'content'}
>
  <EnergyBalanceYear />
</div>
</div>
      </div>

      </TimelineContainer>
    </>
  )
}

export default TimeNavigation

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;

.time {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}

  .tabs {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 20%;
    z-index: 2;
  }

  /* .line {
  position: relative;
  width: 100%;
  top: 150px;
  height: 2px;
  background: #000000;

} */

  i.border {
    height: 5px;
    width: 70px;
    border-radius: 10px;
    background-color: #000000;
    margin-top: 5px;
  }

  i.active-border {
    background-color: #7ac813;
  }
  .content {
    display: none;
  }

  .active-content {
    display: block;
  }

  p {
    font-size: 14px;
  }
`
