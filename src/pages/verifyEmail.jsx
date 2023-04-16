import { activateUser, resendCode } from "../api/auth";
import ValidationBoxes from "../components/auth/validation";
import { errorToast, successToast } from "../components/universal/toastify";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth_slice";
import { useDispatch } from "react-redux";
import { SmallLoader } from "../components/panel/universal/loaders";

const VerifyEmail = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const verifyingEmail = useMutation(activateUser,{
        onSuccess:(res)=>{
            successToast('Email Successfully Verified')
            localStorage.removeItem('verify_email_jobai')
            dispatch(login(res))
            navigate('/')
        },
        onError:(e)=>{
           errorToast('Invalid Token')
        }

    })


    const resendToken = useMutation(resendCode,{
        onSuccess:(res)=>{
            successToast('Verifation Code Successfully Sent')
        },
        onError:(e)=>{
           errorToast('Error, Try Again')
        }
    })

    return ( 

        <div className="w-full p-3 h-screen overflow-y-hidden mt-6">
            <div className="w-full lg:w-1/3 mx-auto rounded-3xl p-6 lg:p-10 shadow-lg">
            <p className="self-center  border-b py-2 text-2xl my-3 font-semibold whitespace-nowrap text-gray-600 tFonts">JOB <span className="text-white px-2 py-1 font-bold bg-indigo-600 text-xs rounded -mt-7">Ai</span></p>

            <p className="text-gray-600 font-bold text-xl my-7">
               Enter Verification Code
            </p>


            <ValidationBoxes verifyingEmail={verifyingEmail} />



            

            <div className="w-full flex justify-end">
                {
                    resendToken.isLoading ? 
                    <SmallLoader />
                    :
                    <p onClick={()=>resendToken.mutate({email:localStorage.getItem('verify_email_jobai')})} className="text-right font-bold text-indigo-700 text-sm w-full cursor-pointer">
                    Resend Verification Code ?
                </p>
                }
       
            </div>



            </div>
        </div>

     );
}
 
export default VerifyEmail;