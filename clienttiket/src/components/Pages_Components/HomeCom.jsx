import Card from "../Card";
import DataDestinasi from "../data_dummy/DataDestinasi";
import Judul from "../Judul";


const HomeCom = () => {
    return (
        <>
            <div>
                <div className="w-full bg-[url(assets/img/jumbotron.png)] px-5 flex justify-end pb-10 lg:pb-0 lg:justify-center items-center bg-center bg-no-repeat h-[700px] rounded-2xl flex-col bg-cover">
                    <h1 className="text-white text-5xl font-bold">Jelajahi Dunia bersama Tiketin.Aja</h1>
                    <h4 className="text-gray-300 mt-5">Temukan tempat anda untuk menenagkan pikiran anda bersama kami.</h4>
                    <div className="hidden lg:flex bg-white p-2 w-[400px] justify-between mt-5 items-center rounded-xl">
                        <i className="ri-search-line text-2xl text-gray-600"></i>
                        <input type="text" placeholder="Mau kemana nich?" className="w-full mx-3 outline-0" />
                        <button className="bg-[#00B0DB] px-4 py-2 rounded cursor-pointer hover:bg-[#8fc4d1] font-bold">Cari</button>
                    </div>
                </div>
                <Judul judul={"Destinasi Tujuan"} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">
                    {DataDestinasi.map((item, index) => (
                        <Card key={index} title={item.title} subtitle={item.subtitle} img={item.img} price={item.price} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomeCom;