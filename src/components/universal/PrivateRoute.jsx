import { useState,useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { refresh_token } from "../../api/auth";
import { login, logout } from "../../features/auth_slice";
import { success } from "../../features/user_slice";
import { FullPageLoader } from "../panel/universal/loaders";
import { get_token } from "../../universal";


function PrivateRoute({ path, ...props }) {

    const [runFetch,useRunFetch] = useState(false)
    const [renderC,setRenderC] = useState(false)

    const token = get_token()

    const dispatch = useDispatch()

    const current_location = useLocation()

    const current_page = current_location.pathname


    const fetchingUser = useQuery('user_data',refresh_token,{
        enabled:runFetch,
        onSuccess:(res)=>{
            dispatch(login({key:`${token}`}))
            dispatch(success(res))
            useRunFetch(false)
            setRenderC(true)
        },
        onError:()=>{
            dispatch(logout())
            useRunFetch(false)
            setRenderC(true)
        }

    },)


    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state)=> state.user.user);

    
    useEffect(() => {

        if(!user && token) {
            useRunFetch(true)
            console.log('tokenfound')
        }else{
            console.log('not to run')
            setRenderC(true)
        }
    }, []);



    

    return (

        ! renderC ?
        <FullPageLoader />
        :
       ! isAuthenticated ?
       <Navigate to="/landing" />
        :
        !user.user_type ?
        current_page == "/onboarding" ? <Outlet /> :
        <Navigate to="/onboarding" />
        :
        current_page == "/onboarding" ?
        <Navigate to="/" />
        :
        <Outlet />
        // !user.user_type ?
        //     current_page == '/onboarding' ? <Outlet /> : <Navigate to="/" />
        // : 
        // current_page == '/onboarding' ? <Navigate to="/" /> : <Outlet />
     


    )

 

}


export default PrivateRoute