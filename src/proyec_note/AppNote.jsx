import './Styles/styles-note.css'
import List from './components/List'


function AppNote() {
  return (
    <div className="aplication-talk">
      <div className="logo">
        <h1>JHRL | NOTAS </h1>
      </div>
        <div className='container-list'>
            <h2>My Homework</h2>
           <List/>
        </div>
    </div>
  )
}

export default AppNote
