function Card({datos}) {
  return (
    <div style={{border: '2px solid black', width:500, marginTop:20, display:'flex', flexDirection:'column'}}>
      <p style={{paddingLeft: 10}}>Hola {datos.nombre}!</p>
      <p style={{paddingLeft: 10}}>Sabemos que tu color favorito es:</p>
      <p style={{backgroundColor: datos.color, color:'white', padding: 5, margin: 20, position:'center'}}>{datos.color}</p>
    </div>
  );
}

export default Card;
