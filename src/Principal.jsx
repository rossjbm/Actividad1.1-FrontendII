import { useState, useEffect } from "react";
import Libros from "./Libros.json"
import Search from "./Search.jsx"

function Principal() { 
    const [book, setBook] = useState(Libros); 

    useEffect(() => {
        localStorage.setItem('book', JSON.stringify(book));
    }, [book]);

    return (<>
        <Search book={book} setBook={setBook} />
    </>)
}

export default Principal