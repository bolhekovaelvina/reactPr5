import React from "react"
import s from "../css/Banner.module.css";

export default function Banner() {
    return (
        <section className={s.banner}>
            <div className={s.background}>
                <img src="public/imgs/banner.jpg" alt="" className={s.banner__img}/>
            </div>
            <div className={s.container}>
                <button className={s.signature}>
                    О компании <span className="highlighting">АвтоТорг</span>
                </button>
            </div>
        </section>
    );
}