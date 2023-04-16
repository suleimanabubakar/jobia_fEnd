import { useState } from "react";
import { loginUser, registerUser } from "../../api/auth";
import { errorToast } from "../universal/toastify";
import LoginForm from "./login_form";
import SignUpForm from "./sign_up";
import ValidationBoxes from "./validation";
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../../features/auth_slice";

const AuthModal = ({openAuth,actionT="login"}) => {


    const dispatch = useDispatch()

    const [actionType,setActionType] = useState(actionT)

        const navigate = useNavigate();

        const signingUp = useMutation(registerUser,{
            onSuccess:(res)=>{
                  localStorage.setItem('verify_email_jobai',res.email)
                  navigate('/verify') 
            },
            onError:(e)=>{
                errorToast('Error, Try Again')
            }
    
        })


        const loginIn = useMutation(loginUser,{
          onSuccess:(res)=> {
              dispatch(login(res))
          },
          onError:()=> {
            errorToast('Invalid Credentials')
          }
        })



    return ( 


<div  
className={`  fixed z-10 inset-0 overflow-y-auto`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

 
    <div className={` inline-block align-middle bg-white rounded-3xl text-left relative overflow-hidden shadow-xl p-4 transform transition-all sm:my-8 w-full md:w-1/3 py-10 px-6 `} id="">
    

    <button className="w-12 h-12 text-indigo-700 absolute right-1 top-1 border border-indigo-700 rounded-full" onClick={()=>openAuth(false)}  ><span className="material-icons-outlined">close</span></button>
     




            <p className="text-gray-600 tFonts text-center text-2xl my-4">
                  Welcome {actionType == "login" && "Back"} To JOB <span className="text-white px-2 py-1 font-bold bg-indigo-600 text-xs rounded -mt-7">Ai</span> 
            </p>    

      

      {actionType == "login" ? 
      <LoginForm loginIn={loginIn} />
      :
      <SignUpForm signingUp={signingUp} />
      }
           


                

                  <div className="w-full text-right">
                  {actionType != "login" ? 
                    <p onClick={()=>setActionType('login')} className=" cursor-pointer text-indigo-700 my-4 font-bold px-3">Already Have An Account ? Log In</p>
                  :
                    <p onClick={()=>setActionType('signup')} className=" cursor-pointer text-indigo-700 my-4 font-bold px-3">Create New Account ? Sign Up</p>
                }
                    </div>


                    {/* <ValidationBoxes /> */}
      


    </div>
  </div>
</div>

     );
}
 
export default AuthModal;