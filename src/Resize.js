import { useState, useEffect } from "react";

const Resize = () => {

    const [isPortrait, setIsPortrait] = useState(window.innerWidth > window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
        setIsPortrait(window.innerWidth > window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isPortrait;
};

export default Resize;