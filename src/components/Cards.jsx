
import '../styles/styles-comp.css'
import {Array} from '../components/data/Array'

function Cards() {
    
  return (
    
   <>
        {Array.map((aray, index) => {
            
            return (
                <div className="contenedor" key={index}>
                    <div className="contenedor-img">
                        <img src={aray.img} alt="usarRobot" />
                    </div>
                    <div className="detalles-user">
                        <h2>{aray.user}</h2>
                        <h5>{aray.Area}</h5>
                        <p>{aray.Description}</p>
                     </div> 
                </div>
                )
        })}

    </> 
    
    
    
  )
}

export default Cards
