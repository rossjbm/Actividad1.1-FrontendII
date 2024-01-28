
export function Renderizar({resultado}) {

    console.log(typeof resultado);
    console.log(resultado);

    if (!resultado || resultado.length === 0) {
        return (<p>No Se Encontraron Resultados</p>)
    } else {
        return (<>
            {resultado.map((libro, i) => (
                <section key={i}>
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
                        <div>
                            <h2>{libro.titulo}</h2>
                            <div>generos</div>
                            <p>{libro.autor}</p>
                            <p>{libro.editorial} <span>{libro.ano}</span></p>
                        </div>
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
        </>)
    }
}