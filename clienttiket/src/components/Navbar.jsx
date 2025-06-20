import { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const redirect = () => {
        navigate('/')
    }
    const menu = [
        {
            link: '/',
            text: 'Home'
        },
        {
            link: '/destinasi',
            text: 'Destinasi'
        },
        {
            link: '/fasilitas',
            text: 'Fasilitas'
        },
        {
            link: '/tentang',
            text: 'Tentang'
        },
    ]
    const bars = () => setActive(!active)


    const navigateNavabar = (path) => {
        navigate(path)
    }
    return (
        <>
            <nav className="w-full fixed bg-white mx-auto shadow-md px-5 z-50">
                <div className="flex justify-between items-center">
                    <div className="py-3 text-2xl">
                        <h1 className="cursor-pointer" onClick={redirect}>Tiketin.<span className="text-cyan-700">Aja</span></h1>
                    </div>
                    <ul className="hidden lg:flex space-x-3 ">
                        {menu.map((item, index) => (
                            <li key={index} onClick={() => navigateNavabar(item.link)} className="cursor-pointer">{item.text}</li>
                        ))}
                    </ul>
                    <button onClick={() => bars(true)} className="lg:hidden"><i className="ri-menu-line text-2xl"></i></button>
                </div>
            </nav>
            <div className={`w-full h-screen fixed bg-white z-50 right-0 top-0 transform transition-transform duration-300 ease-in-out ${active ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex w-full h-screen items-center justify-center">
                    <ul className=" lg:flex space-x-3 text-black text-3xl space-y-5">
                        {menu.map((item, index) => (
                            <li key={index} onClick={() => navigateNavabar(item.link)} className="cursor-pointer">{item.text}</li>
                        ))}
                    </ul>
                    <div className="fixed bottom-0 p-10">
                        <button onClick={() => setActive(false)}><i className="ri-close-line text-3xl font-bold"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;