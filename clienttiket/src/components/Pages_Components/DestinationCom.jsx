import Card from "../Card";
import DataDestinasi from "../data_dummy/DataDestinasi";
import Judul from "../Judul";
import Typographh from "../Typography";

const DestinationCom = () => {
    return (
        <>
            <Judul judul={"Destinasi"} />
            <Typographh typo={"Berikut adalah beberapa destinasi tujuan yang kami siapkan"} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto mt-5">
                {DataDestinasi.map((item, index) => (
                    <Card key={index} title={item.title} subtitle={item.subtitle} img={item.img} price={item.price} />
                ))}
            </div>
        </>
    );
}

export default DestinationCom;