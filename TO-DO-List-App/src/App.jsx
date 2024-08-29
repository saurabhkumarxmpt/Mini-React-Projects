import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const App= ()=>{

  //define all states
  const [InputValue,setInputValue]=useState('');
  const [InputItem,setInputItem]=useState([]);
  const [isEdit,setIsEdit]=useState(false);
  const [editIndex,setEditIndex]=useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);

  //function for add task
  const addtask=()=>{
    if(InputValue.trim() !== ''){
      setInputItem([...InputItem,InputValue])
      setInputValue('')
    }
  }

  //function for delete task
  const deletetask=(index)=>{
      const updateItem=InputItem.filter((_, i) => i !== index);
      setInputItem(updateItem);
  }

  //function to toggle the edit task
  const editTask=(index)=>{
    setInputValue(InputValue[index]);
    setIsEdit(true);
    setEditIndex(index);
  }

  //function for update the edited task
  const updateTask=()=>{
    const updateItem=InputItem.map((item,index) =>  
    index === editIndex ? InputValue : item  
    );
    setInputItem(updateItem);
    setIsEdit(false);
    setInputValue('');
    setEditIndex(null);
  }

  //function for mark as complete task
  const completeTask=(index)=>{
      if(completedTasks.includes(index)){
        setCompletedTasks(completedTasks,filter((i) => i !== index));
      }
      else{
        setCompletedTasks([...completedTasks,index])
      }
  }


  //retrun all to-do-list
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
        onClick={()=> isEdit ? updateTask() : addtask()}
        className='py-2 px-4 bg-green-500 rounded-md text-white hover:bg-green-400 ' 
        >{isEdit ? "Update Task" : "Add Task"}</button>
        </div>  
        <div className='max-h-[430px] w-[1000px] border rounded overflow-y-scroll mt-8'>
          <section className='overflow-auto px-5 p-1 my-2'>
           <ul className=''>
            {InputItem.map((value,index) => (
              <div className={`flex justify-between border border-blue-400 py-3 my-2 px-4 rounded text-lg ${completedTasks.includes(index) ? 'line-through text-gray-400' : ''}`}
              >
              <li key={index}>{value}</li>
              <div>
                <div className='flex gap-7 items-center h-full cursor-pointer'>
                <FontAwesomeIcon icon={faTrash}  color='red' onClick={()=> deletetask(index)}/>
                <FontAwesomeIcon icon={faPenToSquare}  color='blue' onClick={() => editTask(index)}/>
                <input 
                type="checkbox"
                checked={completedTasks.includes(index)}
                onChange={()=> completeTask(index)}
                />
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