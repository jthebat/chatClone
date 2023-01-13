import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Tylor Chat</span>
            <div className="user">
                <img src="https://w.namu.la/s/d6cbb5161fcf2385efe2be379cf43c56e89ed009097c0436d6f17367cd8b18613299c351d7e2f698c83ef5c42c925959f6ebd65013a29b37ab1f092c147e22d232fca66a706a40bba63d330617567223b679ba1bf11355a45fb2c03cea1bdffa91b2ca8a21b4a33b70aa89f4016783ae" alt=""/>
                <span>John</span>
                <button>logout</button>
            </div>

        </div>
    )
}

export default Navbar