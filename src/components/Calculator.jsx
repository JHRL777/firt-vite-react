import '../styles/styles-calculator.css';
import { useState } from 'react';
import * as math from 'mathjs';

function Calculator() {
  const [numero, setNumero] = useState('');
  // Utilizamos un estado adicional para el resultado
  const [resultado, setResultado] = useState('');

  function tomaDATOS(e) {
    setNumero(numero + e.target.innerHTML);
  }

  function limpiar() {
    setNumero('');
    setResultado('');
  }

  function calcular() {
    try {
      const evalResult = math.evaluate(numero);
      setResultado(evalResult.toString());
      setNumero(evalResult.toString());
    } catch (error) {
      setResultado('Error');
    }
  }

  return (
    <div className='main-calculator'>
      <input  className='unputCalculater' value={numero} onChange={() => {}} id='input' type='text' />
      <div className='filas'>
        <button className='buttonCalculater' onClick={tomaDATOS}>1</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>2</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>3</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>+</button>
      </div>
      <div className='filas'>
        <button className='buttonCalculater' onClick={tomaDATOS}>4</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>5</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>6</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>-</button>
      </div>
      <div className='filas'>
        <button className='buttonCalculater' onClick={tomaDATOS}>7</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>8</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>9</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>*</button>
      </div>
      <div className='filas'>
        <button className='buttonCalculater' onClick={tomaDATOS}>0</button>
        <button className='buttonCalculater' onClick={limpiar}>C</button>
        <button className='buttonCalculater' onClick={calcular}>=</button>
        <button className='buttonCalculater' onClick={tomaDATOS}>/</button>
      </div>
      <div className='resultado'>
        {/* Mostramos el resultado en el campo de entrada */}
        {resultado}
      </div>
    </div>
  );
}

export default Calculator;