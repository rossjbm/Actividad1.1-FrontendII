import IconoFacebook from './assets/facebook-f.svg';
import IconoTwitter from './assets/x-twitter.svg';
import IconoInstagram from './assets/instagram.svg';

function Footer() {
    return ( 
    <>
        <footer className="bg-gradient-to-tl from-beige-100 to-beige-200 p-5 flex flex-col items-center gap-5 justify-between mt-7">
            <p className="text-base font-textos text-center">¡Hora de Organizar tu Inventario!</p>
            <p className="text-sm font-numeros">tuspelis@correoficticio.com</p>
            <div className="flex gap-6">
                <a href='#' className="bg-white p-1 rounded-full border border-beige-800 shadow-xl hover:scale-110"><img src={IconoTwitter} alt='Siguenos en X' className='w-5 h-5'></img></a>
                <a href='#' className="bg-white p-1 rounded-full border border-beige-800 shadow-xl hover:scale-110"><img src={IconoFacebook} alt='Siguenos en Facebook' className='w-5 h-5'></img></a>
                <a href='#' className="bg-white p-1 rounded-full border border-beige-800 shadow-xl hover:scale-110"><img src={IconoInstagram} alt='Siguenos en Instagram' className='w-5 h-5'></img></a>
            </div>
            <p className="text-xs font-numeros">© 2023 Todos los derechos reservados</p>
        </footer>
    </>
    )
}

export default Footer