import { useState, useEffect } from "react";
import './index.scss';
import image1 from "/src/assets/sari1.png";
import image2 from "/src/assets/wp1.png";
import image3 from "/src/assets/wp2.png";
import image4 from "/src/assets/wp3.png";
import image5 from "/src/assets/wp4.png";
import image6 from "/src/assets/wp5.png";

function SecondScene() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 992);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id={"secondScene"}>
            <div className={"sariImage"}>
                <img src={image1} alt={"Image"} className={"sari"} />
            </div>
            <button>Uğur hekayələri</button>
            <div className={"asdasd"}>
                <div className={"boxImageWrapper1"}>
                    <div className={"boxImage"}>
                        <img src={image2} alt={"Image"} />
                    </div>
                    <div className={"boxImage"}>
                        <img src={image4} alt={"Image"} />
                    </div>
                    {!isSmallScreen && (
                        <div className={"boxImage"}>
                            <img src={image6} alt={"Image"} />
                        </div>
                    )}
                </div>
                <div className={"boxImageWrapper2"}>
                    <div className={"boxImage"}>
                        <img src={image3} alt={"Image"} />
                    </div>
                    <div className={"boxImage"}>
                        <img src={image5} alt={"Image"} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecondScene;
