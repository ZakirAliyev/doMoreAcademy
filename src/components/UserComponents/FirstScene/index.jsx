import {useRef} from "react";
import './index.scss'
import image1 from "/src/assets/sari.png"
import image2 from "/src/assets/logo.png"

function FirstScene() {
    const videoRef = useRef(null);

    return (
        <section id={"firstScene"}>
            <div className={"sariImage"}>
                <img src={image1} alt={"Image"} className={"sari"}/>
            </div>
            <img src={image2} alt={"Logo"} className={"logo"}/>
            <p>15 GÜNDƏ SATIŞA HAZIR e-BAY MAĞAZANI QURMAĞI ÖYRƏDİRƏM</p>
            <p className={"peyser"}>Əvvəla aşağıdakı videonu izləyin</p>

            <div className="video-container">
                <iframe
                    ref={videoRef}
                    className="firstSceneVideo"
                    src="https://www.youtube.com/embed/1YLgU9dFYlg?si=NO5HMnuGCSkOUMDG"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>

            <button
                onClick={() => {
                    const section = document.getElementById("thirdScene");
                    if (section) {
                        section.scrollIntoView({behavior: "smooth"});
                    }
                }}
            >
                Təlimə Qatıl
            </button>
        </section>
    );
}

export default FirstScene;
