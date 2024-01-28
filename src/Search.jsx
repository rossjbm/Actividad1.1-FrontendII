import { useState, useEffect } from "react"
import { ResulSearch } from "./ResulSearch.jsx"

function Search({setResultado, setValor, valor}) {

    //useEffect se ejecuta si ocurre un cambio en valor
    useEffect(() => {
        if (valor) {
            const timer = setTimeout(() => { //espera por si hay un cambio
                console.log('vamos a buscar');
                handleChange();
            }, 2000);
        
            return () => { //al cambiar el valor
                console.log('hubo un cambio')
                clearTimeout(timer); //limpiamos tiempo
                setResultado([]); //limpiamos resultados
            };
        }
    }, [valor]);

    //enviamos valor para buscar en el localstorage
    async function handleChange() {
        console.log('enviando valor a al localstorage')
        console.log(valor)

        const respuesta = ResulSearch(valor)

        setResultado(respuesta)

        console.log('respuesta', respuesta)

    }

    return (<>
        <div className="w-3/5 p-4 flex justify-around gap-2 my-16 mx-auto bg-beige-100 rounded-xl shadow-xl">
            <input type="text" placeholder="Ingresar título..." value={valor} onChange={(e) => {setValor(e.target.value)}} className="rounded-xl border border-beige-800 focus:outline-0 focus:bg-white py-2 px-3 w-9/12 bg-beige-200 text-beige-800"></input>
            <div className=" w-1/5 flex justify-center">
                <button className="hover:bg-beige-200 px-3 m-0 h-full w-full">Fil</button>
                <button  className="hover:bg-beige-200 border-l border-beige-800 m-0 px-3 w-full h-full">Mas</button>
            </div>
        </div>
    </>)
}

export default Search