import {useState} from 'react'


function Prueba() {

    const [tomar, setTomar] = useState('')

    function agregar (val) {
        setTomar(tomar + val.target.innerHTML)
    }

    function   handleChange(e) {
        setTomar(e.target.value);
      }

    console.log(tomar)

  return (
    <div className='filass'>
      <input value={tomar} onChange={handleChange} type="text" />
      <div className='buttons'>

        <button  className='button' onClick={agregar}>1</button>
        <button className='button' onClick={agregar}>2</button>
        <button className='button'onClick={agregar}>3</button>

      </div>

    </div>
  )
}

export default Prueba
