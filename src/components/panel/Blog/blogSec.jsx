import { fetchingBlogs } from "../../../api/home";
import SeekerNav from "../Seeker/SeakerNav";
import { MainLoader } from "../universal/loaders";
import { useQuery } from "react-query";
import TextWithWordLimit from "../../universal/limitWords";
import { Link } from "react-router-dom";

const BlogSection = () => {

    const blogs = useQuery('blogs_data',
    fetchingBlogs, {
        staleTime:10000
    }
)


    return ( 

        <>

        <SeekerNav />
        

        {blogs.isLoading ? 

 

        <div className="w-full flex h-48 items-center justify-center">
            <MainLoader />
        </div>   

:


        <div className="w-full flex flex-wrap">


                {blogs.data && 
                    blogs.data.map(blog=> 
                        
               

            <div className="w-full lg:w-1/4 p-3">

                <Link to="/blog" state={blog} >

           

                <div className="w-full rounded-lg py-4 px-6 shadow">

                {
                    blog.image && 
                <img src={blog.image} alt="" class="w-full rounded-3xl object-cover h-32 sm:h-48 md:h-64 mb-3" />
                }


                        <p className=" font-bold text-sm pb-2 border-b">{blog.title}</p>
                        <div className="text-gray-500 py-4 text-xs">
                           <TextWithWordLimit text={blog.description} />
                        </div>

                        {blog.tags && blog.tags.length > 0 &&

                        <div className="border-t py-2">

                            {blog.tags.map(tag=> 
                            
<button className="px-3 font-bold  py-2  bg-gray-100 text-gray-500 m-1 text-xs rounded-full">
                    {tag.tag}
            </button>   

)}
                            </div>
                        }

                            
                
    
                        </div>


                        </Link>

                </div>
            


)
}

        </div>


}


        </>

     );
}
 
export default BlogSection;