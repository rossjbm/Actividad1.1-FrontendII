import { useState } from "react"

export function ButtonAdd() {
    const[Agregando,setAgregando]=useState(false)
    return(<>
    <button className="hover:bg-beige-200 px-3 m-0 h-full w-full"><span onClick={()=>{ console.log('aaa');AgregarAlternar(Agregando,setAgregando)}} style={{fontSize:"2.5em"}} class="material-symbols-outlined">add</span></button>
    <div className={ Agregando ? "fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 visible" : "flex flex-wrap fixed opacity-0 invisible overflow-hidden w-0 h-0"} >
        <form>
            <label>
                Titulo
            </label>
            <input type="text" />
            <label>
                Genero
            </label>
            <input type="button" value="Ci-Fi"/>
            <label>Autor</label>
            <input type="text" />
            <label>Editorial</label>
            <input type="text" />
            <label>Año de publicación</label>
            <input type="date"/>
            <label>Disponibles</label>
            <input type="number"/>
            <label>Precio</label>
            <input type="number" />
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