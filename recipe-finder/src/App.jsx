import React,{useEffect,useState} from "react"
const App=()=>{
  const[button,setbutton]=useState([]);
  
  return(
    <div>
     <input 
     type="text" 
     name="" 
     id="" 
     value={button}
     onChange={(e) => setbutton(e.target.value)}
     />
     <h1></h1>
    </div>
  )
}

export default App