import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Resources from './Pages/Resources'
import Hackathons from './Pages/Hackathons'
import Organizers from './Pages/Organizers'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Layout from './Components/Layout';
//import Navigbar from './Components/Navigbar'
function App() {
//const [count, setCount] = useState(0)

  return (
    <>
   <Router>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element = {<Hackathons/>}></Route>
        <Route path="/organizers" element={<Organizers/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route  path='/about' element= {<About/>}></Route>
        <Route  path='/contact' element= {<Contact/>}></Route>
          </Route>
          </Routes>
      </Router>
  
    </>
  )
}

export default App
