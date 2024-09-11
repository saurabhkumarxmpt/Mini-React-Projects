import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from './DocsComonent'
import Pagination from '@mui/material/Pagination';
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
           <div className='flex w-full flex-wrap mt-[90px] gap-12 justify-center'>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Card  title='Doc for a form' size='340KB' uploadDate='3 day ago'/>
            <Pagination count={10} variant="outlined" />
           </div>   
        </div>
    )
}

export default Docs