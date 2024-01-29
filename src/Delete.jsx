
export function ButtonDelete({book , setBook, i}) {

    function ButtonD() {
        const nuevosLibro = book.filter((l,e)=>e!==i)
        setBook(nuevosLibro)
    }
    return(
        <button className=" rounded-full bg-button-200 p-1 flex items-center hover:outline-dashed hover:outline-2 hover:outline-button-200 active:bg-beige-100" onClick={(e)=>{e.preventDefault(),ButtonD()}} ><span class="material-symbols-outlined">delete</span></button>
    )
    
}