import React from "react"
import s from "../css/Catalog.module.css";
import Card from "./Card"
import {products} from '../../products.js'
export default function Catalog() {
    return (
        <section className={s.catalog}>
            <div className={s.container}>
                <div className={s.information}>
                    <h2>Каталог товаров</h2>
                    <div className={s.nav__category}>
                        <span className="medium1">Категории:</span>
                        <nav className={s.nav__products}>
                            <li isActive={true} className={s.product__category__active}>Все товары</li>
                            <li className={s.product__category}>Шины/колеса</li>
                            <li className={s.product__category}>Масла</li>
                            <li className={s.product__category}>Ароматизаторы</li>
                        </nav>
                    </div> 
                </div>
                <div className={s.products}>
                    {
                        products.map(product=>
                            <Card {...product}/>
                        )
                    }
                </div>
                <button className="download">Загрузить еще товары</button>
            </div>
        </section>
    );
}