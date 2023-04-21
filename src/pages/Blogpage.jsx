import { useLocation } from "react-router-dom";
import Navbar from "../components/panel/Navbar";
import SeekerNav from "../components/panel/Seeker/SeakerNav";



const BlogPage = () => {
    
    const get_blog = useLocation()

    const blog = get_blog.state

    return ( 
        <>
        <Navbar />


        <section className="max-w-screen-2xl mx-auto">

       
        <SeekerNav />


        <div className="w-full my-3 p-3 ">


        {
                    blog.image && 
                <img src={blog.image} alt="" class="w-full rounded-3xl object-cover h-32 sm:h-48 md:h-64 mb-3" />
                }


<p className=" font-bold text-3xl pb-2  my-3">{blog.title}</p>

{blog.tags && blog.tags.length > 0 &&
                        <div className="border-t border-b py-4">

                            {blog.tags.map(tag=> 
                            
<button className="px-3 font-bold  py-2  bg-gray-100 text-gray-500 m-1 text-xs rounded-full">
                    {tag.tag}
            </button>   

)}
                            </div>
                        }



<div className="text-gray-500 py-4 text-sm">
                {blog.description}
</div>




        </div>



      

</section>
</>
     );
}
 
export default BlogPage;