import FirstScene from "../../../components/UserComponents/FirstScene/index.jsx";
import SecondScene from "../../../components/UserComponents/SecondScene/index.jsx";
import ThirdScene from "../../../components/UserComponents/ThirdScene/index.jsx";

function HomePage() {
    return (
        <section id={"homePage"}>
            <FirstScene/>
            <SecondScene/>
            <ThirdScene/>
        </section>
    );
}

export default HomePage;