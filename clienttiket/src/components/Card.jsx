import { useNavigate } from "react-router"

const Card = ({ img, title, subtitle, price }) => {
    const format = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number)
    }
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/1')
    }
    return (
        <>
            <div className="bg-white group transition-all duration-300 overflow-hidden cursor-pointer" onClick={handleClick}>
                <div className="relative overflow-hidden">
                    <img src={img} alt="" className='object-cover h-auto w-full' />
                    <div className="absolute -bottom-32 group-hover:bottom-0 rounded-xl bg-black/40 text-white w-full z-1 h-32 flex items-center px-5 font-bold text-2xl transition-all duration-300">
                        {format(price)} / Orang
                    </div>
                </div>
                <div className='py-4 z-9'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                </div>
                <div className='text-cyan-800'>
                    <p>{subtitle}</p>
                </div>
            </div>
        </>
    );
}

export default Card;