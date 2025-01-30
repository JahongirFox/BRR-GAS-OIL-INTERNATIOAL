import React from "react";
import './Home1.css'
function Home1() {
    return (
            <div className="Home">
            
                {/* <p className="Home-p">Закажите качественные моторные <br /> масла для своего производства</p> */}
                <p className="Home-p">КАЧЕСТВЕННЫЕ СМАЗОЧНЫЕ <br /> МАТЕРИАЛЫ И МОТОРНЫЕ МАСЛА <br /> ОТ БРЕНДОВ: SHELL, MOBIL, <br /> TATNEFT/TANECO</p>
                <div className="Home-Center">
                    <div className="flex-btn">
                        <button className="home-btn">Перейти к выбору</button>   
                        <button className="home-btn2">Связаться с нами</button>
                    </div>
                </div>

            </div>

    )
}

export default Home1;