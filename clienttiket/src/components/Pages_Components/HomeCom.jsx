import Card from "../Card";
import Judul from "../Judul";
import foto1 from '../../assets/img/card1.png'
import foto2 from '../../assets/img/card2.png'
import foto3 from '../../assets/img/card3.png'

const HomeCom = () => {
    const data = [
        {
            id: 1,
            title: "Pantai Kamboja",
            price: 15000,
            subtitle: "Pantai ini merupakan base seller dari tiketin aja, mimin rekomen kalau budget anda ngepas, dilahkan ambil ini",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi, veniam eveniet suscipit sint doloremque aut eos ipsum error officia ut quo, libero voluptas quia voluptatum maxime dignissimos? Repellendus voluptates iste corporis quod explicabo et voluptas consequuntur aliquam vero! Quaerat veritatis odit repudiandae eveniet natus, et doloremque numquam officiis voluptatem.",
            img: foto1
        },
        {
            id: 2,
            title: "Lembah Larvada",
            price: 650000,
            subtitle: "Larvada merupakan lembah yang sangat sejuk, dikarenakan berada di dataaran tinggi",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi, veniam eveniet suscipit sint doloremque aut eos ipsum error officia ut quo, libero voluptas quia voluptatum maxime dignissimos? Repellendus voluptates iste corporis quod explicabo et voluptas consequuntur aliquam vero! Quaerat veritatis odit repudiandae eveniet natus, et doloremque numquam officiis voluptatem.",
            img: foto2
        },
        {
            id: 3,
            title: "Singapore",
            price: 650000,
            subtitle: "Modal 650.000 anda sudah bisa menginap di singapore selama 3 hari 2 malam/",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi, veniam eveniet suscipit sint doloremque aut eos ipsum error officia ut quo, libero voluptas quia voluptatum maxime dignissimos? Repellendus voluptates iste corporis quod explicabo et voluptas consequuntur aliquam vero! Quaerat veritatis odit repudiandae eveniet natus, et doloremque numquam officiis voluptatem.",
            img: foto3
        },
    ]
    return (
        <>
            <div>
                <div className="w-full bg-[url(assets/img/jumbotron.png)] px-5 flex justify-center items-center bg-center bg-no-repeat h-[700px] rounded-2xl flex-col bg-cover">
                    <h1 className="text-white text-5xl font-bold">Jelajahi Dunia bersama Tiketin.Aja</h1>
                    <h4 className="text-gray-300 mt-5">Temukan tempat anda untuk menenagkan pikiran anda bersama kami.</h4>
                    <div className="flex bg-white p-2 w-[400px] justify-between mt-5 items-center rounded-xl">
                        <i class="ri-search-line text-2xl text-gray-600"></i>
                        <input type="text" placeholder="Mau kemana nich?" className="w-full mx-3 outline-0" />
                        <button className="bg-[#00B0DB] px-4 py-2 rounded cursor-pointer hover:bg-[#8fc4d1] font-bold">Cari</button>
                    </div>
                </div>
                <Judul judul={"Destinasi Tujuan"} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">
                    {data.map((item, index) => (
                        <Card title={item.title} subtitle={item.subtitle} img={item.img} price={item.price} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomeCom;