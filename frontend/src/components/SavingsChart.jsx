import { PieChart, Pie, Cell } from 'recharts'
import styled from 'styled-components'

function SavingsChart() {
    const data = [
        { name: 'Saved Electricity', value: 600 },
        { name: 'Solar Power', value: 300 },
        { name: 'Grid Energy', value: 150 }
    ]

    const COLORS = ['#5e5ce6', '#dfdefa', '#afadf3']

    return (
        <>
            <Chart>
                <PieChart width={170} height={170}>
                    <text
                        className="currency"
                        x={85}
                        y={100}
                        dy={0}
                        textAnchor="middle"
                        fill="#black"
                    >
                        3124 USD
                    </text>
                    <text
                        className="saved"
                        x={85}
                        y={100}
                        dy={25}
                        textAnchor="middle"
                        fill="#black"
                    >
                        Saved
                    </text>
                    <Pie
                        data={data}
                        cx={80}
                        cy={80}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        cornerRadius={10}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </Chart>
        </>
    )
}

export default SavingsChart

const Chart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .recharts-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .recharts-surface {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .recharts-layer {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #000000;
        border-radius: 50px;
    }

    .recharts-pie {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #000000;
        border-radius: 50px;
    }
    .recharts-pie-sector {
        border-radius: 50px;
    }

    .recharts-sector {
        border: 1px solid #c62727;
        border-radius: 50px;
    }

    .currency {
        font-size: 24px;
        font-weight: 800;
    }

    .saved {
        font-size: 16px;
    }
`
