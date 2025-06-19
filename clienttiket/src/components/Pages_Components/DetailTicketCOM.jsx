import detailImg from "../../assets/img/detail.png"
import Judul from "../Judul";
import galery1 from "../../assets/img/galery1.png"
import galery2 from "../../assets/img/galery2.png"
import galery3 from "../../assets/img/galery3.png"
import galery4 from "../../assets/img/galery4.png"

import profile1 from "../../assets/img/profile1.png"
import profile2 from "../../assets/img/profile2.png"
import profile3 from "../../assets/img/profile3.png"
import { useNavigate, useSearchParams } from "react-router";
import { useState } from "react";
const DetailTicketCom = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [tanggalMulai, setTanggalMulai] = useState(searchParams.get('start') || '')
    const [tanggalSelesai, setTanggalSelesai] = useState(searchParams.get('end') || '')
    const dataImage = [
        {
            foto: galery1
        },
        {
            foto: galery2
        },
        {
            foto: galery3
        },
        {
            foto: galery4
        },
    ]
    const dataRatings = [
        {
            id: 1,
            nama: "Sophia Madagaskar",
            date: "12 Juni 2025",
            star: 2.5,
            comment: "Keren banget tempatnya gilaaaaa",
            img: profile1
        },
        {
            id: 2,
            nama: "Tatang Penggaris Patah",
            date: "15 Juni 2025",
            star: 5,
            comment: "Terkesima saya sumpah",
            img: profile2
        },
        {
            id: 2,
            nama: "Olivia Suminem",
            date: "25 Juni 2025",
            star: 3.5,
            comment: "Worth it lah yaaaa bestieeeee",
            img: profile1
        },
    ]
    const rating = (star) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            if (star >= i) {
                stars.push(<i class="ri-star-fill"></i>)
            } else if (star >= i - 0.5) {
                stars.push(<i class="ri-star-half-line"></i>)
            } else {
                stars.push(<i class="ri-star-line"></i>)

            }
        }
        return stars
    }
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/booking/1')
    }
    const handleChange = (key, value) => {
        if (key === "start") setTanggalMulai(value)
        if (key === "end") setTanggalSelesai(value)

        const params = new URLSearchParams(searchParams)
        params.set(key, value)
    
        setSearchParams(params)
    }


    return (
        <>
            <img src={detailImg} alt="" className="w-full object-cover" />
            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus fugiat sunt odit modi quasi cumque debitis soluta blanditiis? Dolorem neque rem eveniet sit quam necessitatibus perspiciatis voluptates, molestias commodi quaerat nemo fugit laudantium nam? Numquam ab, nesciunt maxime nisi veniam quos voluptatem, in delectus, eveniet consequuntur ullam soluta. Accusamus.</p>
            <Judul judul={"Booking Detail"} />
            <div className="flex justify-between mb-10">
                <div className="flex flex-col">
                    <label htmlFor="start" className="font-semibold">Dari :</label>
                    <input type="date" name="" id="start" value={tanggalMulai} onChange={(e) => handleChange("start", e.target.value)} className="border w-[400px] rounded border-gray-400 py-2 px-5 mt-3" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="end" className="font-semibold">Sampai :</label>
                    <input type="date" name="" id="end" value={tanggalSelesai} onChange={(e)=>handleChange("end",e.target.value)} className="border w-[400px] rounded border-gray-400 py-2 px-5 mt-3" />
                </div>
            </div>
            <div className="text-right">
                <button onClick={handleClick} className="bg-[#00B0DB] cursor-pointer rounded px-5 py-2 font-semibold hover:bg-[#8fc4d1]">Pesan Sekarang</button>
            </div>
            <Judul judul={"Tentang Tempat ini"} />
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus fugiat sunt odit modi quasi cumque debitis soluta blanditiis? Dolorem neque rem eveniet sit quam necessitatibus perspiciatis voluptates, molestias commodi quaerat nemo fugit laudantium nam? Numquam ab, nesciunt maxime nisi veniam quos voluptatem, in delectus, eveniet consequuntur ullam soluta. Accusamus.</p>
            <Judul judul={"Foto tempat ini"} />
            <div className="grid grid-cols-4 gap-5">
                {dataImage.map((item, index) => (
                    <img src={item.foto} className="rounded-xl" />
                ))}
            </div>
            <Judul judul={"Reviews"} />
            <div className="flex space-x-5">
                <div className="">
                    <p className="text-3xl font-bold">4.8</p>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-line"></i>
                    <p className="">150 reviews</p>
                </div>
                <div className=" w-[500px]">
                    <div className="flex items-center space-x-3">
                        <p className="text-gray-500 w-4 text-right">5</p>
                        <div className="h-3 rounded-xl bg-gray-400 w-full">
                            <div className="h-full rounded-xl bg-gray-500 w-[70%]">
                            </div>
                        </div>
                        <p className="text-gray-500 w-10 text-left">70%</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className="text-gray-500 w-4 text-right">4</p>
                        <div className="h-3 rounded-xl bg-gray-400 w-full">
                            <div className="h-full rounded-xl bg-gray-500 w-[20%]">
                            </div>
                        </div>
                        <p className="text-gray-500 w-10 text-left">20%</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className="text-gray-500 w-4 text-right">3</p>
                        <div className="h-3 rounded-xl bg-gray-400 w-full">
                            <div className="h-full rounded-xl bg-gray-500 w-[5%]">
                            </div>
                        </div>
                        <p className="text-gray-500 w-10 text-left">5%</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className="text-gray-500 w-4 text-right">2</p>
                        <div className="h-3 rounded-xl bg-gray-400 w-full">
                            <div className="h-full rounded-xl bg-gray-500 w-[3%]">
                            </div>
                        </div>
                        <p className="text-gray-500 w-10 text-left">3%</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className="text-gray-500 w-4 text-right">1</p>
                        <div className="h-3 rounded-xl bg-gray-400 w-full">
                            <div className="h-full rounded-xl bg-gray-500 w-[2%]">
                            </div>
                        </div>
                        <p className="text-gray-500 w-10 text-left">2%</p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="space-y-10">
                    {dataRatings.map((item, index) => (
                        <div key={index}>
                            <div className="flex items-center">
                                <div>
                                    <img src={item.img} alt="" className="w-15 me-3" />
                                </div>
                                <div>
                                    <h3>{item.nama}</h3>
                                    <h3 className="text-gray-500">{item.date}</h3>
                                </div>
                            </div>
                            <div className="my-3">
                                {rating(item.star)}
                            </div>
                            <div className="">
                                <p>{item.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DetailTicketCom;