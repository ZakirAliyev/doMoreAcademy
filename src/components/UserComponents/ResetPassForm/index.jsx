import './index.scss'
import image1 from "../../../assets/sari1.png";
import image2 from "../../../assets/logo.png";

function ResetPassForm() {
    return (
        <section id={"resetPassForm"}>
            <div className={"sariImage"}>
                <img src={image1} alt={"Image"} className={"sari"}/>
            </div>
            <img src={image2} alt={"Logo"} className={"logo"}/>
            <div className={"loginBox"}>
                <div className={"h3"}>Şifrənizi yeniləyin</div>
                <p>Hesabınıza giriş üçün yeni bir şifrə yaradın</p>

                <div className={"label"}>Yeni şifrə</div>
                <input placeholder={"Yeni şifrənizi daxil edin"}/>
                <div className={"label"}>Yenidən daxil edin</div>
                <input placeholder={"Yeni şifrənizi təkrar daxil edin"}/>
                <button>Təsdiqlə</button>
            </div>
        </section>
    );
}

export default ResetPassForm;