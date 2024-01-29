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
        console.log(e);
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
        <div className={editando?"fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 visible" : "flex flex-wrap fixed opacity-0 invisible overflow-hidden w-0 h-0"}>
        <form className="flex items-center bg-beige-100 border-4 p-3 border-solid rounded-2xl min-w-96 w-1/2 flex-col">
            <label className="text-center pb-2 pt-4 px-2" >Titulo
            <input className="mx-4" type="text" id="Titulo" onChange={handleChange}  value={titulo} />
            </label>
            <label className="text-center py-2 px-1">Portada en URL
            <input className="mx-4" type="url" id="Portada" onChange={handleChange}  placeholder='https://' value={img} />
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
            <input className="mx-4" type="text" id="Autor" onChange={handleChange}  value={autor} />
            </label>
            <label className="text-center py-2 px-1">Editorial
            <input className="mx-4" type="text" id="Editorial" onChange={handleChange}  value={editorial} />
            </label>
            <label className="text-center py-2 px-1">Año de publicación
            <input className="mx-4" type="number" id="Año" placeholder='2024'onChange={handleChange}  value={ano} />
            </label>
            <label className="text-center py-2 px-1">Disponibles
            <input className="mx-4" type="number" id="Disponibles"onChange={handleChange}  value={unidades} />
            </label>
            <label className="text-center pt-2 pb-4 px-1">Precio
            <input className="mx-4" type="number" id="Precio"onChange={handleChange}  value={precio}/>
            </label>
            <div className="flex w-full h-full place-content-evenly">
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),ButtonCancelar()}}>Cancelar</button>
                <button onClick={(buttonEvent)=>{buttonEvent.preventDefault(),ButtonGuardar()}}>Guardar</button>
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
        console.log('aqui', nuevoBook);
        nuevoBook[i].titulo=titulo
        nuevoBook[i].img=img
        nuevoBook[i].autor=autor
        nuevoBook[i].editorial=editorial
        nuevoBook[i].ano=ano
        nuevoBook[i].unidades=unidades
        nuevoBook[i].precio=precio
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