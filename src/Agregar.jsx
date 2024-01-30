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
    <button className="hover:bg-beige-200 px-3 m-0 h-full w-full hover:rounded-r-lg"><span onClick={()=>{AgregarAlternar(Agregando,setAgregando)}} style={{fontSize:"2.3em"}} class="material-symbols-outlined">add</span></button>
    <div className={Agregando ? "bg-beige-800 w-full h-full sm:fixed absolute sm:top-0 left-0 flex items-center justify-center bg-opacity-50 transition-opacity duration-300" : "hidden"} >
        <form className="flex flex-col items-center bg-beige-100 border-4 p-6 border-beige-800 shadow-xl rounded-2xl w-11/12 md:w-3/4 gap-6">
            <div className="flex md:flex-row flex-col gap-4">
            <div className="sm:w-1/2 flex flex-col gap-2 ">
                <label className="text-center py-2 px-1 flex flex-col" ><p className=" text-center text-lg font-textos">Título</p>
                <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm" type="text" id="Titulo" />
                </label>
                <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Portada en URL</p>
                <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm font-numeros" type="url" id="Portada" placeholder='https://' />
                </label>
                <fieldset className="flex flex-wrap justify-center p-1" >
                    <legend className="block text-center text-lg font-textos">Géneros</legend>
                    <input className={`m-1 p-1 rounded-3xl ${sci_fi? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `} type="button" onClick={()=>{handleClick(sci_fi,setSci_fi)}} value="sci-fi" />
                    <input className={`m-1 p-1 rounded-3xl ${romance? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white '} `} type="button" onClick={()=>{handleClick(romance,setRomance)}} value="romance" />
                    <input className={`m-1 p-1 rounded-3xl ${fantasía? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `}type="button" onClick={()=>{handleClick(fantasía,setFantasía)}} value="fantasía" />
                    <input className={`m-1 p-1 rounded-3xl ${ficción? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `}type="button" onClick={()=>{handleClick(ficción, setFicción)}} value="ficción" />
                    <input className={`m-1 p-1 rounded-3xl ${terror? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `}type="button" onClick={()=>{handleClick(terror, setTerror)}} value="terror" />
                    <input className={`m-1 p-1 rounded-3xl ${thriller? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `}type="button" onClick={()=>{handleClick(thriller, setThriller)}} value="thriller" />
                    <input className={`m-1 p-1 rounded-3xl ${historia? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `}type="button" onClick={()=>{handleClick(historia, setHistoria)}} value="historia" />
                    <input className={`m-1 p-1 rounded-3xl ${drama? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `}type="button" onClick={()=>{handleClick(drama, setDrama)}} value="drama" />
                    <input className={`m-1 p-1 rounded-3xl ${comedia? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `}type="button" onClick={()=>{handleClick(comedia, setComedia)}} value="comedia" />
                </fieldset>
            </div>
            <div className="sm:w-1/2 flex flex-col gap-3">
                <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Autor</p>
                <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm" type="text" id="Autor" />
                </label>
                <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Editorial</p>
                <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm" type="text" id="Editorial" />
                </label>
                <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Año de Publicación</p>
                <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm font-numeros" type="number" id="Año" placeholder='2024' />
                </label>
                <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Disponibles</p>
                <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm font-numeros" type="number" id="Disponibles" />
                </label>
                <label className="text-center pt-2 pb-4 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Precio</p>
                <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm font-numeros" type="number" id="Precio" />
                </label>
            </div>
            </div>
            <div className="flex w-3/5 h-full place-content-evenly sm:flex-row flex-col gap-3">
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),Buttons('Cancelar',sci_fi, setSci_fi,romance, setRomance,fantasía, setFantasía,ficción, setFicción,terror, setTerror,thriller, setThriller,historia, setHistoria,drama, setDrama,comedia, setComedia,Agregando,setAgregando)}} className="bg-beige-800 px-3 py-2 rounded-xl border border-beige-800 text-white active:bg-white active:text-black font-numeros">Cancelar</button>
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),Buttons('Limpiar',sci_fi, setSci_fi,romance, setRomance,fantasía, setFantasía,ficción, setFicción,terror, setTerror,thriller, setThriller,historia, setHistoria,drama, setDrama,comedia, setComedia,Agregando,setAgregando)}} className="bg-white px-3 py-2 rounded-xl border border-beige-800  active:bg-beige-800 active:text-white font-numeros" >Limpiar</button>
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),Buttons('Guardar',sci_fi, setSci_fi,romance, setRomance,fantasía, setFantasía,ficción, setFicción,terror, setTerror,thriller, setThriller,historia, setHistoria,drama, setDrama,comedia, setComedia,Agregando,setAgregando,book,setBook) }} className="bg-beige-800 px-3 py-2 rounded-xl border border-beige-800 text-white active:bg-white active:text-black font-numeros" >Agregar</button>
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
        do {
            for(let i = 0; i < 9; i++) {
                serial += possible.charAt(Math.floor(Math.random() * possible.length));
            }
        } while (comprobarSerial(serial));
        return serial;
    }
    
    function comprobarSerial(Serial) {
        return book.some(x => x.serial === Serial);
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
    
        const serial =generateSerial()
            //obtener información de los input
        const titulo = titulo_get.value
        const autor = autor_get.value
        const editorial = editorial_get.value
        const ano = año_get.value
        const unidades = disponibles_get.value
        const precio = precio_get.value
        const img = portada_get.value

        // comprobar
        if (!titulo || !autor || !editorial || !ano || !unidades || !precio || !img) {
            alert("Por favor, complete todos los campos obligatorios.");
            return; // Detén la función si hay campos vacíos
        }
        const URL = new Image();
        URL.onload = function() {
          console.log('La URL es de una imagen');
        };
        URL.onerror = function() {
          alert('La URL no es de una imagen')
        };
        URL.src = img;
        
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

        //comprobar genero
        if (generos.length==0) {
            alert('elegir mínimo un genero')
            return
        }
        
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
}
 
function AgregarAlternar(Agregando,setAgregando) {
    if (Agregando==false) {
        setAgregando(true);
    }else{
        setAgregando(false);
    }
}