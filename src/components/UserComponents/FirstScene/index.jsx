import './index.scss'
import image1 from "/src/assets/sari.png"
import image2 from "/src/assets/logo.png"
import image3 from "/src/assets/firstSceneImage.png"


function FirstScene() {
    return (
        <section id={"firstScene"}>
            <div className={"sariImage"}>
                <img src={image1} alt={"Image"} className={"sari"}/>
            </div>
            <img src={image2} alt={"Logo"} className={"logo"}/>
            <h2>15 GÜNDƏ SATIŞA HAZIR e-BAY MAĞAZANI QURMAĞI ÖYRƏDİRƏM</h2>
            <p>Əvvəla aşağıdakı videonu izləyin</p>
            <img src={image3} alt={"Image"} className={"firstSceneImage"}/>
            <button>Təlimə Qatıl</button>
        </section>
    );
}

export default FirstScene;