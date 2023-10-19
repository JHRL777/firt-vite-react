import '../Styles/homework.css'
import { BsJournalMinus } from "react-icons/bs";

function HomeWork({id, texto, complet, completTask , deleateTask}) {
  return (
    <div className={complet ? "container-homework complet":"container-homework"}>
      <div 
      className="text-homework"
       onClick={()=> completTask(id)}>
        {texto}
      </div>
      <div 
      className="homework-icon-container"
      onClick={()=>deleateTask(id)}
      >
        <BsJournalMinus className='homework-icon'/>
      </div>
    </div>
  )
}

export default HomeWork
