
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoard'
import ContactDetails from './components/ContactDetails'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/details' element={<ContactDetails/>}/>
      </Routes>
    </>
  )
}

export default App
