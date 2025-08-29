import {useState} from "react";
import {Modal} from "antd";
import './index.scss'
import image1 from "/src/assets/payment1.png"
import image2 from "/src/assets/payment2.png"
import image3 from "/src/assets/sari1.png"
import {FaArrowRightLong} from "react-icons/fa6";
import logo from "/src/assets/logo.png"

function Payment() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        agree: false,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        if (name === "agree") {
            setFormData({
                ...formData,
                [name]: checked
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePhone = (phone) =>
        /^[0-9]{9,12}$/.test(phone.replace(/\s/g, ""));

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.surname.trim() !== "" &&
        validatePhone(formData.phone) &&
        validateEmail(formData.email) &&
        formData.agree;

    return (
        <section id={"payment"}>
            <div className={"container"}>
                <button>Ödəmə</button>

                <div className={"row"}>
                    {/* Sol tərəf */}
                    <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"box"}>
                            <div className={"top"}>
                                <span>Əlaqə məlumatı</span>
                                <div className={"line"}></div>
                            </div>
                            <div className={"inputWrapper"}>
                                <label>Ad</label>
                                <input
                                    name="name"
                                    placeholder="Adınızı daxil edin"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={"inputWrapper"}>
                                <label>Soyad</label>
                                <input
                                    name="surname"
                                    placeholder="Soyadınızı daxil edin"
                                    value={formData.surname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={"inputWrapper"}>
                                <label>Telefon nömrəsi</label>
                                <input
                                    name="phone"
                                    placeholder="xxx xxx xx xx"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={"inputWrapper"}>
                                <label>E-poçt</label>
                                <input
                                    name="email"
                                    placeholder="E-poçt ünvanınızı daxil edin"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={"inputWrapper1"}>
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                />
                                <span onClick={() => setIsModalOpen(true)} style={{cursor: "pointer", textDecoration: "underline"}} className={"gulu"} >
                                    Ödəniş şərtlərini oxudum və qəbul edirəm
                                </span>
                            </div>

                            <div className={"line1"}></div>
                            <div className={"row"}>
                                <div className={"box2 col-6"} style={{paddingRight: 2}}>
                                    <img src={image1} alt={"Image"}/>
                                    <div className={"yazi"}>Dərhal Giriş əldə edin</div>
                                </div>
                                <div className={"box2 col-6"} style={{paddingLeft: 2}}>
                                    <img src={image2} alt={"Image"}/>
                                    <div className={"yazi"}>100% Təhlükəsiz Alış-veriş</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sağ tərəf */}
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

                            <div className={"textWrapper"} style={{paddingBottom: 16}}>
                                <div className={"text2"}>Cəmi</div>
                                <div className={"text"}>399 ₼</div>
                            </div>
                            <div className={"top"}>
                                <span>Ödəniş üsulu</span>
                                <div className={"line"}></div>
                            </div>

                            <div className={"inputWrapper1"}>
                                <span>Ödənişə davam etmək üçün <span style={{color: "#ECF677"}}>Epoint</span> ilə davam edin</span>
                            </div>

                            <button
                                disabled={!isFormValid}
                                style={{
                                    filter: !isFormValid ? "grayscale(1)" : "grayscale(0)",
                                    cursor: !isFormValid ? "not-allowed" : "pointer"
                                }}
                            >
                                <div className="birinci">Keçid et</div>
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

            {/* ✅ Antd Modal */}
            <Modal
                title="Ödəniş şərtləri və qaydaları"
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                width={800}
                styles={{
                    content: {backgroundColor: "#1d1d1d", borderRadius: 12},
                    header: {backgroundColor: "transparent", fontSize: 22, color: 'white'},
                    body: {
                        maxHeight: "60dvh",
                        overflowY: "auto",
                    },
                    footer: {display: "none"}
                }}
            >
                <p style={{color: "#B2B2B2"}} className={"zakiramq"}>
                    <section>
                        <p>1. Ümumi müddəalar</p>
                        <ul>
                            <li>1.1. Bu şərtlər Do More Akademy tərəfindən təşkil olunan bütün təlimlərə aiddir və
                                iştirakçı tərəfindən qəbul edildiyi andan qüvvəyə minir.
                            </li>
                            <li>1.2. Təlimin əsas məqsədi iştirakçılara eBay, dropshipping və e-ticarət sahəsində nəzəri
                                və praktiki biliklər qazandırmaqdır.
                            </li>
                            <li>1.3. Təlimə qeydiyyatdan keçmək və ödəniş etmək bu şərtlərin tam şəkildə qəbul edilməsi
                                deməkdir.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>2. Təlim proqramı</p>
                        <ul>
                            <li>2.1. Təlim əvvəlcədən müəyyən edilmiş proqram əsasında aparılır.</li>
                            <li>2.2. Do More Akademy proqramda dəyişiklik etmək hüququna malikdir, lakin bu dəyişiklik
                                tədrisin keyfiyyətinə mənfi təsir göstərməməlidir.
                            </li>
                            <li>2.3. Təlimdə nəzəri dərslər, praktiki çalışmalar və əlavə resurslara çıxış nəzərdə
                                tutulur.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>3. Təlimin keçirilməsi</p>
                        <ul>
                            <li>3.1. Təlim onlayn və ya oflayn formatda təşkil edilə bilər.</li>
                            <li>3.2. İştirakçı təlimə qoşulmaq üçün tələb olunan texniki vasitələri (internet, cihaz və
                                s.) özü təmin etməlidir.
                            </li>
                            <li>3.3. Təlimin dəqiq vaxtları və dərs cədvəli əvvəlcədən elan olunur.</li>
                        </ul>
                    </section>

                    <section>
                        <p>4. Ödəniş şərtləri</p>
                        <ul>
                            <li>4.1. Təlimin qiyməti Do More Akademy tərəfindən müəyyən olunur və iştirakçıya əvvəlcədən
                                təqdim edilir.
                            </li>
                            <li>4.2. Ödəniş tam və ya hissə-hissə həyata keçirilə bilər.</li>
                            <li>4.3. İştirakçı ödənişi təsdiqlədiyi andan təlim qrupuna əlavə olunur.</li>
                            <li>4.4. Təlim qrupuna əlavə olunduqdan sonra ödəniş heç bir halda geri qaytarılmır.</li>
                        </ul>
                    </section>

                    <section>
                        <p>5. Təlimçi öhdəlikləri</p>
                        <ul>
                            <li>5.1. Təlimçi proqram üzrə keyfiyyətli dərslər keçməyi öhdəsinə götürür.</li>
                            <li>5.2. Təlimçi iştirakçılara əlavə materiallar, təqdimatlar və mənbələr təqdim edir.</li>
                            <li>5.3. Təlimçi peşəkar etika qaydalarına riayət edir.</li>
                        </ul>
                    </section>

                    <section>
                        <p>6. İştirakçının öhdəlikləri</p>
                        <ul>
                            <li>6.1. İştirakçı ödənişi vaxtında həyata keçirməlidir.</li>
                            <li>6.2. İştirakçı dərslərdə aktiv iştirak etməli və qaydalara riayət etməlidir.</li>
                            <li>6.3. Təlim materiallarını üçüncü şəxslərlə paylaşmaq qadağandır.</li>
                            <li>6.4. Təlim zamanı qeyri-etik davranış sərgiləyən iştirakçı qrupdan uzaqlaşdırıla
                                bilər.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>7. Tədris materialları və müəllif hüquqları</p>
                        <ul>
                            <li>7.1. Təlimdə təqdim olunan bütün materiallar Do More Akademy-yə məxsusdur.</li>
                            <li>7.2. Materialların icazəsiz paylaşılması, surətinin çıxarılması və ya kommersiya
                                məqsədilə istifadəsi qəti qadağandır.
                            </li>
                            <li>7.3. Müəllif hüquqlarının pozulması halında iştirakçı məsuliyyət daşıyır.</li>
                        </ul>
                    </section>

                    <section>
                        <p>8. Təlim nəticələri</p>
                        <ul>
                            <li>8.1. Təlimçi yalnız bilik və təcrübə ötürür, nəticə iştirakçının şəxsi əməyindən və
                                tətbiqindən asılıdır.
                            </li>
                            <li>8.2. Təlimçi iştirakçının şəxsi fəaliyyəti nəticəsində yaranan maliyyə və ya digər
                                risklərə görə məsuliyyət daşımır.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>9. Təlimin dayandırılması</p>
                        <ul>
                            <li>9.1. İştirakçı qaydalara əməl etmədikdə təlimdən uzaqlaşdırıla bilər.</li>
                            <li>9.2. Təlimçi vacib səbəblərdən tədrisi müvəqqəti dayandıra bilər, bu halda təlim
                                alternativ formada davam etdirilir.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>10. Fövqəladə hallar</p>
                        <ul>
                            <li>10.1. Müharibə, təbii fəlakət, texniki nasazlıq və ya digər fövqəladə səbəblər olduqda
                                dərslər dəyişdirilə və ya onlayn formada davam etdirilə bilər.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>11. Qrup qaydaları</p>
                        <ul>
                            <li>11.1. Təlim iştirakçıları qrup daxilində etik davranış qaydalarına riayət etməlidir.
                            </li>
                            <li>11.2. Təhqir, təxribat və neqativ davranışlara yol verən iştirakçı dərhal qrupdan
                                çıxarıla bilər.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>12. Ödənişin qaytarılmaması</p>
                        <ul>
                            <li>12.1. Təlimə qoşulduqdan və qrup əlavə edildikdən sonra ödəniş ümumiyyətlə geri
                                qaytarılmır.
                            </li>
                            <li>12.2. İştirakçının şəxsi səbəblərlə təlimi dayandırması geri ödəmə hüququ yaratmır.</li>
                        </ul>
                    </section>

                    <section>
                        <p>13. Məxfilik</p>
                        <ul>
                            <li>13.1. Təlim zamanı iştirakçılarla paylaşılan məlumatlar məxfi saxlanmalıdır.</li>
                            <li>13.2. Qrup daxilində əldə olunan məlumatların kənar şəxslərə ötürülməsi qadağandır.</li>
                        </ul>
                    </section>

                    <section>
                        <p>14. Mübahisələrin həlli</p>
                        <ul>
                            <li>14.1. Yaranan mübahisələr ilk növbədə qarşılıqlı anlaşma yolu ilə həll edilir.</li>
                            <li>14.2. Əgər razılıq əldə olunmazsa, məsələ Azərbaycan Respublikasının qanunvericiliyi
                                əsasında həll olunur.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>15. Qəbul etmə</p>
                        <ul>
                            <li>15.1. Təlimə qoşulan hər bir iştirakçı bu şərtləri oxuduğunu, başa düşdüyünü və qəbul
                                etdiyini təsdiq edir.
                            </li>
                            <li>15.2. “Oxudum və qəbul edirəm” düyməsini klikləməklə iştirakçı bu sənədin bütün
                                müddəalarına razılıq vermiş sayılır.
                            </li>
                        </ul>
                    </section>
                </p>
            </Modal>
        </section>
    );
}

export default Payment;
