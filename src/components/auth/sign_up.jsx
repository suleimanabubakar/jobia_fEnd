import { useState } from "react";
import { SmallLoader } from "../panel/universal/loaders";


const SignUpForm = ({signingUp}) => {

        const [signUpObject,setSignUpObject] = useState({})

        const inputChange = (e) => {
            const { name, value } = event.target;
            setSignUpObject((prevState) => ({ ...prevState, [name]: value }));
        }

        const submitSignUp = () => {
            signingUp.mutate(signUpObject)
        }

   

    return ( 

        <>
<div className="w-full flex flex-wrap">

<div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
        <label className="font-me text-base px-3" >First Name</label> 
        <input onChange={(e)=>inputChange(e)} name="first_name" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
        </div>

        <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
        <label className="font-me text-base px-3" >Last Name</label> 
        <input onChange={(e)=>inputChange(e)} name="last_name" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
        </div>



</div>


<div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-5 px-4 ">
<label className="font-me text-base px-3" >Email</label> 
<input onChange={(e)=>inputChange(e)} name="email" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
</div>


<div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-5 px-4 ">
<label className="font-me text-base px-3" >Password</label> 
<input onChange={(e)=>inputChange(e)} name="password" placeholder=""  type="password" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
</div>



<div className="w-full lg:w-2/3 p-2 mx-auto">     

{
       signingUp.isLoading ? 
    <div className="w-full flex h-24 items-center justify-center">   
    <SmallLoader/>    
    </div>
       :
<button className="py-3 rounded-lg bg-dark-green text-white w-full bg-indigo-700 mx-auto" onClick={submitSignUp} >Sign Up</button> 

}

  
</div>

</>


     );
}
 
export default SignUpForm;