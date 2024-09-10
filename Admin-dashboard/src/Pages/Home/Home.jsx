import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import '../../Components/styles/sidebar.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { BarChart } from '@mui/x-charts/BarChart';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Lasttab from './MoreTab';
export default function CardOne() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  ' ',
  'Day 1',
  'Day 2',
  'Day 3',
  'Day 4',
  'Day 5',
  'Day 6',
];

const barUdata = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const varvData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const barlabels = [
  'Day 1',
  'Day 2',
  'Day 3',
  'Day 4',
  'Day 5',
  'Day 6',
  'Day 7',
];

const Progess=({
  title='make a website for me',
  proessValue=30,
})=>{
  return(
    <div>
    <div className='px-9 py-1 '> 
      <p className='py-2 font-semibold text-slate-500'>{title}</p>
      <LinearProgress
       variant="determinate" 
       value={proessValue}
       sx={{width:'380px', borderRadius:5, paddingBottom:1, marginBottom:1}}
       />
      <ArrowRightIcon
      sx={{float:'right', marginTop:'-35px'}}
      />
    </div>
    <Divider />
    </div>
  )
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Google.com', 159, 56),
  createData('Microsoft.com', 237, 98),
  createData('github.com', 262, 76),
  createData('linkdin.com', 305, 8),
  createData('stackoverflow.com', 67,8),
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
      { data: pData, label: 'Gross Sale' },
      { data: uData, label: 'Low Sale' },
    ]}
    xAxis={[{ scaleType: 'point', data: xLabels }]}
  />
        </div>
        <div>
        <div className='py-5 px-8 font-semibold fonrt'>
            <p>EXPENSES CHART</p>
          </div>
          <Divider />
        <BarChart
      width={500}
      height={300}
      series={[
        { data: varvData, label: 'Total Expenses', id: 'pvId' },
        { data: barUdata, label: 'Gross Expenses', id: 'uvId' },
      ]}
      xAxis={[{ data: barlabels, scaleType: 'band' }]}
    />
        </div>
        <div>
        <div className='py-5 px-8 font-semibold fonrt'>
            <p>Projects Progess</p>
          </div>
          <Divider />
          <Link to='#'><Progess /></Link>
          <Link to='#'><Progess title='simple website for a clint' proessValue={56} /></Link>
          <Link to='#'><Progess  title='logo for a company' proessValue={89}/></Link>
          <Link to='#'><Progess /></Link>
        </div>
        <div>
        <div className='py-5 px-8 font-semibold '>
            <p>State List</p>
          </div>
          <Divider />
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead sx={{paddingTop:4}}>
          <TableRow >
            <TableCell sx={{fontWeight:'bold'}}>Source</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Views</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Today</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
        <div className='container'>
          <Lasttab title='Invoices' contant='Lorem Ipsum is simply dummy text of the printing and typesetting industry'/>
          <Lasttab title='Bill' contant='Lorem Ipsum is simply dummy text of the printing and typesetting industry'/>
          <Lasttab title='Create' contant='Lorem Ipsum is simply dummy text of the printing and typesetting industry'/>
       
        </div>
    </div>
  )
}
