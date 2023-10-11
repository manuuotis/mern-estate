import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import About from './pages/About'
import SignIn from './pages/Signin'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sign-in" element={<SignIn />}/>
    <Route path="/sign-up" element={<SignUp />}/>
    <Route path="/about" element={<About />}/>
  </Routes>
  </BrowserRouter>
}
