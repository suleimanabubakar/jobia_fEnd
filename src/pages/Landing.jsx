import Navbar from "../components/landing/Navbar";
import Unsearch from "../assets/images/searching_jobs.png"
import HomeImage from '../assets/images/world.png'
import Seeker from '../assets/images/seekers.png'
import Recruiter from '../assets/images/recruiters.png'
import AuthModal from "../components/auth/authModal";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { get_token } from "../universal";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LandingPage = () => {

  const dispatch = useDispatch()    

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const token = get_token()

    const [openAuthModal,setOpenAuthModal] = useState(false)


    if(isAuthenticated || token) {
      return  <Navigate to={'/'} />
      }
    



    return ( 
        <>
        <Navbar openAuth={setOpenAuthModal} />

        <section className="max-w-screen-2xl mx-auto">
        <div className="h-screen flex flex-wrap items-center w-full px-2 lg:px-4 pb-4 border-b" >

          <div className="w-full lg:w-1/2 px-3 ">


                    <h1 className="font-bold text-black h1 tFonts" >Find Jobs <br /> That Fits You . </h1>

                    <p className="text-gray-600 text-lg my-3">
                Where Job Seekers & Employers Connect based on: 
                    </p>

                    <div className="w-full">

                        <div className="flex flex-wrap my-4" >
                        <p className="bg-indigo-700 m-1 text-white rounded-full py-3 px-5 font-bold">
                                Locations
                        </p>

                        <p className="bg-indigo-700 m-1 text-white rounded-full py-3 px-5 font-bold">
                                Experience
                        </p>

                        <p className="bg-indigo-700 m-1 text-white rounded-full py-3 px-5 font-bold">
                                Flexibility
                        </p>

                        <p className="bg-indigo-700 m-1 text-white rounded-full py-3 px-5 font-bold">
                                Career Interests
                        </p>
                        </div>

                       

                    </div>

          </div>


          <div className="w-full lg:w-1/2 px-3">
                   <img src={HomeImage} alt="" className="" />
          </div>





        </div>


        <div className="w-full flex flex-wrap items-center border-b">

        <div className="w-full lg:w-1/2 px-3">
                   <img src={Seeker} alt="" className="w-[80%]"/>
          </div>

          <div className="w-full lg:w-1/2 px-10">
            <p className="text-black tFonts my-6">
                Got Talent ?
            </p>


            <p className="text-black tFonts text-3xl">
                Why For Job Seekers
            </p>


            <div className="text-gray-600 my-6">

            <p className="my-3" >Get Employed from Anywhere in the World</p>
            <p className="my-3" >Boost Your Career by earning more skills related  to your field</p>
            <p className="my-3">People with Disabilities can also be Employed</p>
            <p className="my-3">Earn tech skills relating to your field or interests </p>
            </div>


          </div>

        </div>


        <div className="w-full flex flex-wrap items-center">



  <div className="w-full lg:w-1/2 px-10">
    <p className="text-black tFonts my-6">
        Want a Talent ?
    </p>


    <p className="text-black tFonts text-3xl">
        Why For Recruiters
    </p>


    <div className="text-gray-600 my-6">

    <p className="my-3" >Responsive and startup-ready candidates, with all the information you need to vet them</p>
    <p className="my-3" >Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free</p>
    <p className="my-3">Applications Can be customized to each Candidate</p>
    </div>


  </div>

  <div className="w-full lg:w-1/2 px-3">
           <img src={Recruiter} alt="" className="w-[80%]"/>
  </div>

</div>
        
        </section>


    <section className="max-w-screen-2xl mx-auto border-t p-3 " > 

        <div className="w-full pt-4  pb-10 mb-10">

        <a href="" className="flex items-center font-bold">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-600 tFonts"> <Link to="/" >JOB</Link>  <span className="text-white px-2 py-1 font-bold bg-indigo-600 text-xs rounded -mt-7">Ai</span> 

        

        </span>  <span className="ml-3 text-sm text-gray-600">© 2023</span>
    </a>




        </div>

    </section>


    
{openAuthModal && 
    <AuthModal openAuth={setOpenAuthModal} />
}


        </>
     );
}
 
export default LandingPage;