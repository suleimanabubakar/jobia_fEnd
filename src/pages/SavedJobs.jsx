import Navbar from "../components/panel/Navbar";
import SeekerNav from "../components/panel/Seeker/SeakerNav";
import NoData from "../components/universal/empty";

const SavedJobs = () => {
    return ( 
        <>
            <Navbar />

        <section className="max-w-screen-2xl mx-auto">

            <SeekerNav />

            


            <NoData title="Saved" />





        </section>
            

        </>
     );
}
 
export default SavedJobs;