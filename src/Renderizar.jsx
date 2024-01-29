import { ButtonEdit } from "./Edit";

export function Renderizar({resultado , book , setBook}) {

    console.log(typeof resultado);
    console.log(resultado);

    if (!resultado || resultado.length === 0) {
        return (<p>No Se Encontraron Resultados</p>)
    } else {
        return (<div className="p-5 grid grid-cols-3 gap-10 px-10">
            {resultado.map((libro, i) => (
                <section key={i} className="bg-beige-200 rounded-lg flex flex-col justify-between gap-5">
                    <div className="flex justify-between items-center px-5 pt-5">
                        <p className="text-base font-numeros">{libro.serial}</p>
                        <div className="flex gap-3">
                            <ButtonEdit book={book} setBook={setBook} />
                            <button className=" rounded-full bg-button-200 p-1 flex items-center hover:outline-dashed hover:outline-2 hover:outline-button-200 active:bg-beige-100"><span class="material-symbols-outlined">delete</span></button>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start px-5">
                        <div className=" w-4/12 min-h-40 flex items-center">
                            <img src={libro.img} className="w-full border-2 border-beige-800"></img>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h2 className="text-xl font-textos">{libro.titulo}</h2>
                            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">  {libro.generos.map((g, index) => (<p key={index} className="font-numeros bg-beige-100 border border-beige-800 p-1 text-xs">{g}</p>))} </div>
                            <p className="text-sm font-textos">{libro.autor}</p>
                            <p className="text-sm font-textos">{libro.editorial} <span className="font-numeros">- {libro.ano}</span></p>
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
