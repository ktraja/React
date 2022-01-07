import { useCallback } from "react";
import { useState } from "react/cjs/react.development";

function useHttp(){

  const [isLoading,setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest =  useCallback( async (configDetails,applyData) => {

    setIsLoading(true);
    setError(false);

    try{ 
        const response = await  fetch(configDetails.url,
          {method: configDetails.method ? configDetails.method : 'GET',
          body: configDetails.body ? JSON.stringify(configDetails.body) : null,
          headers: configDetails.headers ? configDetails.headers :  {}     
         });
       
        if (!response.ok) { 
            throw new Error('Http Request Failed!')
          };
          const data = await response.json();
          applyData(data);
          setIsLoading(false);
      }
    
      catch (err) {
        setError(err.message || 'Something went wrong.')
      }
   
  },[]);
  
  return {
    isLoading,
    error,
    sendRequest
    }
};
    
export default useHttp;