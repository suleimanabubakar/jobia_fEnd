import EmployerHome from "../components/panel/Employer/EmployerHome";
import Navbar from "../components/panel/Navbar";
import SeekerHome from "../components/panel/Seeker/SeekerHome";
import { useSelector } from "react-redux";
import EmployerNav from "../components/panel/Employer/EmployeerNav";
const Home = () => {
    
    const user = useSelector((state)=>state.user.user)

    return ( 
        <>
        <Navbar />


        <section className="max-w-screen-2xl mx-auto">

                {user && 
                    user.user_type == "Seeker" ?
                    <SeekerHome />
                    :
                    <EmployerHome />
                }


       </section>

        

        </>
     );
}
 
export default Home;