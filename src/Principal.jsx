import { useState, useEffect } from "react";
import Libros from "./Libros.json"
import Search from "./Search.jsx"

function Principal() { //AUN NO ESTA LISTO, este seccion es para actualizar los libros actuales en el localstorage
    const [book, setBook] = useState(Libros); //dentro del array colocar Libros para que guarde los libros

    useEffect(() => {
        localStorage.setItem('book', JSON.stringify(book));
    }, [book]);

    return (<>
        <Search book={book} setBook={setBook} />
    </>)
}

export default Principal