import './index.scss'
import image1 from "../../../assets/sari1.png";
import image2 from "../../../assets/logo.png";

function ForgotPassForm() {
    return (
        <section id={"forgotPassForm"}>
            <div className={"sariImage"}>
                <img src={image1} alt={"Image"} className={"sari"}/>
            </div>
            <img src={image2} alt={"Logo"} className={"logo"}/>
            <div className={"loginBox"}>
                <div className={"h3"}>Şifrəni unutmusunuz?</div>
                <p>E-poçtunuzu daxil edin. Şifrəni sıfırlamaq üçün təsdiq linki sizə e-poçt vasitəsilə göndəriləcək.</p>

                <div className={"label"}>E-poçt</div>
                <input placeholder={"E-poçt ünvanınızı daxil edin"}/>
                <button>Giriş linkini göndər</button>
            </div>
        </section>
    );
}

export default ForgotPassForm;