import { useState } from "react";
import Libros from "./Libros.json"
import Search from "./Search.jsx"

function Principal() { //AUN NO ESTA LISTO, este seccion es para actualizar los libros actuales en el localstorage
    const [book, setBook] = useState([]); //dentro del array colocar "Libros" (sin comillas) para que guarde los libros
    // localStorage.setItem('book', JSON.stringify(book)); //descomentar para guardar en localstorage por primera vez

    var todos = localStorage.getItem('book')
    console.log('esto es storage', todos)


    // console.log(typeof(Libros), Libros);
    // const librosJS = JSON.stringify(Libros);
    // console.log(typeof(librosJS))

    return (<>
        <Search/>
    </>)
}

export default Principal