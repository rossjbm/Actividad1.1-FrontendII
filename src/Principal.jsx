import { useState } from "react";
import Libros from "./Libros.json"
import Search from "./Search.jsx"

function Principal() { //AUN NO ESTA LISTO, este seccion es para actualizar los libros actuales en el localstorage
    const [book, setBook] = useState(Libros); //dentro del array colocar Libros para que guarde los libros
    const [resultado, setResultado] = useState([]);
    const [valor, setValor] = useState("");


    var respuesta;
    if (!valor) {
        console.log('no hay valor en el input. muestra todo')
        respuesta = book
    } else {
        // respuesta = resultado  //HAY QUE HACER ESTO ASINCRONO XD
    }



    // console.log(book[0])
    
    // localStorage.setItem('book', JSON.stringify(book)); //descomentar para guardar en localstorage por primera vez

    
    // var todos = localStorage.getItem('book')
    // console.log('esto es storage', todos)


    // console.log(typeof(Libros), Libros);
    // const librosJS = JSON.stringify(Libros);
    // console.log(typeof(librosJS))

    return (<>
        <Search setResultado={setResultado} setValor={setValor} valor={valor} />
        {console.log(respuesta)/* aqui va el renderizado */}
    </>)
}

export default Principal