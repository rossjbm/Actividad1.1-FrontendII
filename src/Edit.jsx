import { useState } from "react"

export function ButtonEdit(Serial) {
    const [editando,setEditando] = useState(false)

    const [sci_fi, setSci_fi] = useState(false);
    const [romance, setRomance]= useState(false)
    const [fantasía, setFantasía]= useState(false)
    const [ficción, setFicción]= useState(false)
    const [terror, setTerror]= useState(false)
    const [thriller, setThriller]= useState(false)
    const [historia, setHistoria]= useState(false)
    const [drama, setDrama]= useState(false)
    const [comedia, setComedia]= useState(false)

    return(<>
        <button className=" rounded-full bg-button-100 p-1 flex items-center hover:outline-dashed hover:outline-2 hover:outline-button-100 active:bg-beige-100" onClick={(e)=>{e.preventDefault(),EditandoButton(editando,setEditando)}} ><span class="material-symbols-outlined">edit</span></button>
        <div className={editando?"fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 visible" : "flex flex-wrap fixed opacity-0 invisible overflow-hidden w-0 h-0"}>
        <form className="flex items-center bg-beige-100 border-4 p-3 border-solid rounded-2xl min-w-96 w-1/2 flex-col">
            <label className="text-center pb-2 pt-4 px-2" >Titulo
            <input className="mx-4" type="text" id="Titulo" />
            </label>
            <label className="text-center py-2 px-1">Portada en URL
            <input className="mx-4" type="url" id="Portada" placeholder='https://' />
            </label>
            <fieldset className="flex justify-around flex-wrap max-w-md" >
                <legend className="block text-center ">Géneros</legend>
                <input className={`px-3 py-1.5 border-2 rounded-xl border-beige-800 ${sci_fi? 'bg-beige-800' : ' bg-white '} `} type="button" onClick={()=>{handleClick(sci_fi,setSci_fi)}} value="sci-fi" />
                <input className={`px-3 py-1.5 border-2 rounded-xl border-beige-800 ${romance? 'bg-beige-800' : ' bg-white '} `} type="button" onClick={()=>{handleClick(romance,setRomance)}} value="romance" />
                <input className={`px-3 py-1.5 border-2 rounded-xl border-beige-800 ${fantasía? 'bg-beige-800' : ' bg-white '} `}type="button" onClick={()=>{handleClick(fantasía,setFantasía)}} value="fantasía" />
                <input className={`px-3 py-1.5 border-2 rounded-xl border-beige-800 ${ficción? 'bg-beige-800' : ' bg-white '} `}type="button" onClick={()=>{handleClick(ficción, setFicción)}} value="ficción" />
                <input className={`px-3 py-1.5 border-2 rounded-xl border-beige-800 ${terror? 'bg-beige-800' : ' bg-white '} `}type="button" onClick={()=>{handleClick(terror, setTerror)}} value="terror" />
                <input className={`px-3 py-1.5 border-2 rounded-xl border-beige-800 ${thriller? 'bg-beige-800' : ' bg-white '} `}type="button" onClick={()=>{handleClick(thriller, setThriller)}} value="thriller" />
                <input className={`px-3 py-1.5 border-2 rounded-xl border-beige-800 ${historia? 'bg-beige-800' : ' bg-white '} `}type="button" onClick={()=>{handleClick(historia, setHistoria)}} value="historia" />
                <input className={`px-3 py-1.5 border-2 rounded-xl border-beige-800 ${drama? 'bg-beige-800' : ' bg-white '} `}type="button" onClick={()=>{handleClick(drama, setDrama)}} value="drama" />
                <input className={`px-3 py-1.5 border-2 rounded-xl border-beige-800 ${comedia? 'bg-beige-800' : ' bg-white '} `}type="button" onClick={()=>{handleClick(comedia, setComedia)}} value="comedia" />
            </fieldset>
            <label className="text-center py-2 px-1">Autor
            <input className="mx-4" type="text" id="Autor" />
            </label>
            <label className="text-center py-2 px-1">Editorial
            <input className="mx-4" type="text" id="Editorial" />
            </label>
            <label className="text-center py-2 px-1">Año de publicación
            <input className="mx-4" type="number" id="Año" placeholder='2024' />
            </label>
            <label className="text-center py-2 px-1">Disponibles
            <input className="mx-4" type="number" id="Disponibles" />
            </label>
            <label className="text-center pt-2 pb-4 px-1">Precio
            <input className="mx-4" type="number" id="Precio" />
            </label>
            <div className="flex w-full h-full place-content-evenly">
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),Buttons('Cancelar',sci_fi, setSci_fi,romance, setRomance,fantasía, setFantasía,ficción, setFicción,terror, setTerror,thriller, setThriller,historia, setHistoria,drama, setDrama,comedia, setComedia,Agregando,setAgregando)}}>Cancelar</button>
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),Buttons('Guardar',sci_fi, setSci_fi,romance, setRomance,fantasía, setFantasía,ficción, setFicción,terror, setTerror,thriller, setThriller,historia, setHistoria,drama, setDrama,comedia, setComedia,Agregando,setAgregando,book,setBook) }}>Guardar</button>
            </div>
        </form>
        </div>
    </>)

    function Buttons() {
         
    }

    function EditandoButton(editando,setEditando) {
        if (editando==false) {
            setEditando(true)
        }else{
            setEditando(false)
        }
    }

} 