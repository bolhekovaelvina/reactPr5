import React from "react";
import s from '../css/Header.module.css'; // Импорт CSS-модуля

export default function Header() {
  return (
    <section className={s.header}>
      <div className={s.container}>
        <nav className={s.nav}>
          <li>
            <a href="/" className="navText active">О нас</a>
          </li>
          <li>
            <a href="/catalog" className="navText">Каталог</a>
          </li>
          <li>
            <a href="" className="navText">Где нас найти</a>
          </li>
        </nav>
        <div className={s.logo}>
          <img src="public/imgs/logo.svg" alt="" className="logo" />
        </div>
        <form className={s.form}>
          <button className="btn1">Регистрация</button>
          <button className="btn2">Вход</button>
        </form>
      </div>
    </section>

    
  );
}