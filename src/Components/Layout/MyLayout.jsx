import React from "react";
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Home from "../Home/Home";


function MyLayout({ children }
) {
    return(
            <div>
                <Navbar />
                    <main>{children} <Home/> </main>
                <Footer />  
            </div>
    )
}

export default MyLayout;
