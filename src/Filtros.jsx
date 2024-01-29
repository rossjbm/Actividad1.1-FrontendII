import { useState } from "react"

const autores = ["Agatha Christie", "Colleen Hoover","Dot Hutchison", "Elisabet Benavent", "Lorena Fuentes", "Marissa Meyer", "Nikki St. Crowe", "Neil Gaiman", "Rebecca Yarros", "R.F. Kuang", "Stephanie Graber", "Stephen King"]
const editoriales = ["Anagrama", "Cátedra","Penguin Libros", "Planeta", "Montena", "Suma", "Bloomsbury"]

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

        <button onClick={()=> {formActivo(activo, setActivo); console.log(activo)}} className="hover:bg-beige-200 border-r border-beige-800 m-0 px-3 w-full h-full"><span style={{fontSize:"2.5em"}} class="material-symbols-outlined">tune</span></button>

        <div>
            <div>
                <button onClick={()=> {formActivo(activo, setActivo); console.log(activo)}}>x</button>
                <p>Filtro</p>
            </div>
            <form>
                <label>
                    Autor
                    <input list="autorList" type="text" value={autor} name="autor" onChange={handleChange}></input>
                </label>
                <datalist id="autorList">
                    {autores.map((a, i) => (<option value={a} key={i} > {a} </option>) )}
                </datalist>

                <label>
                    Editorial
                    <input list="editorialList" type="text" value={editorial} name="editorial" onChange={handleChange}></input>
                </label>
                <datalist id="editorialList">
                    {editoriales.map((e, i) => (<option value={e} key={i} > {e} </option>) )}
                </datalist>

                <label>
                    Año
                    <input type="number" value={desde} name="desde" placeholder="Desde..." onChange={handleChange}></input>
                    <input type="number" value={hasta} name="hasta" placeholder="Hasta..." onChange={handleChange}></input>
                </label>

                <div>
                    Géneros
                    <label>
                        <input type="checkbox" name="generos" value="romance" onChange={handleChange} checked={generos.includes("romance")} ></input>
                        romance
                    </label>
                    <label>
                        <input type="checkbox" name="generos" value="fantasía" onChange={handleChange} checked={generos.includes("fantasía")} ></input>
                        fantasía
                    </label>
                    <label>
                        <input type="checkbox" name="generos" value="comedia" onChange={handleChange} checked={generos.includes("comedia")} ></input>
                        comedia
                    </label>
                </div>

                <div>
                    <button onClick={(evento) => Aplicar(evento, setFiltro, filtro, autor, editorial, desde, hasta, generos, setFiltrado )}>Aplicar</button>
                    <button onClick={(evento)=>Quitar(evento, setFiltro, setAutor, setEditorial, setDesde, setHasta, setGeneros, setFiltrado)}>Quitar</button>
                </div>
            </form>
        </div>
        
    </>)
}

function formActivo(activo, setActivo) {
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
