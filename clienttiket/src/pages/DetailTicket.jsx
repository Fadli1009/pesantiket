import Navbar from "../components/Navbar";
import DetailTicketCom from "../components/Pages_Components/DetailTicketCOM";

const DetailTicket = () => {
    return (
        <>
            <Navbar />
            <div className="w-[80%] mx-auto pt-20">
                <DetailTicketCom />
            </div>
        </>
    );
}

export default DetailTicket;