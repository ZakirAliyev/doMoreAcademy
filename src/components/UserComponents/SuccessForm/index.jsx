import './index.scss'
import image1 from "../../../assets/sari1.png";
import image2 from "../../../assets/logo.png";
import image3 from "../../../assets/successPage.png";
import {useNavigate} from "react-router";

function SuccessForm() {

    const navigate = useNavigate();

    return (
        <section id={"successForm"}>
            <div className={"sariImage"}>
                <img src={image1} alt={"Image"} className={"sari"}/>
            </div>
            <img src={image2} alt={"Logo"} className={"logo"}/>
            <img src={image3} alt={"Image"} className={"successImage"}/>
            <button onClick={()=> {
                navigate("/");
            }} className={"anaButton"}>Ana səhifəyə qayıt</button>
        </section>
    );
}

export default SuccessForm;