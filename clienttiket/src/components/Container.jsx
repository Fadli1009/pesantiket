import { useLocation } from "react-router";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Container = ({ children }) => {
    const {pathname} = useLocation()

    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'auto'
        })
    },[pathname])
    return (
        <>
            <Navbar />
            <div className="w-[80%] mx-auto pt-20 pb-10">
                {children}
            </div>
        </>
    );
}

export default Container;