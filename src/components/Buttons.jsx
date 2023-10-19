

export  function Buttons({name, esBotonClic, funcionClic}) {
    

    
  return (
    <div>
      <button className={esBotonClic ? 'Incio': 'reinicio'}
      onClick={funcionClic}>
        {name}
      </button>
    </div>
  )
}

