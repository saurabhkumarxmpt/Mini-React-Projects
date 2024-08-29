import { useState } from 'react'

function App() {
  const [input, setinput] = useState('');
  const [array,setarray]=useState([]);

    function handleinput(e){
      setinput(e.target.value)
    }
    function handlebutton(){
      if(input.trim() !== ''){
        setarray([...array,input]);
        setinput('')
      }
    }
  return (
    <>
    <input 
    type="text"
    placeholder='enter something'
    value={input}
    className='outline-0 border p-2 my-10 mx-7 rounded-lg'
    onChange={handleinput}
    />
    <button 
    onClick={() =>  handlebutton()}
    className='py-2 px-4 bg-green-400 text-white rounded-md'
    >click here</button>
    {/* {btn ? <p>{input}</p> : "something wronfg"} */}
    <ul className='mt-0 ml-14'>
        {array.map((array, index) => (
          <li 
          key={index}
          className='border max-w-60 mt-5 p-2'
          >{index+1}.  {array}</li>
        ))}
      </ul>
    </>
  )
}

export default App
