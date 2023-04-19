import { Link } from "react-router-dom";

const SeekerNav = () => {
    return ( 
        <div className="w-full flex flex-wrap p-2">
            <Link to="/ " >
            <button className="px-5 font-bold  py-2 border-2 text-gray-400 m-1 rounded-full">
                /
            </button>
            </Link>

            <Link to="/saved" >
            <button className="px-5 font-bold  py-2 border-2 text-gray-400 m-1 rounded-full">
                <span className="material-icons-outlined inline-flex align-middle">bookmark</span> Saved Jobs
            </button>
            </Link>

            <Link to="/applied" >
            <button className="px-5 font-bold  py-2 border-2 text-gray-400 m-1 rounded-full">
                <span className="material-icons-outlined inline-flex align-middle">edit</span> Applied Jobs
            </button>
            </Link>

            <Link to="/boost" >
            <button className="px-5 font-bold  py-2 border-2 text-gray-400 m-1 rounded-full">
                <span className="material-icons-outlined inline-flex align-middle">new_releases</span> Boost Skills
            </button>
            </Link >
        </div>
     );
}
 
export default SeekerNav;