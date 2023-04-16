import { useRef } from "react";
import { useState } from "react";
import { SmallLoader, SmallSubmitLoader } from "../panel/universal/loaders";
import { useEffect } from "react";


function ValidationBoxes({codeLength=6,verifyingEmail}) {


  const [checked, setChecked] = useState(Array(codeLength).fill(false));
  const [values, setValues] = useState(Array(codeLength).fill(""));
  const inputs = useRef([]);

  const handleInput = (index, e) => {
    const value = e.target.value;

    // Handle backspace key
    if (e.keyCode === 8 && index > 0 && value === "") {
      inputs.current[index - 1].value = "";
      inputs.current[index - 1].focus();
      setValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index - 1] = "";
        return newValues;
      });
      setChecked((prevChecks) => {
        const newChecks = [...prevChecks]
        newChecks[index] = false;
        return newChecks
      })

      

    } else if (value.length > 0) {
      const newChecked = [...checked];
      newChecked[index] = true;
      setChecked(newChecked);
      setValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index] = value;
        return newValues;
      });
      inputs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    if (checked.every((value) => value === true)) {
        const verifyObj = {otp:values.join(""),email:localStorage.getItem("verify_email_jobai")}
        verifyingEmail.mutate(verifyObj)
    }
  };


  // useEffect(() => {
  //   if(verifyingEmail.isError){
  //     setValues(Array(codeLength).fill(""))
  //     console.log('isError')
  //   }
  // }, [verifyingEmail.isError]);
  


  const isDisabled = !checked.every((value) => value);



  return (


    <>
    


    <div className="flex justify-center">

{Array.from({ length: codeLength }, (_, i) => (

      <input
        type="text"
        key={i}
        maxLength={1}
        autoComplete="off"
        className="w-16 h-16 text-center font-bold text-lg text-gray-400 focus:outline-none focus:ring-1 focus:border-gray-400 focus:ring-indigo-700 focus:ring-opacity-900   border-2 border-gray-400 rounded-lg mx-1"
        ref={(el) => (inputs.current[i] = el)}
        // onBlur={handleSubmit}
        onKeyUp={(e) => handleInput(i, e)}
      />

      ))}


 

    </div>


    <div className="flex items my-6">

          {verifyingEmail.isLoading ? 
            <SmallSubmitLoader /> 

            :


            <button onClick={handleSubmit} className={`mx-auto border my-5  ${isDisabled ? 'text-gray-400 cursor-not-allowed' :  ' text-indigo-700 hover:text-white hover:bg-indigo-700 border-indigo-700'} font-bold py-4 px-6 rounded `}>Verify Email</button>
        
        }

</div>  


    

    </>


  );


}

export default ValidationBoxes;
