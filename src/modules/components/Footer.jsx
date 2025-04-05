import React from "react";
import s from "../css/Footer.module.css";

export default function Footer() {
    return (
        <>
            <div className={s.footer}>
                <div className={s.container}>
                    <div className="logo">
                        <img src="../../../public/imgs/logo.svg" alt="" />
                    </div>
                    <nav className="nav">
                        <ul className="ul">
                            <li className={s.active}>
                                <a href="/">О нас</a>
                            </li>
                            <li>
                                <a href="/catalog">Каталог</a>
                            </li>
                            <li>
                                <a href="/">Где нас найти</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}