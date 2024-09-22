import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
import styled from 'styled-components'

function BalanceChart() {
  //Hard coded data. Needs to be replaced.
  const data = [
    {
      name: '08.00',
      ge: 10,
      se: 5,
      amt: 24
    },
    {
      ge: 15,
      se: 10,
      amt: 22
    },
    {
      ge: 20,
      se: 15,
      amt: 22
    },
    {
      name: '11.00',
      ge: 15,
      se: 13,
      amt: 22
    },
    {
      ge: 10,
      se: 13,
      amt: 22
    },
    {
      ge: 10,
      se: 13,
      amt: 22
    },
    {
      name: '14.00',
      ge: 20,
      se: 18,
      amt: 22
    },
    {
      ge: 15,
      se: 18,
      amt: 22
    },
    {
      ge: 20,
      se: 18,
      amt: 22
    },
    {
      name: '17.00',
      ge: 20,
      se: 15,
      amt: 20
    },
    {
      ge: 20,
      se: 29,
      amt: 20
    },
    {
      ge: 20,
      se: 29,
      amt: 20
    },
    {
      name: '20.00',
      ge: 18,
      se: 20,
      amt: 21
    },
    {
      ge: 18,
      se: 20,
      amt: 21
    },
    {
      ge: 18,
      se: 20,
      amt: 21
    },
    {
      name: '23.00',
      ge: 23,
      se: 15,
      amt: 25
    }
  ]
  return (
    <>
      <Balance>
        <AreaChart
          width={450}
          height={220}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5
          }}
        >
          <defs>
            <linearGradient id="colorGe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7AC813" stopOpacity={0.75} />
              <stop offset="95%" stopColor="#7AC813" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ge"
            stroke="#000000"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorGe)"
          />
          <Area
            type="monotone"
            dataKey="se"
            stroke="#7AC813"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorSe)"
          />
        </AreaChart>
      </Balance>
    </>
  )
}

export default BalanceChart

const Balance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;

  div.recharts-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  svg.recharts-surface {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`
