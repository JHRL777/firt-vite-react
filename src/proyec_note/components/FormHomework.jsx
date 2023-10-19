import { e } from 'mathjs'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import '../Styles/homwork-form-.css'

function FormHomework(props) {

  const [input, setinput] = useState('')

  const handle = e =>{
    setinput(e.target.value)
   
  }
 
function  event(e){
  e.preventDefault();
  const newTask = {
    id: uuidv4(),
    texto: input,
    completado: false
  }

  props.onSubmit(newTask)
  
} 






  return (
    <form className="homework-form"  action=""
    onSubmit={event}>
        <input 
            className="homework-input" 
            type="text" 
            name="text" 
            placeholder="Escribir una tarea"
            onChange={handle}
        />
        <button  
        className="homework-boton"
        >
         Agregar tarea
        </button>
    </form>
   
  )
}

export default FormHomework
