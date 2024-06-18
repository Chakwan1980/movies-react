
function Componente(props){
    console.log(props);
    return(
        <div>
            <h1>{props.titulo}</h1>
            <div>{props.contenido}</div>
            <li>{props.dia}</li>
            <li>{props.edad}</li>
            <li>{props.ciudad}</li>
          
        </div>
    );
}

export default Componente;