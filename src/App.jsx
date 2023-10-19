import { useState } from 'react'
import Cards from './components/Cards'
import Counter from './components/Counter'
import Calculator from './components/Calculator'
import Prueba from './components/Prueba'
import AppNote from './proyec_note/AppNote'
import './App.css'

function App() {
 
  {/*<Cards/>
      <Counter/>
      <Calculator/>
  <Prueba/> */}

  return (
    <div className='main'>
      <h1>My first Card in React</h1>

        <AppNote/>
    </div>
      
    
  )
}

export default App
