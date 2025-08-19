import './index.scss'
import image1 from "/src/assets/payment1.png"
import image2 from "/src/assets/payment2.png"
import image3 from "/src/assets/sari1.png"
import {FaArrowRightLong} from "react-icons/fa6";
import logo from "/src/assets/logo.png"

function Payment() {
    return (
        <section id={"payment"}>
            <div className={"container"}>
                <button>Ödəmə</button>

                <div className={"row"}>
                    <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <div className={"top"}>
                                <span>Əlaqə məlumatı</span>
                                <div className={"line"}></div>
                            </div>
                            <div className={"inputWrapper"}>
                                <label>Ad</label>
                                <input placeholder={"Adınızı daxil edin"}/>
                            </div>
                            <div className={"inputWrapper"}>
                                <label>Soyad</label>
                                <input placeholder={"Soyadınızı daxil edin"}/>
                            </div>
                            <div className={"inputWrapper"}>
                                <label>Telefon nömrəsi</label>
                                <input placeholder={"xxx xxx xx xx"}/>
                            </div>
                            <div className={"inputWrapper"}>
                                <label>E-poçt</label>
                                <input placeholder={"E-poçt ünvanınızı daxil edin"}/>
                            </div>
                            <div className={"inputWrapper1"}>
                                <input type={"checkbox"}/>
                                <span>Mən marketinq və kommunikasiya e-poçtlarını almağa razıyam.</span>
                            </div>
                            <div className={"line1"}></div>
                            <div className={"row"}>
                                <div className={"box2 col-6"} style={{
                                    paddingRight: 2,
                                }}>
                                    <img src={image1} alt={"Image"}/>
                                    <div className={"yazi"}>Dərhal Giriş əldə edin</div>
                                </div>
                                <div className={"box2 col-6"} style={{
                                    paddingLeft: 2,
                                }}>
                                    <img src={image2} alt={"Image"}/>
                                    <div className={"yazi"}>100% Təhlükəsiz Alış-veriş</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <div className={"top"}>
                                <span>Sifariş xülasəsi</span>
                                <div className={"line"}></div>
                            </div>
                            <div className={"textWrapper"}>
                                <div className={"text"}>Video təlim</div>
                                <div className={"text1"}>800.00 ₼</div>
                            </div>
                            <div className={"textWrapper"}>
                                <div className={"text2"}>Parça: 1</div>
                                <div className={"text3"}>399.00 ₼</div>
                            </div>
                            <div className={"line1"}></div>
                            <div className={"textWrapper"}>
                                <div className={"text2"}>Ara cəmi:</div>
                                <div className={"text"}>399.00 ₼</div>
                            </div>
                            <div className={"textWrapper"}>
                                <div className={"text2"}>Endirim:</div>
                                <div className={"text"}>400 ₼</div>
                            </div>
                            <div className={"line1"}></div>

                            <div className={"textWrapper"} style={{
                                paddingBottom: 16,
                            }}>
                                <div className={"text2"}>Cəmi</div>
                                <div className={"text"}>399 ₼</div>
                            </div>
                            <div className={"top"}>
                                <span>Ödəniş üsulu</span>
                                <div className={"line"}></div>
                            </div>

                            <div className={"inputWrapper1"}>
                                <span>Ödənişə davam etmək üçün <span style={{
                                    color: "#ECF677"
                                }}>Epoint</span> ilə davam edin</span>
                            </div>

                            <button>
                                <div className={"birinci"}>Keçid et</div>
                                <FaArrowRightLong/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"logo"}>
                <div className={"text"}>Ödənişlə bağlı problemləri Instagram vasitəsilə bizə bildirə bilərsiniz.</div>
                <img src={logo} alt={"Logo"}/>
            </div>
            <div className={"sariImage"}>
                <img src={image3} alt={"Image"} className={"sari"}/>
            </div>
        </section>
    );
}

export default Payment;