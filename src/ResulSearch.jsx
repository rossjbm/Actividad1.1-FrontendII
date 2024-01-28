
export async function ResulSearch(valor) {
    var todos = JSON.parse(localStorage.getItem('book'));

    var respuesta = todos.filter(libro => libro.titulo.toLowerCase().startsWith(valor.toLowerCase()))

    console.log(respuesta)

    return respuesta
}