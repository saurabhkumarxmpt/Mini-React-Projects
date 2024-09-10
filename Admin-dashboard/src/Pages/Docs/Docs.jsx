import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Docs=()=>{
    return(
        <div>
           <div className=" flex w-[1060px] justify-between items-center">
            <div>
                <h1 className="text-2xl">My Docs</h1>
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
                <option value="volvo">All</option>
                <option value="saab">Text file</option>
                <option value="mercedes">Photos</option>
                <option value="audi">Zip file</option>
                </select>
            </div>
            <div className='mt-4'>
            <Button variant="contained">Upload</Button>
            </div>
            </div>
           </div>
           <div className='flex w-[1060px] flex-wrap'>
            <div>h1</div>
           </div>
        </div>
    )
}

export default Docs