import './index.scss'
import image1 from "/src/assets/404.png"

function ErrorPage() {
    return (
        <section id={"errorPage"}>
            <img src={image1} alt={"Image"}/>
            <button>Go back</button>
        </section>
    );
}

export default ErrorPage;