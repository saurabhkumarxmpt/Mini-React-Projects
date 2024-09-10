import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
const App=()=>{
  return(
    <div className='flex'>
    <Sidebar />
    <Navbar />
    </div>
  )
}

export default App