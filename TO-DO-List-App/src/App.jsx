import React,{useState} from 'react'

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
        className='py-2 px-4 bg-green-500 rounded-md text-white' 
        >Add Task</button>
        </div>  
        <div className='max-h-[400px] w-[700px] bg-red-400 overflow-scroll'>
          <section className='overflow-auto px-5'>
           <ul>
            {InputItem.map((value,index) => (
              <div className='flex justify-between'>
              <li key={index}>{value}</li>
              <div>
                
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