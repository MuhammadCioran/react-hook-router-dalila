import React from 'react'
import StickyFooter from 'react-sticky-footer';
import { FcFilmReel } from "react-icons/fc";
const FooterApp = () => {
    return (
<>
<StickyFooter
    bottomThreshold={50}
    normalStyles={{
        background:"linear-gradient(hsl(30 10% 10% / 0.4),hsl(40 0% 0% / 0.5) 30%,hsl(0 0% 0% / 1)) ",
        color:"white",
        padding: "2rem"
    }}
    
    stickyStyles={{
        backgroundColor: "hsl(30 10% 10% / 0.4)",
        color:"white",
        padding: "2rem"
    }}
>
<FcFilmReel size={40}/> Movie App IN GO MY CODE GAFSA  
            {' '}&copy;{new Date().getFullYear()} 
                <b>|| All Rights Reserved </b>
</StickyFooter>

</>
    )
}
export default FooterApp
