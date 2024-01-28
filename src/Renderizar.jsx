var gene;

export function Renderizar({resultado}) {

    console.log(typeof resultado);
    console.log(resultado);

    if (!resultado || resultado.length === 0) {
        return (<p>No Se Encontraron Resultados</p>)
    } else {
        return (<div className="p-5 bg-green-200 grid grid-cols-3 gap-5 px-10">
            {resultado.map((libro, i) => (
                <section key={i} className="bg-beige-200 p-5 rounded-lg flex flex-col justify-between gap-5">
                    <div className="flex justify-between items-center">
                        <p className="text-base">{libro.serial}</p>
                        <div className="flex gap-3">
                            <button className=" rounded-xl bg-green-100 p-1">edit</button>
                            <button className=" rounded-xl bg-green-100 p-1">borr</button>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className=" bg-blue-300 w-4/12 min-h-40 flex items-center">
                            <img src={libro.img} className="w-full"></img>
                            {console.log(libro.img)}
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h2 className="text-xl">{libro.titulo}</h2>
                            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">{libro.generos.map(g => (<p className=" bg-blue-100 p-1 text-xs">{g}</p>))}</div>
                            <p className="text-sm">{libro.autor}</p>
                            <p className="text-sm">{libro.editorial} <span>- {libro.ano}</span></p>
                        </div>
                    </div>
                    <div className="flex justify-around items-center">
                        <div className="text-center">
                            <p className="text-sm">Disponibles</p>
                            <p className="text-xl">{libro.unidades}</p>
                        </div>
                        <p className="text-2xl">{libro.precio}$</p>
                    </div>
                </section>
            ))}
        </div>)
    }
}
