import { useNavigate, Link } from "react-router-dom";
import flyerChurrero from './juego/imagenes/flyerchurrero.png'
const Inicio = () => {
    return (
        <div className="w-screen h-screen flex  bg-black flex-col">
            <div className="h-[100px] w-full bg-red-300">
                <div className="bg-blue-600 w-[50%] h-full">
                    kscaritas logo
                </div>
            </div>
            <div className="">
                <p className="text-white text-center font-bold">Titulo Principal</p>
                <p className="text-white text-center">Esto es una descripcion de los juegos</p>
            </div>
            <Link to="/churrero">
                <div className="border-[5px] border-orange-400 p-4">
                    <img className="rounded-2xl" src={flyerChurrero} alt="" />
                    {/* <h1 className="text-white text-4xl">Juego del churrero</h1> */}
                </div>
            </Link>
        </div>
    );
}
 
export default Inicio;