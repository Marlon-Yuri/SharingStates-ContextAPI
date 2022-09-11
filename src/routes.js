import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import UseContexto from "./pages/UseContexto"
export default function Rotas() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/usecontexto' element={<UseContexto/>}/>
        </Routes>
    </Router>
  )
}
