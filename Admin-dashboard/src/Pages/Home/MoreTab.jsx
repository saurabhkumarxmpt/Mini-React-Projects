import '../../Components/styles/sidebar.css'
import ReceiptIcon from '@mui/icons-material/Receipt';
import Button from '@mui/material/Button';
const MoreTab=(
    {
        title='no title',
        contant='not providead'
    }
)=>{
    return(
            <div>
            <div className='flex gap-7 py-4 px-10 text-[23px]'>
            <p className='text-blue-600'><ReceiptIcon /></p>
            <p>{title}</p>
            </div>
            <p className='px-10 pt-3 text-slate-500'>{contant}</p>
            <div className='pt-7 pl-8'>
            <Button variant="outlined">Create New</Button>
            </div>
            </div>
    )
}

export default MoreTab