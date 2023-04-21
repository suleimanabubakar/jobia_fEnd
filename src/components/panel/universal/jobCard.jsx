import { Link } from "react-router-dom";
const JobCard = ({job}) => {
    return ( 
        <div className="shadow my-1 border w-full rounded-2xl px-6 py-4">
        
        <Link to={`/job/${job.id}`} state={job} >
        <p className="text-2xl font-bold"  ><span className="">{job.title}</span> <span className="text-gray-600">in <span className="capitalize">{job.company_details.state} , { job.company_details.country}</span></span></p>
        </Link>
       

        <p className="my-3" >
            <span className="text-xs  border px-3 m-1 border-indigo-700 text-indigo-700  rounded-full py-1">
                {job.work_type}
            </span>

            <span className="text-xs px-5 m-1 border border-gray-400 text-gray-600  rounded-full py-1">
                {job.salary_range}
            </span>

            <span className="ml-3 font-bold text-gray-500">
                <span className="material-icons-outlined inline-flex align-middle mr-2">
                business
                </span>

                {job.company_details.company.name}
            </span>


          


        </p>

        {job.for_disabled && 
            <div className="w-full flex items-end justify-end">
                <button className="border border-indigo-700 rounded-full px-3 py-2" >
                <span className="material-icons-outlined text-indigo-700">accessible</span>
                </button>
                
            </div>
                
            }



        <p className="my-5 text-gray-500">
    {job.company_details.company.description}
        </p>


        <div className="w-full flex flex-wrap pb-4">


        {job.tags.map(tag=>
                   <button className="px-3 font-bold  py-2  bg-gray-100 text-gray-500 m-1 text-xs rounded-full">
                   {tag.tag_details.name}
           </button>   
            
            )}

 
                    
        </div>
        

        </div>
     );
}
 
export default JobCard;