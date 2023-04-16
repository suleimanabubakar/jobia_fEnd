import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth_slice";
const Navbar = () => {

  const dispatch = useDispatch()

  

  const [accO,setAccO] = useState(false)


    return ( 
<nav className= "navigation">
  <div className="mx-auto   px-2 sm:px-10 ">
    <div className="relative   flex items-center justify-between h-16 border-b pb-1">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
      
      </div>
      <div className="flex-1 flex items-center ml-2">
        <div className="flex-shrink-0 flex items-center">
         <p className="font-me text-xl text-gray-900" >
         <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-600 tFonts"> <Link to="/onboarding" >JOB</Link>  <span className="text-white px-2 py-1 font-bold bg-indigo-600 text-xs rounded -mt-7">Ai</span></span>
             </p>
        </div>
        <div className="hidden sm:block sm:ml-6 font-me">
          <div className="flex space-x-4">




          </div>
        </div>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       


        <div className="ml-3 relative">
          <div>
            <button
              onClick={()=>{
                setAccO(!accO)
              }}
            type="button" className="text-dark flex text-sm rounded-full focus:outline-none" id="user-menu-button"  aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>

            

           <span className="text-white rounded-2xl font-bold text-medium bg-indigo-700 px-4 py-3 uppercase"> SA   </span>
            </button>
          </div>

     
          <div className={` ${!accO && 'hidden'} z-30 origin-top-right absolute -right-3 font-me mt-4 border  w-56  rounded-md shadow-lg py-3 px-4 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" id="user-menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
           
            <div className="md:hidden">
          
              <div className="w-full flex flex-col items-start">


  













                      
    

              </div>

  <div className="h-0.5 w-full bg-gray-300"></div>
            </div>


            <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1"> <span className="material-icons-outlined  inline-flex align-bottom mr-2">
              account_circle
              </span> My Profile</Link>
            <button onClick={()=>dispatch(logout())} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2"> <span className="material-icons-outlined inline-flex align-bottom mr-2">
              logout
              </span> Sign Out</button>  
          </div>
        </div>
      </div>
    </div>
  </div>

 

</nav>

     );
}
 
export default Navbar;