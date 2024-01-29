
export function ResulSearch(valor, book) {
    // var todos = JSON.parse(localStorage.getItem('book'));

    var respuesta = book.filter(libro => libro.titulo.toLowerCase().startsWith(valor.toLowerCase()))


    return respuesta
}

export function ResulFiltrado(libros, filtro) {

    var respuesta = libros.filter(autorF).filter(editorialF).filter(anoF).filter(generoF)

    function autorF(libro){
        if (filtro.autor){
            console.log(libro.generos.includes(filtro.generos))
            return libro.autor === filtro.autor
        }
        return libro
    }
    function editorialF(libro){
        if (filtro.editorial){
            return libro.editorial === filtro.editorial
        }
        return libro
    }
    function anoF(libro){
        if (filtro.desde && filtro.hasta){
            return libro.ano > filtro.desde && libro.ano < filtro.hasta
        }
        return libro
    }
    function generoF(libro){
        console.log('filtrando generos')
        if (filtro.generos.length > 0){
            return filtro.generos.every(genero => libro.generos.includes(genero));
        }
        return libro;
    }

    // console.log('filtro autor', filtro.editorial)
    return respuesta
}