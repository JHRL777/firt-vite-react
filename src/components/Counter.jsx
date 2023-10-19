import {Buttons} from './Buttons'
import {useState} from 'react'
import '../styles/styles-contador.css'

function Counter() {

    const [contador , setContador] = useState(0)
    
  return (
    <div>
        <h1>Contador</h1>
        <p className='number'>{contador}</p>
        <Buttons name='Inicio' esBotonClic={true} 
            funcionClic={()=>setContador (contador+1)}
        />
        <Buttons name='Reiniciar' esBotonClic={false} 
            funcionClic={()=>setContador(0)}
        />
    </div>
  )
}

export default Counter
