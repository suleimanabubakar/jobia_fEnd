import { useState } from "react";
import { SmallLoader } from "../panel/universal/loaders";

const LoginForm = ({loginIn}) => {

            const [loginObj,setLoginObj] = useState({})

        const inputChange = (e) => {
            const { name, value } = event.target;
            setLoginObj((prevState) => ({ ...prevState, [name]: value }));
        }

        const handleSubmit = () => {
            loginIn.mutate(loginObj)
        }

    return ( 

        <>
          <div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-5 px-4 ">
                    <label className="font-me text-base px-3" >Email</label> 
                    <input onChange={(e)=>inputChange(e)} name="username" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
                    </div>


                    <div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-5 px-4 ">
                    <label className="font-me text-base px-3" >Password</label> 
                    <input onChange={(e)=>inputChange(e)} name="password" placeholder=""  type="password" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
                    </div>



                    <div className="w-full lg:w-1/3 p-2">
                      <p className="text-gray-600 px-3 cursor-pointer">Forgot Password ?</p>
                    </div>



                    <div className="w-full lg:w-2/3 p-2 mx-auto">

                {    loginIn.isLoading ? 
                    <div className="w-full flex h-24 items-center justify-center">   
    <SmallLoader/>    
    </div>
    :
                     <button
                     onClick={handleSubmit}
                     className="py-3 rounded-lg bg-dark-green text-white w-full bg-indigo-700">Log In</button>
                  
}

</div>

        </>

     );
}
 
export default LoginForm;