import {useState, useEffect } from 'react'


import { Outlet, useNavigation } from 'react-router-dom'

//components
import Nav from './component/Nav'
import Footer from './component/Footer'

function App() {
const navigation = useNavigation()


  return (
    <>
      <Nav />
      <main>
        {
          
          navigation.state === 'idle' ?
            <Outlet />
            :
            <div className='loading'></div>
        }
      </main>

      <Footer />
    </>
  )
}

export default App
