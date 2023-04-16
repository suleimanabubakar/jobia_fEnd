
import { Link } from "react-router-dom";
const EmployerNav = () => {
    return ( 
        <div className="w-full flex flex-wrap p-2">
        <Link to="/ " >
        <button className="px-5 font-bold  py-2 border-2 text-gray-400 m-1 rounded-full">
            /
        </button>
        </Link>

    </div>
     );
}
 
export default EmployerNav;