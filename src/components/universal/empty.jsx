import nodata from "../../assets/images/nodata.png"
const NoData = ({title}) => {
    return ( 
        <div className="w-full flex flex-col justify-center items-center h-48 mt-24">
         
              <img src={nodata} alt="" className="w-96" />


                <p className="tFonts text-3xl text-gray-600">
                    No {title} Jobs
                </p>


                </div>

     );
}
 
export default NoData;