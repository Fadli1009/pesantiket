import DataFasilitas from "../data_dummy/DataFasilitas";
import Judul from "../Judul";
import Typographh from "../Typography";

const FasilitasCom = () => {
    return (
        <>
            <Judul judul={"Fasilitas"} />
            <Typographh typo={"Fasilitas yang kami sediakan untuk anda"} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                {DataFasilitas.map((item, index) => (
                    <div key={index} className={`px-4 py-5 rounded-xl shadow transition-all hover:shadow-xl`}>
                        <div className="text-center">
                            <div>
                                <i className={`${item.icon} text-3xl shadow font-bold rounded-full p-3 bg-[#ADEED9]/40`}></i>
                            </div>
                            <div className="my-5">
                                <h1 className="font-semibold text-xl">{item.title}</h1>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FasilitasCom;