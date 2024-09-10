import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import '../../Components/styles/sidebar.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { BarChart } from '@mui/x-charts/BarChart';
import Divider from '@mui/material/Divider';
export default function CardOne() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  ' ',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const barUdata = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const varvData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const barlabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

  return (
    <div>
        <div>
            <h1 className='text-3xl'>Overview</h1>
            <div className='main-container'>
                <div>
                  <p className='text-[15px] font-semibold text-slate-400'>TOTAL SALES</p>
                  <p className='text-[30px]'>$ 4,564</p>
                  <p><ArrowDropUpIcon />20%</p>
                </div>
                <div>
                <p className='text-[15px] font-semibold text-slate-400'>EXPENSES</p>
                  <p className='text-[30px]'>$ 1,231</p>
                  <p><ArrowDropDownIcon />4%</p>
                </div>
                <div>
                <p className='text-[15px] font-semibold text-slate-400'>PROJECTS</p>
                  <p className='text-[30px]'>16</p>
                  <p>open</p>
                </div>
                <div>
                <p className='text-[15px] font-semibold text-slate-400'>INVOICES</p>
                  <p className='text-[30px]'>7</p>
                  <p>new</p>
                </div>
            </div>
        </div>
        <div className='chart mt-8 gap-12'>
        <div>
          <div className='py-5 px-8 font-semibold fonrt'>
            <p>SALES CHART</p>
          </div>
          <Divider />
        <LineChart
    width={500}
    height={300}
    series={[
      { data: pData, label: 'pv' },
      { data: uData, label: 'uv' },
    ]}
    xAxis={[{ scaleType: 'point', data: xLabels }]}
  />
        </div>
        <div>
        <BarChart
      width={500}
      height={300}
      series={[
        { data: varvData, label: 'pv', id: 'pvId' },
        { data: barUdata, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ data: barlabels, scaleType: 'band' }]}
    />
        </div>
        </div>
    </div>
  )
}
