import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom';
import Orders from './Pages/Orders/Orders';
import Docs from './Pages/Docs/Docs';
const App=()=>{
  return(
    <div className='flex w-[100%] '>
    <Sidebar />
    <Navbar />
    <div className=' flex h-auto w-[83%] ml-[17%] bg-slate-100 mt-[60px]   overflow-hidden px-[40px] py-[30px]'>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/docs" element={<Docs />} />
    </Routes>
    </div>
    </div>
  )
}

export default App