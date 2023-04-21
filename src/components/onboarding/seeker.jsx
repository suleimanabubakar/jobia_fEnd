import { useQuery } from "react-query";
import { fetchingTags } from "../../api/tags";
import { useState } from "react";
import { SmallLoader, SmallSubmitLoader } from "../panel/universal/loaders";


const Seeker = ({addSeeker}) => {

    const [profileObj,setProfileObj] = useState({})
    const [seekerObj,setSeekerObj] = useState({})

    const skills = useQuery('skill_data',
    fetchingTags, {
        staleTime:10000
    }
    )    

    const [selectedSkills,setSelectedSkills] = useState([])
    const [isChecked, setIsChecked] = useState(false);

    const  settingSelectedSkills = (skill) => {
        selectedSkills.find(x=>x.tag==skill) ?
        setSelectedSkills(selectedSkills.filter(x=>x.tag != skill))
        :
        setSelectedSkills([...selectedSkills,{tag:skill}])
    }


    const inputChange = (e) => {
        const { name, value } = event.target;
        setProfileObj((prevState) => ({ ...prevState, [name]: value }));
    }

    const inputChangeSeeker = (e) => {
        const { name, value } = event.target;
        setSeekerObj((prevState) => ({ ...prevState, [name]: value }));
    }


    const handleSubmit = () => {


        setSeekerObj((prev)=>({...prev,is_disabled:isChecked}))

        if (!isChecked){
            setSeekerObj((prev)=>({...prev,disabled_type:""}))
        }


        const finalSeekerObj = {...seekerObj,skills:selectedSkills}

        const finalProfileObj = {...profileObj,user_type:'Seeker',seeker:finalSeekerObj}

        addSeeker.mutate(finalProfileObj)

    }



    return ( 
        
        <>

        <div className="w-full flex flex-wrap">

        <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
                <label className="font-me text-base px-3" >Country</label> 
                <input onChange={(e)=>inputChange(e)} name="country" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
                </div>

                <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
                <label className="font-me text-base px-3" >Tel No</label> 
                <input onChange={(e)=>inputChange(e)} name="tel" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
                </div>

        </div>


        <div className="w-full flex flex-wrap">

<div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >State</label> 
    <input onChange={(e)=>inputChange(e)} name="state" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

    <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >Address</label> 
    <input onChange={(e)=>inputChange(e)} name="username" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

</div>




<div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >Profession</label> 
    <input onChange={(e)=>inputChangeSeeker(e)} name="profession" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>



    <div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-3 px-4 ">
    {/* <label className="font-me text-base px-3" >Select Skills</label>  */}

    
    <div class="bg-white shadow p-2 flex">
        <span class="w-auto flex justify-end items-center text-gray-500 p-2">
            <i class="material-icons text-3xl">search</i>
        </span>
        <input class="w-full rounded p-2 text-sm focus:outline-none searchMeals" type="text" placeholder="Search Skills "/>
    </div>

    <div className="w-full flex flex-wrap max-h-48 overflow-y-scroll my-3 p-2">

    {
                skills.isLoading ? 
                <div className="w-full flex h-24 justify-center items-center">
                    <SmallLoader />
                </div>
                :
                skills.data &&
                skills.data.map(skill=>
                  

                <button onClick={()=>settingSelectedSkills(skill.id)}  className={`text-xs ${selectedSkills.find(x=>x.tag == skill.id) ? "text-indigo-700 border-indigo-700" : "text-gray-400" } border py-1 px-3 rounded-2xl m-1`}>
                {skill.name}
            </button>


                )
                
   
   }

      
        
    </div>



   {selectedSkills.length > 0 && 
 

    <div className="w-full flex flex-wrap max-h-48 overflow-y-scroll my-3 p-2 border-t">

        {
         selectedSkills && 
         selectedSkills.map(skill=>
            <button className="text-xs text-white bg-indigo-700 font-bold  py-1 px-3 rounded-2xl m-1 ">
            <span className="material-icons-outlined inline-flex align-middle mr-2">done</span> {skills.data.find(x=>x.id === skill.tag).name}
         </button>       
            )
        }

      

    </div>
}


    </div>

    <div className="w-full flex flex-wrap">

<div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >Work Experience</label> 
    <input onChange={(e)=>inputChangeSeeker(e)} name="work_experience" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

    <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >Working Hours</label> 
    <input onChange={(e)=>inputChangeSeeker(e)} name="working_hours" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

</div>


<div className="w-full flex justify-between px-4 my-4">
<p className="text-gray-600">Are you a Disabled Person ? </p>
<input type="checkbox" checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)} className="switch" />
</div>

{isChecked && 

<div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-3 px-4 ">

<input onChange={(e)=>inputChangeSeeker(e)} name="disabled_type" placeholder="Type Of Disability"  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
</div>

}





                
<div className="w-full flex mb-3 mt-4">
<div className="w-full lg:w-1/2 ml-auto mt-2">

    {addSeeker.isLoading ? 
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
 
export default Seeker;