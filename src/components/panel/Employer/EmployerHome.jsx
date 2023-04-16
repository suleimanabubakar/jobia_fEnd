import EmployerNav from "./EmployeerNav";
import JobCard from "../universal/jobCard";
import PostJobModal from "./postJobModal";
import { useState } from "react";
import { useMutation } from "react-query";
import { addJob, fetchingCompanyJobs } from "../../../api/job";
import { errorToast, successToast } from "../../universal/toastify";
import { MainLoader } from "../universal/loaders";
import { useQuery } from "react-query";
const EmployerHome = () => {

    const [openModal,setOpenModal] = useState(false)


       const jobs = useQuery('jobs_data',
        fetchingCompanyJobs, {
            staleTime:10000
        }
    )
    

    const addingJob = useMutation(addJob,{
        onSuccess:(res)=>{
            setOpenModal(false)
            successToast('Job Successfully Added')
            jobs.refetch()
        },
        onError:(e)=>{
            errorToast(e.code)
        }

    })
    

    return ( 
        <>
    <EmployerNav />


<div className="w-full flex flex-wrap">

<div className="w-full lg:w-2/3 p-2">

        {jobs.isLoading ? 
        <div className="w-full flex h-48 items-center justify-center">
            <MainLoader />
        </div>   
        :
        jobs.data && 
        jobs.data.map(job=>
                <JobCard job={job} />
            ) 

    }

      {/* <JobCard />    */}
        </div>

    <div className="w-full lg:w-1/4 p-2">

    <button className="py-4  w-full rounded-full border border-indigo-700 text-indigo-700"   onClick={()=>setOpenModal(true)}  >



<span className="material-icons-outlined align-middle inline-flex mr-2">add</span> Post A Job



</button>



<div className="w-full py-4 px-2">
        <div className="w-full p-5 rounded-2xl shadow-lg">
            <div className="flex items-center">
                <div className="bg-indigo-700 w-12 h-12 flex justify-center items-center rounded-xl text-white">
                    <span className="material-icons-outlined">
                        work
                    </span>
                </div>
                <p className="text-gray-600 ml-2">
                    Active Jobs
                </p>
            </div>

            <div className="w-full py-2 text-right font-bold text-gray-500">
                <p className="text-2xl">0</p>
            </div>

        </div>
</div>


<div className="w-full py-4 px-2">
        <div className="w-full p-5 rounded-2xl shadow-lg">
            <div className="flex items-center">
            <div className="bg-indigo-700 w-12 h-12 flex justify-center items-center rounded-xl text-white">

                    <span className="material-icons-outlined">
                        people
                    </span>
                </div>
                <p className="text-gray-600 ml-2">
                    New Applicants
                </p>
            </div>

            <div className="w-full py-2 text-right font-bold text-gray-500">
                <p className="text-2xl">0</p>
            </div>

        </div>
</div>


    </div>




</div>


{openModal
    &&
<PostJobModal addingJob={addingJob} openModal={setOpenModal} />
}

</>
     
     );
}
 
export default EmployerHome;