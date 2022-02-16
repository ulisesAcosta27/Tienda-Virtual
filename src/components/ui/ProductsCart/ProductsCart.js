import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import ArrayItemsValue from "../ArrayItemsValue";
import "./ProductsCart.css";

const ProductsCart = () => {
  const params = useParams();
  const [results] = ArrayItemsValue.filter((item) => item.id == params.id);
  console.log(results);

  return (
    <div className="products-cart-container">
      <Header />
      <div className="cart-to-seller">
        <div className="cart-img">
          <img src={results.image} alt={ results.name } />
        </div>
        <div className="cart-info">
          <p>{ results.name }</p>
          <p>5 estrella de 12 reviews</p>
          <p>Precio: { results.price }</p>
          <p>
            Descripción: { results.description }
          </p>
        </div>
        <div className="cart-seller">
          <h4>Comprar Producto</h4>
          <div className="cart-sub-seller">
            <p>Precio: { results.price }</p>
            <p>Stock: { results.stock }</p>
            <div className="cart-counter-items">
              <p>Cantidad:</p>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
