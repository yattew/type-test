import { useEffect,useState } from "react";
function useIsActive(id){
    const [active,setActive] = useState(false);
    useEffect(()=>{
        if(document.activeElement.id == id)
        {
            setActive(true);
        }
        else{
            setActive(false);
        }
    },[document.activeElement]);
    useEffect(()=>{
        if(document.activeElement.id == id)
        {
            setActive(true);
        }
    },[]);
    return active;
}

export default useIsActive;