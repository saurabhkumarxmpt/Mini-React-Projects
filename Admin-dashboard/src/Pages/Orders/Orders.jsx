import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles/index.css'
import Data from './TableData/Table'
const Orders=()=>{
    return(
        <div>
        <div className=" flex w-[1060px] justify-between items-center">
            <div>
                <h1 className="text-2xl">My Orders</h1>
            </div>
            <div className='flex gap-6 pr-[10px] items-center'> 
            <div>
            <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <Button variant="outlined" sx={{marginTop:'15px',marginLeft:'20px'}}>Search</Button>
            </div>
            <div className='mt-3'>
                <select name="select" id="name" className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                <option value="All">All</option>
                <option value="this week">This Week</option>
                <option value="This Month">This Month</option>
                <option value="3 Last Month">3 Last Month</option>
                
                </select>
            </div>
            <div className='mt-4'>
            <Button variant="contained">Download CSV</Button>
            </div>
            </div>
           </div>
            <div className='flex w-[1060px] bg-white justify-around text-center my-[40px]  font-semibold orderbox'>
                    <div>All</div>
                    <div>Paid</div>
                    <div>Pending</div>
                    <div>Cancelled</div>
            </div>
            <div>
                <Data />
            </div>
           </div>
    )
}

export default Orders