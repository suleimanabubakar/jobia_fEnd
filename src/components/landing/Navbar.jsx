import { Link } from "react-router-dom";
const Navbar = ({openAuth}) => {
    return ( 

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="mx-6 lg:mx-10 flex flex-wrap items-center justify-between p-4 border-b ">
    <a href="" className="flex items-center font-bold">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-600 tFonts"> <Link to="/" >JOB</Link>  <span className="text-white px-2 py-1 font-bold bg-indigo-600 text-xs rounded -mt-7">Ai</span></span>
    </a>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 dark:text-white md:dark:text-indigo-500" aria-current="page">For Job Seekers</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">For  Employers</a>
        </li>
      
        <li>
    <button className="py-2 px-4 border text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white rounded" onClick={()=>openAuth(true)} >Log In / Sign Up</button>
        </li>
        <li>
    {/* <button className="py-2 px-4 border text-white bg-indigo-700   border-indigo-700 rounded">Sign Up</button> */}
        </li>
      </ul>
    </div>


    <button className="sm:block md:hidden py-2 px-4 border -mr-5 text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white rounded" onClick={()=>openAuth(true)} >Log In / Sign Up</button>

  </div>
</nav>

     );
}
 
export default Navbar;