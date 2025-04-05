import { useParams, Link } from "react-router-dom";
import { products } from "../../products";
import s from '../css/ProductPage.module.css';
// import { Catalog } from "";

export default function ProductPage() {
    const {id} = useParams();
    const product = products.find(product=>product.id == id);
    console.log(product.price);
    return (
        <div className={s.product}>
            <div className={s.container}>
            <Link to="/catalog">
                <img src="public/icons/left.svg" alt="" className={s.svg}/>
                <button className="btn4">На главную</button>
            </Link>
            <div className={s.product__info}>
                <div className="img">
                    <img src={`${product.img}`} alt="" />
                </div>
                <div className={s.about}>
                    <h3 className="name">
                        {product.name}
                    </h3>
                    <div className={s.text}>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt porro recusandae facilis distinctio. Accusamus eaque nobis sapiente amet assumenda repellat neque impedit ducimus, sequi minima corrupti maiores quisquam vero tenetur laudantium reprehenderit nemo dolorum. Hic, accusamus excepturi consectetur reprehenderit quae quis fugiat provident labore quisquam voluptate assumenda sed odit obcaecati?
                        </div>
                    </div>
                    <div className={s.purchase}>
                        <span className="cost">
                            <span className="num">
                                {product.price}
                            </span>
                            <span className="currency">
                                ₽
                            </span>
                        </span>
                        <button className="btn groceries">Добавить в корзину</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}