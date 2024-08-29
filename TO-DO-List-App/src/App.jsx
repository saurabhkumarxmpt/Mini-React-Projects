import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const App= ()=>{
  const [InputValue,setInputValue]=useState('');
  const [InputItem,setInputItem]=useState([]);
  
  const addtask=()=>{
    if(InputValue.trim() !== ''){
      setInputItem([...InputItem,InputValue])
      setInputValue('')
    }
  }
  return(
    <div className='flex justify-center'>
      <div className='text-center'>
      <h1 className=' my-10 text-4xl font-semibold text-blue-500'>TO-DO-App</h1>
      <div>
        <input 
        type="text"
        value={InputValue}
        className='outline-0 border border-slate-600 py-2 px-4 w-[370px] rounded  mr-2'
        placeholder='Enter Tasks...'
        onChange={(e)=> setInputValue(e.target.value)}
        />
        <button
        onClick={()=> addtask()}
        className='py-2 px-4 bg-green-500 rounded-md text-white hover:bg-green-400 ' 
        >Add Task</button>
        </div>  
        <div className='max-h-[430px] w-[1000px] border rounded overflow-y-scroll mt-8'>
          <section className='overflow-auto px-5 p-1 my-2'>
           <ul className=''>
            {InputItem.map((value,index) => (
              <div className='flex justify-between border py-3 my-2 px-4 rounded text-lg'>
              <li key={index}>{value}</li>
              <div>
                <div className='flex gap-7 items-center h-full cursor-pointer'>
                <FontAwesomeIcon icon={faTrash}  color='red'/>
                <FontAwesomeIcon icon={faPenToSquare}  color='blue'/>
                <input type="checkbox" name="" id="" />
                </div>
              </div>
              </div>
              ))}
           </ul>
          </section>
        </div>
        </div>
    </div>
  )

}

export default App