import { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  const [datos, setDatos] = useState({
    nombre: '',
    color: ''
  });

  const [aprobado, setAprobado] = useState(false)
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (datos.nombre.length > 3 && datos.color.startsWith('#') && datos.color.length === 7) {
      setAprobado(true)
      setError(false)
    } else {
      setError(true);
      setAprobado(false)
    }
  };

  return (
    <>
      <h1>Elige un color</h1>
      <form style={{ width: 500, backgroundColor: 'gray', padding: 20, display: 'flex', flexDirection: 'column' }}>
        <input type="text" placeholder="Ingresa tu nombre" style={{ width: 250 }} onChange={(e) => setDatos({ ...datos, nombre: e.target.value})}/>
        <br/>
        <input type="text" placeholder="Ingresa tu color favorito (formato HEX)" style={{ width: 250 }} onChange={(e) => setDatos({ ...datos, color: e.target.value })}/>
        <br/>
        <button type="button" style={{ backgroundColor: 'blue', color: 'white', width: 250 }} onClick={handleSubmit}>Enviar</button>
      </form>
      {error && (
        <p style={{color:'red'}}>Por favor chequea que la información sea correcta</p>
      )}
      {aprobado && <Card datos={datos} />}
    </>
  );
}

export default App;
