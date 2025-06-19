import Navbar from "../components/Navbar";
import BookingCom from "../components/Pages_Components/BookingCom";

const Booking = () => {
    return (
        <>
            <Navbar />
            <div className="w-[80%] mx-auto pt-20">
                <BookingCom />
            </div>
        </>
    );
}

export default Booking;