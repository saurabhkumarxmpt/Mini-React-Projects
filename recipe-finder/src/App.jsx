import Homepage from "./pages/HomePage"
import RecipeDetailpage from './pages/RecipeDetailPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/recipe:id' element={<RecipeDetailpage/>} />
      </Routes>
    </Router>
  )
}

export default App