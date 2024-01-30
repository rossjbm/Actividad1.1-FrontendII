import { useEffect, useState } from "react"

export function ButtonEdit({book, setBook,libro ,i}) {
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

    const handleClick = ( valor, setValor) => {
        if (valor == true) {
          setValor(false);
        } else {
          setValor(true);
        }
    }

    useEffect(()=>{
        libro.generos.forEach(e => {
        if (e == 'sci-fi') {setSci_fi(true)}
        if (e == 'romance') {setRomance(true)}
        if (e == 'fantasía') {setFantasía(true)}
        if (e == 'ficción') {setFicción(true)}
        if (e == 'terror') {setTerror(true)}
        if (e == 'thriller') {setThriller(true)}
        if (e == 'historia') {setHistoria(true)}
        if (e == 'drama') {setDrama(true)}
        if (e == 'comedia') {setComedia(true)}
        });
    },[editando])

    const [titulo, setTitulo] = useState(libro.titulo)
    const [img,setImg] = useState(libro.img)
    const [autor,setAutor] = useState(libro.autor)
    const [editorial,setEditorial] = useState(libro.editorial)
    const [ano,setAno] = useState(libro.ano)
    const [unidades, setUnidades] = useState(libro.unidades)
    const [precio,setPrecio] = useState(libro.precio)

    const handleChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
          case "Titulo":
            setTitulo(value);
            break;
          case "Portada":
            setImg(value);
            break;
          case "Autor":
            setAutor(value);
            break;
          case "Editorial":
            setEditorial(value);
            break;
            case "Año":
                setAno(value);
            break;
            case "Disponibles":
                setUnidades(value);
            break;
            case "Precio":
                setPrecio(value);
            break;
          default:
            break;
        }
      };
    return(<>
        <button className=" rounded-full bg-button-100 p-1 flex items-center hover:outline-dashed hover:outline-2 hover:outline-button-100 active:bg-beige-100" onClick={(e)=>{e.preventDefault(),EditandoButton(editando,setEditando)}} ><span class="material-symbols-outlined">edit</span></button>
        <div className={editando? "bg-beige-800 w-full h-full sm:fixed absolute sm:top-0 left-0 flex items-center justify-center bg-opacity-50 transition-opacity duration-300" : "hidden"}>
        <form className="flex flex-col items-center bg-beige-100 border-4 p-6 border-beige-800 shadow-xl rounded-2xl w-11/12 md:w-3/4 gap-6">
            <div className="flex md:flex-row flex-col gap-4">
            <div className="sm:w-1/2 flex flex-col gap-2 ">
              <label className="text-center py-2 px-1 flex flex-col" ><p className=" text-center text-lg font-textos">Título</p>
              <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm" type="text" id="Titulo" onChange={handleChange}  value={titulo} />
              </label>
              <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Portada en URL</p>
              <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm font-numeros" type="url" id="Portada" onChange={handleChange}  placeholder='https://' value={img} />
              </label>
              <fieldset className="flex flex-wrap justify-center p-1" >
                  <legend className="block text-center text-lg font-textos">Géneros</legend>
                  <input className={`m-1 p-1 rounded-3xl ${sci_fi? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `} type="button" onClick={()=>{handleClick(sci_fi,setSci_fi)}} value="sci-fi" />
                  <input className={`m-1 p-1 rounded-3xl ${romance? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white '} `} type="button" onClick={()=>{handleClick(romance,setRomance)}} value="romance" />
                  <input className={`m-1 p-1 rounded-3xl ${fantasía? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `} type="button" onClick={()=>{handleClick(fantasía,setFantasía)}} value="fantasía" />
                  <input className={`m-1 p-1 rounded-3xl ${ficción? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `} type="button" onClick={()=>{handleClick(ficción, setFicción)}} value="ficción" />
                  <input className={`m-1 p-1 rounded-3xl ${terror? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `} type="button" onClick={()=>{handleClick(terror, setTerror)}} value="terror" />
                  <input className={`m-1 p-1 rounded-3xl ${thriller? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `} type="button" onClick={()=>{handleClick(thriller, setThriller)}} value="thriller" />
                  <input className={`m-1 p-1 rounded-3xl ${historia? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `} type="button" onClick={()=>{handleClick(historia, setHistoria)}} value="historia" />
                  <input className={`m-1 p-1 rounded-3xl ${drama? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `} type="button" onClick={()=>{handleClick(drama, setDrama)}} value="drama" />
                  <input className={`m-1 p-1 rounded-3xl ${comedia? 'bg-beige-800 text-white' : 'border border-beige-800 bg-white'} `} type="button" onClick={()=>{handleClick(comedia, setComedia)}} value="comedia" />
              </fieldset>
            </div>
            <div className="sm:w-1/2 flex flex-col gap-3">
              <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Autor</p>
              <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm" type="text" id="Autor" onChange={handleChange}  value={autor} />
              </label>
              <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Editorial</p>
              <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm" type="text" id="Editorial" onChange={handleChange}  value={editorial} />
              </label>
              <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Año de Publicación</p>
              <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm font-numeros" type="number" id="Año" placeholder='2024'onChange={handleChange}  value={ano} />
              </label>
              <label className="text-center py-2 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Disponibles</p>
              <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm font-numeros" type="number" id="Disponibles"onChange={handleChange}  value={unidades} />
              </label>
              <label className="text-center pt-2 pb-4 px-1 flex flex-col"><p className=" text-center text-lg font-textos">Precio</p>
              <input className="focus:outline-0 border border-beige-800 focus:bg-beige-200 py-1 px-2 rounded-xl text-sm font-numeros" type="number" id="Precio"onChange={handleChange}  value={precio}/>
              </label>
            </div>
            </div>
            <div className="flex w-3/5 h-full place-content-evenly flex-row gap-3">
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),ButtonCancelar()}} className="bg-beige-800 px-3 py-2 rounded-xl border border-beige-800 text-white active:bg-white active:text-black font-numeros">Cancelar</button>
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),ButtonGuardar()}} className="bg-white px-3 py-2 rounded-xl border border-beige-800  active:bg-beige-800 active:text-white font-numeros">Guardar</button>
            </div>
        </form>
        </div>
    </>)

    function ButtonCancelar(e) {
        setEditando(false)

        setTitulo(libro.titulo)
        setImg(libro.img)
        setAutor(libro.autor)
        setEditorial(libro.editorial)
        setAno(libro.ano)
        setUnidades(libro.unidades)
        setPrecio(libro.precio)
    }
    function ButtonGuardar() {
        let nuevoBook = [...book]
        nuevoBook[i].titulo=titulo
        nuevoBook[i].img=img
        nuevoBook[i].autor=autor
        nuevoBook[i].editorial=editorial
        nuevoBook[i].ano=ano
        nuevoBook[i].unidades=unidades
        nuevoBook[i].precio=precio
          // comprobar formulario
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
        URL.src = img

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
        
        nuevoBook[i].generos=generos
        setBook(nuevoBook)
        setEditando(false)
    }
    function EditandoButton(editando,setEditando) {
        if (editando==false) {
            setEditando(true)
        }else{
            setEditando(false)
        }
    }
} 