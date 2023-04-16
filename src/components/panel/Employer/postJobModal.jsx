import { useState } from "react";
import { fetchingTags } from "../../../api/tags";
import { SmallLoader } from "../universal/loaders";
import { useQuery } from "react-query";
import { errorToast } from "../../universal/toastify";



const PostJobModal = ({openModal,addingJob:addJob}) => {


    const [requirements,setRequirements] = useState([{requirement:''}])

    const [selectedSkills,setSelectedSkills] = useState([])

    const requireInputs = (e,i) => {
        const updatedItems = [...requirements]; // Create a copy of the array
        updatedItems[i] = { ...updatedItems[i], requirement: e.target.value }; // Update the object at the specified index
        setRequirements(updatedItems);
    }

    const jobTypes = ['Remote','Hybrid','On Site']

    const [jobType,setJobType] = useState(null)

    const addRequirements = () => {
        setRequirements([...requirements,{requirement:''}])
    }

    const skills = useQuery('skill_data',
    fetchingTags, {
        staleTime:10000
    }
)   




    const  settingSelectedSkills = (skill) => {
        selectedSkills.find(x=>x.tag==skill) ?
        setSelectedSkills(selectedSkills.filter(x=>x.tag != skill))
        :
        setSelectedSkills([...selectedSkills,{tag:skill}])
    }



    const [jobObj,setJobObj] = useState({})

        const inputChange = (e) => {
            const { name, value } = event.target;
            setJobObj((prevState) => ({ ...prevState, [name]: value }));
        }


    
    const addingJob = () => {   
        if (selectedSkills.length < 1){
            return errorToast('Empty Skills Set')
        }
        if (jobType.length < 1){
            return errorToast('Empty Work Type')
        }

        const finalJobObj = {...jobObj,requirements:requirements,tags:selectedSkills,work_type:jobType}
        
        console.log('submitting')

        addJob.mutate(finalJobObj)


    }


    return ( 


<div  
className={`  fixed z-10 inset-0 overflow-y-auto`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

 
    <div className={` inline-block align-middle bg-white rounded-3xl text-left relative overflow-hidden shadow-xl p-4 transform transition-all sm:my-8 w-full md:w-1/3 lg:w-1/3 py-10 px-2 lg:px-6 `} id="">
    

     



            <div className="flex flex-wrap justify-between items-center  -mt-5">
            <p className="text-gray-600 tFonts text-center text-2xl -mt-4">
Create A Job Post
            </p>    
    <button className="w-12 h-12 text-indigo-700 border border-indigo-700 rounded-full" onClick={()=>openModal(false)}  ><span className="material-icons-outlined">close</span></button>

            </div>

          


           

            <div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-5 px-4 ">
                    <label className="font-me text-base px-3" >Position Name</label> 
                    <input onChange={(e)=>inputChange(e)} name="title" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
                    </div>
                    <div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-5 px-4 ">
                    <label className="font-me text-base px-3" >Job Description</label> 
                    <textarea onChange={(e)=>inputChange(e)} name="description" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " > </textarea>
                    </div>


                    <div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-5 px-4  flex flex-wrap justify-between">
                    <label className="font-me text-base px-3 py-2" >Job Requirement</label> 
                    <button onClick={addRequirements} className="rounded-full px-3 py-2 text-xs font-bold text-white bg-indigo-700 ml-auto">
                        Add Requirements
                    </button>
                   
                    </div>


                    <div className="w-full px-3 mb-3 max-h-48  overflow-y-scroll">

                    {requirements && 
                    requirements.map((requirement,i)=> 
                        
                    <input onChange={(e)=>requireInputs(e,i)} name="username" placeholder="Enter Requirement"  type="email" className="rounded-lg border border-1 bg-transparent text-black text-sm placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 my-1 " />
                    )
                }

                    </div>



    <p className="font-me text-gray-600 text-base px-5" >Job Type</p> 


    <div className="w-full flex flex-wrap max-h-48 overflow-y-scroll my-3 px-2">
        {jobTypes.map(jobT=>
             <button onClick={()=>setJobType(jobT)} className={`text-sm ${jobT == jobType ? "text-indigo-700 border-indigo-700" : "text-gray-400" } text-gray-400 border py-2 px-5 rounded-2xl m-1 `}>
             {jobT}
         </button>
            )}
           
    </div>


    <div className="w-full flex flex-wrap">

<div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >No of Working Hours</label> 
    <input onChange={(e)=>inputChange(e)} name="workingHours" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

    <div className="text-gray-500 w-full lg:w-1/2 text-sm   text-left leading-relaxed my-3 px-4 ">
    <label className="font-me text-base px-3" >Salary Range / PA</label> 
    <input onChange={(e)=>inputChange(e)} name="salary_range" placeholder=""  type="email" className="rounded-lg border border-1 bg-transparent text-black font-me placeholder:text-gray-400   mt-1 focus:outline-none focus:ring-1 focus:border-indigo-700 focus:ring-indigo-700 focus:ring-opacity-900 py-4 px-5 w-full border-gray-200 mt-4 " />
    </div>

</div>


<div className="text-gray-500 w-full text-sm   text-left leading-relaxed my-3 px-4 ">
    {/* <label className="font-me text-base px-3" >Select Skills</label>  */}

    
    <div class="bg-white shadow p-2 flex">
        <span class="w-auto flex justify-end items-center text-gray-500 p-2">
            <i class="material-icons text-3xl">search</i>
        </span>
        <input class="w-full rounded p-2 text-sm focus:outline-none searchMeals" type="text" placeholder="Search Skill Tags "/>
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
                  
                    <button onClick={()=>settingSelectedSkills(skill.id)}  className={`text-xs ${selectedSkills.find(x=>x.tag == skill.id) ? "text-indigo-700 border-indigo-700" : "text-gray-400" } border py-1 px-3 rounded-2xl m-1 `}>
                    {skill.name}
                </button>
                    )

        }

          
        
    </div>
    </div>


                    
<div className="w-full flex mb-3 mt-4">
<div className="w-full lg:w-1/2 mx-auto mt-2">
        {
            addJob.isLoading ? 
        <div className="w-full flex h-24 items-center justify-center">
            <SmallLoader />
        </div>
            :

            <button className="py-3 w-full bg-indigo-700 text-white font-bold rounded-full" onClick={addingJob} >
            Submit Details
        </button>

        }
  
</div>
</div>



 


                    {/* <ValidationBoxes /> */}
      


    </div>
  </div>
</div>

     );
}
 
export default PostJobModal;