import { useState, useEffect } from "react"
import { ResulSearch, ResulFiltrado } from "./ResulSearch.js"
import { Renderizar } from "./Renderizar.jsx";
import { ButtonAdd } from "./Agregar.jsx";
import { Filtrado } from "./Filtros.jsx";

function Search({book, setBook}) {

    const [resultado, setResultado] = useState([]);
    const [valor, setValor] = useState("");
    const [cargar, setCargar] = useState(false)

    //estados para filtros
    const [filtro, setFiltro] = useState({autor:"", editorial:"", desde:"", hasta:"", generos:[]});
    const [filtrado, setFiltrado] = useState(false)
    // para agregar libro
    const[Agregando,setAgregando]=useState(false)
    const[eliminar,setEliminar]=useState(false)

    //useEffect se ejecuta si ocurre un cambio en valor
    useEffect(() => {
        if (valor) {

            setCargar(true)
            const timer = setTimeout(() => { //espera por si hay un cambio
                handleChange();
                setCargar(false)
            }, 2000);
        
            return () => { //al cambiar el valor
                clearTimeout(timer); //limpiamos tiempo
                setResultado([]); //limpiamos resultados
                setCargar(true)
            };
        } else {

            if (filtrado) {
                var respuesta = ResulFiltrado(book, filtro)
                setResultado(respuesta)
            } else {
                setResultado(book)
            }
            setCargar(false)
        }
    }, [valor, filtro, Agregando, eliminar]);

    //enviamos valor para buscar en el localstorage
    async function handleChange() {
        var respuesta = ResulSearch(valor, book)

        if (filtrado) {
            var respuestaF = ResulFiltrado(respuesta, filtro)
            setResultado(respuestaF)
        } else {
            setResultado(respuesta)
        }
    }

    return (<>
        <div className=" w-11/12 sm:w-3/5 p-4 flex flex-col sm:flex-row justify-around gap-5 sm:gap-2 my-16 mx-auto bg-beige-100 rounded-xl shadow-xl">
            <input type="text" placeholder="Ingresar título..." value={valor} onChange={(e) => {setValor(e.target.value)}} className="rounded-xl border border-beige-800 focus:outline-0 focus:bg-white py-2 px-3 sm:w-9/12 bg-beige-200 text-beige-800 text-lg font-textos placeholder:font-textos"></input>

            <div className=" sm:w-1/5 flex justify-center">
                <Filtrado filtro={filtro} setFiltro={setFiltro} setFiltrado={setFiltrado} />
                <ButtonAdd book={book} setBook={setBook} Agregando={Agregando} setAgregando={setAgregando} />
            </div>
        </div>

        {cargar ? (
            <>
                <div class="flex justify-center items-center">
                    <div class="w-16 h-16 border-t-4 border-beige-800 rounded-full animate-spin"></div>
                </div>
            </>
        ) : (
            <>
                <Renderizar resultado={resultado} book={book} setBook={setBook} eliminar={eliminar} setEliminar={setEliminar} />
            </>
        )}
    </>)
}

export default Search