import React,{useState} from 'react'

const App= ()=>{
  const [InputValue,setInputValue]=useState('');
  const [InputItem,setInputItem]=useState([]);
  
  return(
    <div className='flex justify-center'>
      <div>
      <h1 className=' my-10 text-4xl font-semibold text-blue-500'>TO-DO-App</h1>
      <div>
        <input 
        type="text"
        value={InputValue}
        className='outline-0 border border-slate-600 py-2 px-4 w-[370px] rounded -ml-[100px] mr-2'
        placeholder='Enter Tasks...'
        onChange={(e)=> setInputValue(e.target.value)}
        />
        <button
        className='py-2 px-4 bg-green-500 rounded-md text-white' 
        >Add Task</button>
        </div>
        <p>{InputValue}</p>
        </div>
    </div>
  )

}

export default App