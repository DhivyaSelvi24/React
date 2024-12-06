import React from "react";

function Result({secretnumber,term}){
let message;
if(term){
if(term<secretnumber){
    message="You guessed lower number";
 }
   else if(term>secretnumber){
message="You guessed higher number";
   } 
   else if(term==secretnumber){
    message=<h4 >"Great!!! You guessed the correct answer 🎉"</h4>
   }
   else{
message="Enter valid input"
   }
}
return(
    <>
 <h5>{message}</h5>
    </>
        
)

   
}
export default Result ;