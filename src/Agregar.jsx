import { useState } from "react"

export function ButtonAdd({book, setBook, Agregando, setAgregando}) {
    // const[Agregando,setAgregando]=useState(false)

    const [sci_fi, setSci_fi] = useState(false);
    const [romance, setRomance]= useState(false)
    const [fantasía, setFantasía]= useState(false)
    const [ficción, setFicción]= useState(false)
    const [terror, setTerror]= useState(false)
    const [thriller, setThriller]= useState(false)
    const [historia, setHistoria]= useState(false)
    const [drama, setDrama]= useState(false)
    const [comedia, setComedia]= useState(false)

    const handleClick = ( valor, setValor) => {
      if (valor == true) {
        setValor(false);
      } else {
        setValor(true);
      }
    }

    return(<>
    <button className="hover:bg-beige-200 px-3 m-0 h-full w-full"><span onClick={()=>{ console.log('aaa');AgregarAlternar(Agregando,setAgregando)}} style={{fontSize:"2.5em"}} class="material-symbols-outlined">add</span></button>
    <div className={ Agregando ? "fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 visible" : "flex flex-wrap fixed opacity-0 invisible overflow-hidden w-0 h-0"} >
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
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),Buttons('Limpiar',sci_fi, setSci_fi,romance, setRomance,fantasía, setFantasía,ficción, setFicción,terror, setTerror,thriller, setThriller,historia, setHistoria,drama, setDrama,comedia, setComedia,Agregando,setAgregando)}}>Limpiar</button>
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),Buttons('Guardar',sci_fi, setSci_fi,romance, setRomance,fantasía, setFantasía,ficción, setFicción,terror, setTerror,thriller, setThriller,historia, setHistoria,drama, setDrama,comedia, setComedia,Agregando,setAgregando,book,setBook) }}>Agregar</button>
            </div>
            
        </form>
    </div>
    </>)
}

function Buttons(acción,sci_fi, setSci_fi,romance, setRomance,fantasía, setFantasía,ficción, setFicción,terror, setTerror,thriller, setThriller,historia, setHistoria,drama, setDrama,comedia, setComedia,Agregando,setAgregando, book,setBook) {
    const get = function(id) {
        return document.getElementById(id);
    }

    var titulo_get = get('Titulo')
    var portada_get = get('Portada')
    var autor_get = get('Autor')
    var editorial_get = get('Editorial')
    var año_get = get('Año')
    var disponibles_get = get('Disponibles')
    var precio_get = get('Precio')

    function generateSerial() {
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let serial = '';
        for(let i = 0; i < 9; i++) {
          serial += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return serial;
    }

    if(acción=='Cancelar'){
            //Limpiar todo
        setSci_fi(false)
        setComedia(false)
        setDrama(false)
        setFantasía(false)
        setFicción(false)
        setHistoria(false)
        setRomance(false)
        setTerror(false)
        setThriller(false)

        titulo_get.value=''
        portada_get.value=''
        autor_get.value=''
        editorial_get.value=''
        año_get.value=''
        disponibles_get.value=''
        precio_get.value=''

        setAgregando(false)
    }

    if (acción=='Limpiar') {
        setSci_fi(false)
        setComedia(false)
        setDrama(false)
        setFantasía(false)
        setFicción(false)
        setHistoria(false)
        setRomance(false)
        setTerror(false)
        setThriller(false)

        titulo_get.value=''
        portada_get.value=''
        autor_get.value=''
        editorial_get.value=''
        año_get.value=''
        disponibles_get.value=''
        precio_get.value=''
    }

    if (acción=='Guardar') {
            //obtener información de los input
        const serial =generateSerial()
        const titulo = titulo_get.value
        const autor = autor_get.value
        const editorial = editorial_get.value
        const ano = año_get.value
        const unidades = disponibles_get.value
        const precio = precio_get.value
        const img = portada_get.value
            //botones de genero, se revisa cuales son los que se pulsaron
        var generos = []
        if (sci_fi==true){generos.push('sci-fi')}
        if (romance==true){generos.push('romance')}
        if (fantasía==true){generos.push('fantasía')}
        if (ficción==true){generos.push('ficción')}
        if (terror==true){generos.push('terror')}
        if (thriller==true){generos.push('thriller')}
        if (historia==true){generos.push('historia')}
        if (drama==true){generos.push('drama')}
        if (comedia==true){generos.push('comedia')}
        var guardado ={serial,titulo,autor,editorial,generos,img,ano,unidades,precio}
            //guardar en el estado localStorage
        // var local = JSON.parse(localStorage.getItem('book'))
        // local.push(guardado)
        // localStorage.setItem('book',JSON.stringify(local))
        var local = book
        local.push(guardado)
        setBook(local)
            //cerramos el popUp
        setAgregando(false);
    }
}
 
function AgregarAlternar(Agregando,setAgregando) {
    if (Agregando==false) {
        setAgregando(true);
    }else{
        setAgregando(false);
    }
}