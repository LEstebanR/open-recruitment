import React from 'react'
import { Select } from '../UI/select'
import { Chart } from 'react-google-charts'
import { filterGraphOptions, appliesData, dataChart } from '../../utils/mockdata'

const chartOptions = {
  legend: { position: 'none' },
  vAxis: { minValue: 0, maxValue: 10, gridlines: { count: 5 } },
  hAxis: {
    format: 'M/d/yy',
    gridlines: { count: 15 },
  },
  chartArea: { width: '95%', height: '80%' },
}

const AppliedGraph = () => {
  const [selectedGraphFilter, setSelectedGraphFilter] = React.useState('last30days')

  return (
    <div className="w-full rounded border">
      <div className="flex items-center border-b py-4">
        <p className="px-4 text-lg font-semibold">Candidates</p>
        <Select
          list={filterGraphOptions}
          selected={selectedGraphFilter}
          onChange={(e) => {
            setSelectedGraphFilter(e)
          }}
        />
      </div>

      <div className="flex items-center justify-center">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={dataChart}
          options={chartOptions}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-4 gap-1 divide-x-2">
        {appliesData.map((apply) => (
          <div className="flex flex-col items-center justify-center" key={apply.id}>
            <p>{apply.type}</p>
            <p className="font-bold">{apply.number}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppliedGraph
