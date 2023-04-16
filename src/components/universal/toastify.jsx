
import Toastify from 'toastify-js'

import "toastify-js/src/toastify.css"




export const successToast = (msg) => {
Toastify({
        text: msg,
        className: "alert-block", 
        backgroundColor: "#4338ca",
        gravity: "bottom", // `top` or `bottom`
        position: "left", 
        style: {
            borderRadius:'5px',
            padding:"20px"
        }

}).showToast()
}


export const errorToast = (msg) => {
Toastify({
        text: msg,
        className: "alert-block", 
        backgroundColor: "#ef4444",
        gravity: "bottom", // `top` or `bottom`
        position: "left", 
        style: {
            borderRadius:'5px',
            padding:"20px"
        }
}).showToast()
}