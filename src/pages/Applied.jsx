import Navbar from "../components/panel/Navbar";
import SeekerNav from "../components/panel/Seeker/SeakerNav";
import NoData from "../components/universal/empty";

const AppliedJobs = () => {
    return ( 
        <>
        <Navbar />

    <section className="max-w-screen-2xl mx-auto">

        <SeekerNav />

        



        <NoData title="Applied" />
            



    </section>
        

    </>
     );
}
 
export default AppliedJobs;