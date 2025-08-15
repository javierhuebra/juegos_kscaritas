import { useNavigate, Link } from "react-router-dom";
const Inicio = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-800">
            <Link to="/churrero">
                <div className="border-[5px] border-purple-400 p-4">
                    <h1 className="text-white text-4xl">Juego del churrero</h1>
                </div>
            </Link>
        </div>
    );
}
 
export default Inicio;