import './index.scss'
import image1 from "../../../assets/sari1.png";
import image2 from "../../../assets/logo.png";
import image3 from "../../../assets/failedImage.png";
import {useNavigate} from "react-router";

function FailedForm() {

    const navigate = useNavigate();

    return (
        <section id={"failedForm"}>
            <div className={"sariImage"}>
                <img src={image1} alt={"Image"} className={"sari"}/>
            </div>
            <img src={image2} alt={"Logo"} className={"logo"}/>
            <img src={image3} alt={"Image"} className={"successImage"}/>
            <button onClick={()=> {
                navigate("/payment");
            }} className={"anaButton"}>Yenidən cəhd et</button>
        </section>
    );
}

export default FailedForm;