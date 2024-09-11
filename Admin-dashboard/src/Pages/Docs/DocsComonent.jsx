import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import '../../index.css'

const DocComponent = ({
    title = 'no title',
    type = 'file',
    size = '1mb',
    uploadDate = '1 day ago',
    logo = <ArticleTwoToneIcon color="secondary" sx={{ fontSize: '43px' }} />
}) => {
    return (
        <div className="h-[240px] w-[270px] bg-white rounded shadow-md overflow-hidden hover:shadow-lg shadow-slate-200 duration-150">
            <div className="w-full h-[50%] bg-slate-200 cursor-pointer flex justify-center items-center text-[32px] hover:bg-white duration-150">
                {logo}
            </div>
            <div className='pt-[15px] px-[20px]'>
                <h2 className='font-semibold pb-2'>{title}</h2>
                <div className='text-[13px]'>
                <p><span className='text-slate-500'>Type:</span> {type}</p>
                <p><span className='text-slate-500'>Size:</span> {size}</p>
                <p><span className='text-slate-500'>Uploaded:</span> {uploadDate}</p>
                </div>
            </div>
        </div>
    );
}

export default DocComponent;
