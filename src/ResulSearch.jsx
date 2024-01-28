
export function ResulSearch(valor) {

    var todos = JSON.parse(localStorage.getItem('book'));

    for (var i = 0; i < todos.length; i++) {
        console.log('estamos en for')
        // console.log('estamos en for', typeof(todos))
        // console.log(todos[i].ano)
        // console.log(todos[i].titulo)
    }

    return valor
}