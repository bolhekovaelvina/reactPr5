import React from "react"
import s from "../css/Card.module.css";
import { Link } from "react-router-dom";


export default function Card({id, name, price, img}) {
    return (
        <div className={s.card}>
            <div className={s.img}>
                <img src="public/imgs/product.jpg" alt="" className={s.product} />
            </div>
            <div classNaame={s.div__inner1}>
                <p className="name">
                    {name}
                </p>
                <div className={s.div__inner2}>
                    <span className="cost">
                        <span className="num">
                            {price}
                        </span>
                        <span className="currency">
                            ₽
                        </span>
                    </span>
                    <Link to={`${id}`}>
                        <button className="btn3">Подробнее</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}