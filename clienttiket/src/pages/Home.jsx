
import Navbar from "../components/Navbar";
import HomeCom from "../components/Pages_Components/HomeCom";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="w-[80%] mx-auto pt-20">
                <HomeCom />
            </div>
        </>
    );
}

export default Home;