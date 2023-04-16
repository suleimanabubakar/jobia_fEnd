import JobCard from "../universal/jobCard";
import SeekerNav from "./SeakerNav";
import { fetchingCompanyJobs, fetchingJobs } from "../../../api/job";
import { fetchingTags } from "../../../api/tags";
import { SmallLoader } from "../universal/loaders";
import { useQuery } from "react-query";
import { MainLoader } from "../universal/loaders";

const SeekerHome = () => {

    const jobs = useQuery('jobs_data',
    fetchingJobs, {
        staleTime:10000
    }
)


const skills = useQuery('skill_data',
fetchingTags, {
    staleTime:10000
}
)   

    return ( 
        <>
        <SeekerNav />


        <div className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/4 p-2">
                <div className="shadow border w-full rounded p-3">
                    <p className="text-gray-600 my-3">
                        CATEGORIES
                    </p>




            {skills.isLoading ? 
              <div className="w-full flex h-24 justify-center items-center">
              <SmallLoader />
          </div>
          :
          <div className="w-full flex flex-wrap">
            {skills.data && skills.data.map(skill=>
                     <button className="px-5 font-bold  py-2 border-2 text-gray-400 m-1 text-xs rounded-full">
                     {skill .name}
             </button>
                )}
     

          </div>

  

        }



</div>
  </div>
                 




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

                </div>


        </div>

        </>
     );
}
 
export default SeekerHome;