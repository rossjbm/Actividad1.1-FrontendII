import { useState } from "react"

export function ButtonAdd() {
    const[Agregando,setAgregando]=useState(false)
    return(<>
    <button className="hover:bg-beige-200 px-3 m-0 h-full w-full"><span onClick={()=>{ console.log('aaa');AgregarAlternar(Agregando,setAgregando)}} style={{fontSize:"2.5em"}} class="material-symbols-outlined">add</span></button>
    <div className={ Agregando ? "fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 visible" : "flex flex-wrap fixed opacity-0 invisible overflow-hidden w-0 h-0"} >
        <form className="flex items-center bg-beige-100 border-4 p-3 border-solid rounded-2xl min-w-96 w-1/2 flex-col">
            <label className="text-center pb-2 pt-4 px-2" >Titulo
            <input className="mx-4" type="text" />
            </label>
            <label className="text-center py-2 px-1">Portada en URL
            <input className="mx-4" type="url"/>
            </label>
            <fieldset className="flex justify-around flex-wrap max-w-md" >
                <legend className="block text-center ">Géneros</legend>
                <input className="px-3 py-1.5 bg-white border-2 rounded-xl border-beige-800" type="button" onClick={()=>{}} value="sci-fi" />
                <input className="px-3 py-1.5 bg-white border-2 rounded-xl border-beige-800" type="button" onClick={()=>{}} value="romance" />
                <input className="px-3 py-1.5 bg-white border-2 rounded-xl border-beige-800" type="button" onClick={()=>{}} value="fantasía" />
                <input className="px-3 py-1.5 bg-white border-2 rounded-xl border-beige-800" type="button" onClick={()=>{}} value="ficción" />
                <input className="px-3 py-1.5 bg-white border-2 rounded-xl border-beige-800" type="button" onClick={()=>{}} value="terror" />
                <input className="px-3 py-1.5 bg-white border-2 rounded-xl border-beige-800" type="button" onClick={()=>{}} value="thriller" />
                <input className="px-3 py-1.5 bg-white border-2 rounded-xl border-beige-800" type="button" onClick={()=>{}} value="historia" />
                <input className="px-3 py-1.5 bg-white border-2 rounded-xl border-beige-800" type="button" onClick={()=>{}} value="drama" />
                <input className="px-3 py-1.5 bg-white border-2 rounded-xl border-beige-800" type="button" onClick={()=>{}} value="comedia" />
            </fieldset>
            <label className="text-center py-2 px-1">Autor
            <input className="mx-4" type="text" />
            </label>
            <label className="text-center py-2 px-1">Editorial
            <input className="mx-4" type="text" />
            </label>
            <label className="text-center py-2 px-1">Año de publicación
            <input className="mx-4" type="number"/>
            </label>
            <label className="text-center py-2 px-1">Disponibles
            <input className="mx-4" type="number"/>
            </label>
            <label className="text-center pt-2 pb-4 px-1">Precio
            <input className="mx-4" type="number"/>
            </label>
        </form>
    </div>
    </>)
}
function AgregarAlternar(Agregando,setAgregando) {
    console.log('Chingasumare', Agregando);
    if (Agregando==false) {
        setAgregando(true);
    }else{
        setAgregando(false);
    }
}