import { useState } from "react";
import bookingImage from "../../assets/img/booking.png"
import Judul from "../Judul";
const BookingCom = () => {
    const [harga, setHarga] = useState(800000)
    const [count, setCount] = useState(1)
    const handleAdd = () => {
        setCount(prev => prev + 1)
    }
    const handleRemove = () => {

        setCount(prev => prev > 1 ? prev - 1 : 1)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
    }

    const data = harga * count

    const formatRupiah = new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(data)

    return (
        <>
            <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
                <div>
                    <Judul judul={"Lengkapi pesanan anda"} />
                    <div className="flex flex-col mb-10 ">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="start" className="font-semibold">Nama Lengkap</label>
                                <input type="text" name="nama_lengkap" id="start" className=" w-[400px] rounded border-gray-400 py-2 px-5 mt-3 outline" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="end" className="font-semibold">Email</label>
                                <input type="email" name="email" id="end" className="border w-[400px] rounded border-gray-400 py-2 px-5 mt-3 outline" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="end" className="font-semibold">Nomor HP</label>
                                <input type="number" name="nomorHp" id="end" className="border w-[400px] rounded border-gray-400 py-2 px-5 mt-3 outline" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="end" className="font-semibold">Jumlah Orang</label>
                                <div className="flex space-x-3 items-center">
                                    <button type="button" className="bg-cyan-500 rounded-2xl h-10 w-10 font-bold text-white text-2xl" onClick={handleAdd}>+</button>
                                    <input type="text" name="jumlahOrang" id="end" value={count} className="border w-[60px] text-center rounded border-gray-400 py-2 px-5 mt-3 outline" readOnly />
                                    <button type="button" className="bg-cyan-500 rounded-2xl h-10 w-10 font-bold text-white text-2xl" onClick={handleRemove}>-</button>
                                </div>
                            </div>
                            <button type="submit" className="bg-cyan-800 w-full py-2 rounded-xl text-white">Proses Pembayaran</button>
                        </form>
                    </div>
                </div>
                <div>
                    <img src={bookingImage} className="h-52 object-cover rounded" alt="" />
                    <div className="mt-5">
                        <p className="font-bold text-xl">Total</p>
                        <p className="font-semibold mt-5">{formatRupiah}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingCom;