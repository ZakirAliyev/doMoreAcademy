import './index.scss'
import image1 from "/src/assets/sari1.png"
import image2 from "/src/assets/logo.png"
import image4 from "/src/assets/ring.png"
import {useNavigate} from "react-router";


function ThirdScene() {

    const navigate = useNavigate();

    return (
        <section id={"thirdScene"}>
            <div className={"sariImage"}>
                <img src={image1} alt={"Image"} className={"sari"}/>
            </div>
            <img src={image2} alt={"Logo"} className={"logo"}/>
            <div className={"box"}>
                <div className={"posi"}>15 gündə satış et</div>
                <div className={"imageWrapper"}>
                    <img src={image4} alt={"Image"}/>
                    <div className={"textWrapper"}>
                        <div className={"compareAtPrice"}>800.00 ₼</div>
                        <div className={"price"}>399.00 ₼</div>
                    </div>
                </div>
                <p>Video dərs</p>
                <p>Bu proqram ən sürətli şəkildə satışa hazır olmağın üçün hazırlandı.</p>
                <div className={"row"}>
                    <div className={"box1 col-6 col-md-7 col-sm-12 col-xs-12 sagdan"}>
                        <img src={image4} alt={"Image"} className={"ring"}/>
                        <div className={"p"}>Peşəkar eBay Satıcı Hesabının Qurulması</div>
                    </div>
                    <div className={"box1 col-6 col-md-7 col-sm-12 col-xs-12 soldan"}>
                        <img src={image4} alt={"Image"} className={"ring"}/>
                        <div className={"p"}>Təchizatçı Hesablarının Yaradılması</div>
                    </div>
                    <div className={"box1 col-6 col-md-7 col-sm-12 col-xs-12 sagdan"}>
                        <img src={image4} alt={"Image"} className={"ring"}/>
                        <div className={"p"}>Sifarişlərin İdarə Edilməsi Sistemi</div>
                    </div>
                    <div className={"box1 col-6 col-md-7 col-sm-12 col-xs-12 soldan"}>
                        <img src={image4} alt={"Image"} className={"ring"}/>
                        <div className={"p"}>Ömürlük Texniki və Biznes Dəstəyi</div>
                    </div>
                    <div className={"box1 col-6 col-md-7 col-sm-12 col-xs-12 sagdan"}>
                        <img src={image4} alt={"Image"} className={"ring"}/>
                        <div className={"p"}>Ömür Boyu Yenilənən Təlim Materiallarına Giriş</div>
                    </div>
                    <div className={"box1 col-6 col-md-7 col-sm-12 col-xs-12 soldan"}>
                        <img src={image4} alt={"Image"} className={"ring"}/>
                        <div className={"p"}>Strategiya, məhsul seçimi, rəqabət analizinin öyrədilməsi</div>
                    </div>
                </div>
                <button onClick={()=> {
                    navigate('/payment')
                }}>
                    <div className={"birinci"}>Təlimə qatılmaq üçün kliklə</div>
                    <div className={"ikinci"}>15 gündə satış et</div>
                </button>
                <div className={"axirinci"}>Bu proqram ən sürətli şəkildə satışa hazır olmağın üçün quruldu. Alacağın nəticə öz əməyindən
                    asılıdır.
                </div>
            </div>
            <div className={"sariImage1"}>
                <img src={image1} alt={"Image"} className={"sari"}/>
            </div>
        </section>
    );
}

export default ThirdScene;