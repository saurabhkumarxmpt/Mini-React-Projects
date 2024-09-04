import { useState } from 'react'
function App() {
  const[color,setcolor]=useState(null);
  return (
    <>
     <div 
     className={` flex justify-center text-4xl mt-14 font-semibold `}
     style={{color:color}}
     >
      <h1>Simple color Picker</h1>
     </div>
     <div className='flex justify-center mx-[120px] h-auto w-1/2 border p-12'>
      <input 
      
      type="color"
      value={color}
      onChange={e => setcolor(e.target.value)}
      className='w-[100px] h-[100px] rounded-lg cursor-pointer p-0 border-0'
      />
     <div className='h-[300px] w-[300px]' style={{backgroundColor:color}}></div>
     </div>
    </>
  )
}

export default App
