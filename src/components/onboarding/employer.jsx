import { useState } from "react";

import { SmallSubmitLoader } from "../panel/universal/loaders";

const Employer = ({addCompany}) => {


    const [profile,setProfile] = useState({})
    const [company,setCompany] = useState({})

    const inputChangeP = (e) => {
        const { name, value } = event.target;
        setProfile((prevState) => ({ ...prevState, [name]: value }));
    }

    const inputChangeC = (e) => {
        const { name, value } = event.target;
        setCompany((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = () => {
        const profileObj = {...profile,user_type:'Employer',company:company}
        addCompany.mutate(profileObj)
    }


    return ( 
        <>
<div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >Company Name</label> 
    <input onChange={(e)=>inputChangeC(e)} name="name" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>




    <div className="w-full flex flex-wrap">

<div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
        <label className="font-me text-base px-3" >Country</label> 
        <input onChange={(e)=>inputChangeP(e)} name="country" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
        </div>

        <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
        <label className="font-me text-base px-3" >HR Tel No</label> 
        <input onChange={(e)=>inputChangeP(e)} name="tel" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
        </div>

</div>


    <div className="w-full flex flex-wrap">


    <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >State</label> 
    <input onChange={(e)=>inputChangeP(e)} name="state" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

    <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >Address</label> 
    <input onChange={(e)=>inputChangeP(e)} name="address" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

</div>


<div className="w-full flex flex-wrap">

<div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >Type of Company</label> 
    <input onChange={(e)=>inputChangeC(e)} name="company_type" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

    <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >Number of Employees</label> 
    <input onChange={(e)=>inputChangeC(e)} name="number_of_employees" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

</div>



<div className="w-full flex mb-3 mt-4">
<div className="w-full lg:w-1/2 ml-auto mt-2">
    {addCompany.isLoading ? 
    <SmallSubmitLoader />
    :    
    <button onClick={handleSubmit} className="py-3 w-full bg-indigo-700 text-white font-bold rounded-full">
        Submit Details
    </button>
}
</div>
</div>



    </>





     );
}
 
export default Employer;