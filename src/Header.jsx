
function Header() {
    return ( 
    <>
        <header className="w-screen h-20 flex items-center justify-start gap-6 bg-beige-200 shadow-xl">
            <p className="px-2 py-2 rounded-full bg-beige-100 ml-6 border border-beige-800 text-beige-800 shadow-xl flex items-center justify-center sm:h-12 sm:w-12"><span class="material-symbols-outlined">auto_stories</span></p>
            <p className="font-textos text-xl md:text-4xl text-beige-800">Gestión de Inventario</p>
        </header>
    </>
    )
}

export default Header