import React from "react";
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import HomePage from '../HomePage/Main/Main'


function MyLayout({ children }
) {
    return(
            <div>
                <Navbar />
                    <HomePage />
                <Footer />  
            </div>
    )
}

export default MyLayout;
