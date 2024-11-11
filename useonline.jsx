

import { useState, useEffect } from "react";
const Useonlines = () => {

    const [online, setisonline] = useState(true);

    const handleonline = () => {
        setisonline(true);
    }
    const handleOffline = () => {
        setisonline(false);
    }
    useEffect(() => {
        window.addEventListener("online", handleonline)
        window.addEventListener("offline", handleOffline)

        return () => {
            window.removeEventListener("online", handleonline)
            window.removeEventListener("offline", handleonline)
        }
    }, [])

    return online
    
}
export default Useonlines 