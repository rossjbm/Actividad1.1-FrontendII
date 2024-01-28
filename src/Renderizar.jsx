var gene;

export function Renderizar({resultado}) {

    console.log(typeof resultado);
    console.log(resultado);

    if (!resultado || resultado.length === 0) {
        return (<p>No Se Encontraron Resultados</p>)
    } else {
        return (<div className="p-5 bg-green-200 grid ">
            {resultado.map((libro, i) => (
                <section key={i} className="bg-beige-200 p-5 rounded-lg">
                    <div>
                        <p>{libro.serial}</p>
                        <div>
                            <button>edit</button>
                            <button>borr</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            imagen
                            {/* va img */}
                        </div>
                        <div>{libro.generos.map(gama => (
                            <p>{gama}</p>
                        ))}</div>
                    </div>
                    <div>
                        <div>
                            <p>Disponibles</p>
                            <p>{libro.unidades}</p>
                        </div>
                        <p>{libro.precio}$</p>
                    </div>
                </section>
            ))}
        </div>)
    }
}
