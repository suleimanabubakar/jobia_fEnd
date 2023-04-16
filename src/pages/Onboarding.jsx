import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import Employer from "../components/onboarding/employer";
import Seeker from "../components/onboarding/seeker";
import { errorToast, successToast } from "../components/universal/toastify";
import { success } from "../features/user_slice";
import { addingSeeker,addingCompany } from "../api/onboarding";
import { useMutation } from "react-query";

const OnBoarding = () => {


    const  navigate = useNavigate()
    const dispatch = useDispatch()
    
    const user = useSelector((state)=>state.user.user)

    const [accountType,setActionType] = useState('init')

        const addSeeker = useMutation(addingSeeker,{
            onSuccess:(res)=>{
                successToast('Profile Successfully Created')
                dispatch(success(res))
                navigate('/')
            },
            onError:(error)=>{
               errorToast(error.code)
            }
    
        })


        const addCompany = useMutation(addingCompany,{
            onSuccess:(res)=>{
                  successToast('Profile Successfully Created')
                dispatch(success(res))
                navigate('/')
            },
            onError:()=>{
                errorToast(error.code)
               
            }
    
        })

    return ( 

        <div className="w-full p-3 h-screen  mt-6">
            <div className="w-full lg:w-1/2 mx-auto rounded-3xl p-6 lg:p-10 shadow-lg">
        <Link to="/">
            <p className="self-center  border-b py-2 text-2xl my-3 font-semibold whitespace-nowrap text-gray-600 tFonts">JOB <span className="text-white px-2 py-1 font-bold bg-indigo-600 text-xs rounded -mt-7">Ai</span></p>
        </Link>


            <div className="w-full flex justify-between">

            <p className="text-gray-600 font-bold text-xl my-7">
                Welcome OnBoard {user && <span className="capitalize">{user.user.first_name} {user.user.last_name}</span> } 
            </p>



        {accountType != "init" &&

            <button onClick={()=>setActionType('init')} className="py-2 px-10 rounded-full bg-indigo-700 text-white font-bold capitalize">
                {accountType == "employer" ? "Company": "Talent"} Registration <span className="material-icons-outlined inline-flex align-middle">close</span>
            </button>
}


            </div>








            {accountType == "init" &&
          

            <div className="w-full flex flex-wrap p-2">

            <div className="w-full lg:w-1/2 p-3">
                    <div onClick={()=>setActionType('seeker')} className="w-full shadow px-3 py-10 rounded-2xl text-gray-400 border-2 border-gray-300 hover:border-indigo-700 hover:text-indigo-700 cursor-pointer font-bold">
                        <p className="text-center"><span className="material-icons-outlined align-middle text-[50px] inline-flex mr-2">supervised_user_circle</span> Talent</p>
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2 p-3">
                    <div onClick={()=>setActionType('employer')} className="w-full shadow px-3 py-10 rounded-2xl text-gray-400 border-2 border-gray-300 hover:border-indigo-700 hover:text-indigo-700 cursor-pointer font-bold">
                        <p className="text-center"> <span className="material-icons-outlined text-[50px]  align-middle inline-flex mr-2">business</span> Company</p>
                    </div>
                </div>
                
            </div>

                    }


            {accountType == "seeker" && 
            

          <Seeker addSeeker={addSeeker} />

            
            
            }

{accountType == "employer" && 
            

            <Employer addCompany={addCompany} />
  
              
              
              }
              
            
            


            </div>
        </div>

     );
}
 
export default OnBoarding;