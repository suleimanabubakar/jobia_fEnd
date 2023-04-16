import SeekerNav from "../Seeker/SeakerNav";

const BlogSection = () => {
    return ( 

        <>

        <SeekerNav />
        

        <div className="w-full flex flex-wrap">

            <div className="w-full lg:w-1/4 p-3">
                <div className="w-full rounded-lg py-4 px-6 shadow">
                        <p className=" font-bold text-sm pb-2 border-b">Getting Started  In UI</p>
                        <p className="text-gray-500 py-4 text-xs">
                            Getting Started With UI/UX Is Required Based on Multiple Sources
                        </p>
                        <div className="border-t py-2">
                        <button className="px-3 font-bold  py-2  bg-gray-100 text-gray-500 m-1 text-xs rounded-full">
                    PHP
            </button>   
            <button className="px-3 font-bold  py-2  bg-gray-100 text-gray-500 m-1 text-xs rounded-full">
                    React
            </button> 
            <button className="px-3 font-bold  py-2  bg-gray-100 text-gray-500 m-1 text-xs rounded-full">
                    Javascript
            </button> 
                        </div>
                </div>
            </div>


            <div className="w-full lg:w-1/4 p-3">
                <div className="w-full rounded-lg py-4 px-6 shadow">

                <img src="https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd" alt="People" class="w-full rounded-3xl object-cover h-32 sm:h-48 md:h-64 mb-3" />


                        <p className=" font-bold text-sm pb-2 border-b">Black In Tech</p>
                        <p className="text-gray-500 py-4 text-xs">
                            Getting Started With UI/UX Is Required Based on Multiple Sources
                        </p>
                        <div className="border-t py-2">
                        <button className="px-3 font-bold  py-2  bg-gray-100 text-gray-500 m-1 text-xs rounded-full">
                    PHP
            </button>   
            <button className="px-3 font-bold  py-2  bg-gray-100 text-gray-500 m-1 text-xs rounded-full">
                    React
            </button> 
            <button className="px-3 font-bold  py-2  bg-gray-100 text-gray-500 m-1 text-xs rounded-full">
                    Javascript
            </button> 
                        </div>
                </div>
            </div>


        </div>


        </>

     );
}
 
export default BlogSection;