import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing'
import VerifyEmail from './pages/verifyEmail'
import OnBoarding from './pages/Onboarding'
import Home from './pages/Home'
import Job from './pages/Job'
import Blog from './pages/Blog'
import PrivateRoute from './components/universal/PrivateRoute'
import AppliedJobs from './pages/Applied'
import SavedJobs from './pages/SavedJobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App text-black">
     <Routes>

     <Route exact path='/' element={<PrivateRoute/>}>
      <Route path='/' element={<Home />} />
      </Route>

      <Route exact path='/job/:jobId' element={<PrivateRoute/>}>
      <Route path="/job/:jobId" element={<Job />} />
      </Route>


      <Route exact path='/boost' element={<PrivateRoute/>}>
      <Route path='/boost' element={<Blog />} />
      </Route>

      <Route exact path='/applied' element={<PrivateRoute/>}>
      <Route path='/applied' element={<AppliedJobs />} />
      </Route>


      <Route exact path='/saved' element={<PrivateRoute/>}>
      <Route path='/saved' element={<SavedJobs />} />
      </Route>


      <Route exact path='/onboarding' element={<PrivateRoute/>}>
      <Route path="/onboarding" element={<OnBoarding />} />
      </Route>


      <Route path="/landing" element={<LandingPage />} />
      <Route path="/verify" element={<VerifyEmail />} />
   
      <Route path="/boost" element={<Blog />} />
      
     </Routes>
    </div>
  )
}

export default App
