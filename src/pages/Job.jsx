import Navbar from "../components/panel/Navbar";
import SeekerNav from "../components/panel/Seeker/SeakerNav";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import EmployerNav from "../components/panel/Employer/EmployeerNav";

const Job = () => {
    
    const get_job = useLocation()
    const job = get_job.state


    const user = useSelector((state)=>state.user.user)

    return ( 
        <>

<Navbar />

<section className="max-w-screen-2xl mx-auto">



        {
            user.user_type == "Seeker" ?
            <SeekerNav />
            :
            <EmployerNav />
        }

        

        <div className="w-full flex flex-wrap">



            <div className="w-full lg:w-2/3 p-2">
        <div className="shadow border w-full rounded-2xl px-6 py-4">

                <p className="my-2 text-xl font-bold">
                {job.title}
                </p>

                <div className="flex justify-between pb-5 border-b">
                    <p> <span className="material-icons-outlined inline-flex align-middle mr-1">place</span> {job.company_details.state} , { job.company_details.country}   <span className="material-icons-outlined inline-flex align-middle ml-3 mr-1">business</span>  <span className="text-gray-600">  {job.company_details.company.name}</span> </p>
                    <div>

                    <span className="text-xs  border px-3 m-1 border-indigo-700 text-indigo-700  rounded-full py-1">
                    {job.work_type}

            </span>

            <span className="text-xs px-5 m-1 border border-gray-400 text-gray-600  rounded-full py-1">
            {job.salary_range}
            </span>


                    </div>

                </div>

                <p className="my-3 text-gray-600 text-sm">
                {job.company_details.company.description}

                </p>


                <p className="mt-6  font-bold">
            Job Description
                </p>

                <p className="my-3 text-gray-600 text-sm">
            {job.description}
                </p>


            {job.requirements &&

<>


                <p className="mt-6 mb-3 font-bold">
                Requirements
                </p>

                <ol className="text-gray-600 text-sm list-disc px-5 list-outside space-y-2" >
                    {job.requirements.map(requirement=>
                        <li>{requirement.requirement}</li>
                        )}
                </ol>

                </>
}



            {job.tags && 

        <div className="w-full flex flex-wrap my-6 pt-3 border-t">




        { job.tags.map(tag=>
<button className="px-3 font-bold  py-2 border  text-gray-400 m-1 text-xs rounded-full"> 
{tag.tag_details.name}
</button>   

     
)}

       
</div>

        }

        
                </div>
                </div>


                {
                    user.user_type == "Seeker" && 
         

            <div className="w-full lg:w-1/4 px-6 py-4 flex flex-col " >


               

                    <button className="py-4   rounded-full border border-indigo-700 text-indigo-700">

                        Apply

                        <span className="material-icons-outlined align-middle inline-flex ml-2">open_in_new</span>

                        <span className="text-xs font-bold py-1 px-3 bg-indigo-700 text-white rounded ml-2">I</span>

                    </button>


                    <button className="py-4 my-3   rounded-full border border-indigo-700 text-indigo-700">

Save

<span className="material-icons-outlined align-middle inline-flex ml-2">bookmark_border</span>

</button>


            </div>

}


        </div>

        </section>

        
        </>


     );
}
 
export default Job;