
function Componente({titulo, children}){
   
    return(
        <div className="contenedor">
            <h1>{titulo}</h1>
            <div>{children}</div>
          
        </div>
    );
}

export default Componente;