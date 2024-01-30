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

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

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

        <button onClick={(evento)=> {formActivo(evento, activo, setActivo); console.log(activo)}} className="hover:bg-beige-200 hover:rounded-l-lg border-r border-beige-800 m-0 px-3 w-full h-full"><span style={{fontSize:"2em"}} class="material-symbols-outlined">tune</span></button>

        <div className={activo ? "bg-beige-800 w-full h-full fixed top-0 left-0 flex items-center justify-center bg-opacity-50 transition-opacity duration-300" : "hidden"} >
            
            <form className="flex flex-col gap-3 sm:gap-6 bg-beige-100 border-4 border-beige-800 shadow-xl rounded-2xl w-11/12 sm:w-3/5 md:w-2/5 p-5">
                <div className="flex flex-row justify-between items-center">
                    <button onClick={(evento)=> {formActivo(evento, activo, setActivo); console.log(activo)}} className="flex items-center hover:bg-beige-200 hover:rounded-full" ><span class="material-symbols-outlined">close</span></button>
                    <p className=" text-2xl font-textos">Filtro</p>
                    <span className="w-6"></span>
                </div>
                <label className="flex flex-col sm:gap-2">
                    <p className=" text-center text-lg font-textos">Autor</p>
                    <input list="autorList" value={autor} name="autor" onChange={handleChange} className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm"></input>
                </label>
                <datalist id="autorList">
                    {autores.map((a, i) => (<option value={a} key={i} > {a} </option>) )}
                </datalist>

                <label className="flex flex-col sm:gap-2">
                    <p className=" text-center text-lg font-textos">Editorial</p>
                    <input list="editorialList" value={editorial} name="editorial" onChange={handleChange} className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm"></input>
                </label>
                <datalist id="editorialList">
                    {editoriales.map((e, i) => (<option value={e} key={i} > {e} </option>) )}
                </datalist>

                <label className="flex flex-col sm:gap-2">
                    <p className=" text-center text-lg font-textos">Año</p>
                    <div className="flex flex-row gap-3 justify-between">
                        <input type="number" value={desde} name="desde" placeholder="Desde..." onChange={handleChange} className="w-1/2 sm:w-2/5 focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm placeholder:font-textos font-numeros"></input>
                        <input type="number" value={hasta} name="hasta" placeholder="Hasta..." onChange={handleChange} className="w-1/2 sm:w-2/5 focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm placeholder:font-textos font-numeros"></input>
                    </div>
                </label>

                <div className="flex flex-col gap-2">
                    <p className=" text-center text-lg font-textos">Géneros</p>
                    <div className="flex flex-wrap justify-center p-1">
                        {todosGeneros.map((g, i) => ( 
                            <label className={`m-1 p-1 rounded-3xl ${generos.includes(g) ? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'}`} > 
                                <input type="checkbox" name="generos" value={g} onChange={handleChange} checked={generos.includes(g)} className="hidden"></input> 
                                <span className="text-sm font-numeros">{g}</span> 
                            </label> 
                        ))}
                    </div>
                </div>

                <div className="flex flex-row justify-around my-2">
                    <button onClick={(evento) => Aplicar(evento, setFiltro, filtro, autor, editorial, desde, hasta, generos, setFiltrado )} className="bg-white px-3 py-2 rounded-xl border border-beige-800  active:bg-beige-800 active:text-white font-numeros">Aplicar</button>
                    <button onClick={(evento)=>Quitar(evento, setFiltro, setAutor, setEditorial, setDesde, setHasta, setGeneros, setFiltrado)} className="bg-beige-800 px-3 py-2 rounded-xl border border-beige-800 text-white active:bg-white active:text-black font-numeros">Quitar</button>
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
