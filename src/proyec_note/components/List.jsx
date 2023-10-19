import  HomeWork from './HomeWork'
import  FormHomework from './FormHomework'
import '../Styles/listTask.css'
import {useState} from 'react'

function List() {


  const [tasks, setTasks] = useState([]);

    console.log(tasks)
 const addTask = task => {
  if(task.texto.trim()){
    task.texto = task.texto.trim()
    const taskUpdate = [task,...tasks]
    setTasks(taskUpdate)
 }
}

  const deleateT = id =>{
    const taskUpdates = tasks.filter(taks => taks.id !== id)
    setTasks(taskUpdates)
  }

  const completTask = id =>{
    const taskUpdates = tasks.map(task =>{
      if(task.id === id ){
        task.complet= !task.complet;

      }
      return task;
    })
    setTasks(taskUpdates)
  }


  return (
    <>
    <FormHomework 
    onSubmit={addTask}
    />
    
    <div className='list-homework-container'>
        {
          tasks.map((task) => 
          <HomeWork
          
          deleateTask={deleateT}
            key={task.id}
            id={task.id}
            texto={task.texto}
            complet={task.complet}
            completTask={completTask}
           />)
        }
    </div>
  </>
  )
}


export default List
