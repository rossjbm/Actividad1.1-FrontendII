import { ButtonDelete } from "./Delete";
import { ButtonEdit } from "./Edit";

export function Renderizar({resultado , book , setBook, eliminar, setEliminar}) {

    if (!resultado || resultado.length === 0) {
        return (<p className="text-center font-textos text-xl text-beige-800">No Se Encontraron Resultados</p>)
    } else {
        return (<div className="py-5 px-3 grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:px-10">
            {resultado.map((libro, i) => (
                <section key={i} className="bg-beige-200 rounded-lg flex flex-col justify-between sm:gap-5 gap-8">
                    <div className="flex justify-between items-center px-5 pt-5">
                        <p className="text-base font-numeros">{libro.serial}</p>
                        <div className="flex gap-3">
                            <ButtonEdit book={book} setBook={setBook} libro={libro} i={i} />   
                            <ButtonDelete book={book} setBook={setBook} i={i} eliminar={eliminar} setEliminar={setEliminar} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-start px-5 sm:flex-row sm:justify-start">
                        <div className=" w-2/4 min-h-40 flex items-center md:w-4/12 sm:m-0 m-auto">
                            <img src={libro.img} className="w-full h border-2 border-beige-800"></img>
                        </div>
                        <div className="flex flex-col md:gap-y-2 gap-y-3 m-auto sm:m-0">
                            <h2 className="text-xl font-textos text-center sm:text-start">{libro.titulo}</h2>
                            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">  {libro.generos.map((g, index) => (<p key={index} className="font-numeros bg-beige-100 border border-beige-800 p-1 text-xs">{g}</p>))} </div>
                            <p className="text-sm font-textos text-center sm:text-start">{libro.autor}</p>
                            <p className="text-sm font-textos text-center sm:text-start">{libro.editorial} <span className="font-numeros">- {libro.ano}</span></p>
                        </div>
                    </div>
                    <div className="flex justify-around items-center bg-beige-800 rounded-b-lg py-2">
                        <div className="text-center w-1/2 h-full">
                            <p className="text-sm text-white font-numeros">Disponibles</p>
                            <p className="text-xl text-white font-numeros">{libro.unidades}</p>
                        </div>
                        <div className="w-1/2 h-full border-l border-white flex items-center justify-center">
                            <p className="text-2xl text-white font-numeros">{libro.precio}$</p>
                        </div>
                    </div>
                </section>
            ))}
        </div>)
    }
}
