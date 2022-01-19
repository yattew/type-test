import { useEffect, useState } from "react";
function useIsActive(id) {
    const [active, setActive] = useState(true);
    function activeCheck() {
        if (document.activeElement.id !== id) {
            setActive(false);
        }
        else {
            setActive(true);
        }
    }
    useEffect(() => {
        document.addEventListener("click", activeCheck);
        return ()=>{document.removeEventListener("click",activeCheck)};
    }, []);
    return active;
}

export default useIsActive;