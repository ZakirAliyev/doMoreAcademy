import './index.scss'
import image1 from "/src/assets/sari1.png"
import image2 from "/src/assets/logo.png"

function LoginForm() {
    return (
        <section id={"loginForm"}>
            <div className={"sariImage"}>
                <img src={image1} alt={"Image"} className={"sari"}/>
            </div>
            <img src={image2} alt={"Logo"} className={"logo"}/>
            <div className={"loginBox"}>
                <div className={"h3"}>Giriş et</div>

                <div className={"label"}>E-poçt</div>
                <input placeholder={"E-poçt ünvanınızı daxil edin"}/>
                <div className={"label"}>Şifrə</div>
                <input placeholder={"Şifrənizi daxil edin"}/>
                <div className={"label1"}>
                    <span style={{
                        color: '#6D6D6D'
                    }}>Şifrəni unutmusunuz?</span>
                    <span style={{
                        color: '#E3E3E3',
                        textDecoration: 'underline',
                        margin: '0 0 0 8px'
                    }}>
                        Bərpa etmək üçün buraya klikləyin.
                    </span>
                </div>
                <button>Daxil ol</button>
            </div>
        </section>
    );
}

export default LoginForm;