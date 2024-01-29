import { useState } from "react"

const autores = ["Agatha Christie", "Colleen Hoover","Dot Hutchison", "Elisabet Benavent", "Lorena Fuentes", "Marissa Meyer", "Nikki St. Crowe", "Neil Gaiman", "Rebecca Yarros", "R.F. Kuang", "Stephanie Graber", "Stephen King"]
const editoriales = ["Anagrama", "Cátedra","Penguin Libros", "Planeta", "Montena", "Suma", "Bloomsbury"]
const todosGeneros = ["sci-fi", "romance","fantasía", "ficción", "terror", "thriller", "historia", "drama", "comedia"]

export function Filtrado({filtro, setFiltro, setFiltrado}) {
    const [activo, setActivo] = useState(false);

    //datos
    const [autor, setAutor] = useState("");
    const [editorial, setEditorial] = useState("");
    const [desde, setDesde] = useState("");
    const [hasta, setHasta] = useState("");
    const [generos, setGeneros] = useState([]);

    console.log(filtro)
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        // console.log(name, value)
        // console.log('filtros:', autor, editorial, desde, hasta, generos)

        switch (name) {
            case "autor":
                setAutor(value);
                break;
            case "editorial":
                setEditorial(value);
                break;
            case "desde":
                setDesde(value);
                break;
            case "hasta":
                setHasta(value);
                break;
            case "generos":
                checked ? setGeneros([...generos, value]) : setGeneros(generos.filter(g => g !== value));
                break;
        }

    };

    return (<>

        <button onClick={(evento)=> {formActivo(evento, activo, setActivo); console.log(activo)}} className="hover:bg-beige-200 border-r border-beige-800 m-0 px-3 w-full h-full"><span style={{fontSize:"2.5em"}} class="material-symbols-outlined">tune</span></button>

        <div className={activo ? "bg-beige-800 w-full h-full fixed top-0 left-0 flex items-center justify-center bg-opacity-50 transition-opacity duration-300" : "bg-blue-300 hidden"} >
            
            <form className="flex flex-col gap-6 bg-beige-100 border-4 border-beige-800 shadow-xl rounded-xl min-w-96 w-1/2 p-5">
                <div className="flex flex-row justify-between">
                    <button onClick={(evento)=> {formActivo(evento, activo, setActivo); console.log(activo)}}>x</button>
                    <p>Filtro</p>
                    <span></span>
                </div>
                <label className="flex flex-col">
                    <p>Autor</p>
                    <input list="autorList" value={autor} name="autor" onChange={handleChange}></input>
                </label>
                <datalist id="autorList">
                    {autores.map((a, i) => (<option value={a} key={i} > {a} </option>) )}
                </datalist>

                <label className="flex flex-col">
                    <p >Editorial</p>
                    <input list="editorialList" value={editorial} name="editorial" onChange={handleChange}></input>
                </label>
                <datalist id="editorialList">
                    {editoriales.map((e, i) => (<option value={e} key={i} > {e} </option>) )}
                </datalist>

                <label className="flex flex-col">
                    <p>Año</p>
                    <div className="flex flex-row gap-3">
                        <input type="number" value={desde} name="desde" placeholder="Desde..." onChange={handleChange} className="w-2/5"></input>
                        <input type="number" value={hasta} name="hasta" placeholder="Hasta..." onChange={handleChange} className="w-2/5"></input>
                    </div>
                </label>

                <div className="flex flex-col">
                    <p>Géneros</p>
                    {todosGeneros.map((g, i) => ( 
                        <label className=""> 
                            <input type="checkbox" name="generos" value={g} onChange={handleChange} checked={generos.includes(g)} ></input> 
                            {g} 
                        </label> 
                    ))}
                </div>

                <div className="flex flex-row justify-around">
                    <button onClick={(evento) => Aplicar(evento, setFiltro, filtro, autor, editorial, desde, hasta, generos, setFiltrado )}>Aplicar</button>
                    <button onClick={(evento)=>Quitar(evento, setFiltro, setAutor, setEditorial, setDesde, setHasta, setGeneros, setFiltrado)}>Quitar</button>
                </div>
            </form>
        </div>
        
    </>)
}

function formActivo(evento, activo, setActivo) {
    evento.preventDefault();
    !activo ? setActivo(true) : setActivo(false)
}

function Aplicar(evento, setFiltro, filtro, autor, editorial, desde, hasta, generos, setFiltrado ) {
    evento.preventDefault();
    setFiltro({autor:autor, editorial:editorial, desde:desde, hasta:hasta, generos:generos})
    setFiltrado(true)
    console.log(filtro)
}

function Quitar(evento, setFiltro, setAutor, setEditorial, setDesde, setHasta, setGeneros, setFiltrado) {
    //limpiar los estados
    evento.preventDefault();
    setFiltro({autor:"", editorial:"", desde:"", hasta:"", generos:[]})
    setAutor("")
    setEditorial("")
    setDesde("")
    setHasta("")
    setGeneros([])
    setFiltrado(false)
}
