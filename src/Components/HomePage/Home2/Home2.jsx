import React from "react";
import './Home2.css'
import One from './921-600.jpg'
import Two from './backimg2.jpg'
import logooo from './logooo.png'


function Home2() {
    return(
        <div className="Home2"> 
            <p>Наша компания:</p>
            <div className="Block-Gap">
                <div className="Home2-Flex">
                    <div className="Home2-card1">
                            <img width={"500px"} src={One} alt="" />
                            <p>Предлагает свои услуги клиентам, <br /> которые нуждаются в качественном <br /> смазочном материале для техники</p>
                    </div>
                    <div className="Home2-card11">
                        <div className="Flex-image">
                            <img width={"120px"} src={logooo} alt="" />
                        </div>
                        <p>BRR GAS OIL <br /> INTERNATIONAL</p>
                    </div>
                    <div className="Home2-card1">
                            <img width={"500px"} src={Two} alt="" />
                            <p>Дает рекомендации по технике <br /> использования масла, его замене и <br /> уходу за техникой
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home2;