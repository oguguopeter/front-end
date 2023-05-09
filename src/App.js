import React from 'react'
import './App.css'
// import Navbar from './Components/Navbar'
// import Main from './Components/Main'
// import Footer from './Components/Footer'
import Photos from './Components/Photos'
import Users from './Components/Users'

const App = () => {
  return (
    <div className='app'>
      {/* <Navbar />
      <Main />
      <Footer /> */}
      <Photos/>
      <Users/>
    </div>
  )
}

export default App