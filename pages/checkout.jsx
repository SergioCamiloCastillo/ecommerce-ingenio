import React, { useContext } from 'react';
import Link from "next/link";
import Layout from "../components/Layout";
import { AppContext } from "../context/AppContext";
const checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = product => () => {
    removeFromCart(product);
  }
  const handleSumTotal = () => {
    const reducer = (acumulador, currentValue) => acumulador + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <Layout>

      <div className="Main">
        <div className="Checkout">
          <div className="Checkout-content">
            <h3>{cart.length>0?<h3>Lista de pedidos:</h3>:<h3>Sin pedidos</h3>}</h3>
            {cart.map((item) => (
              <div className="Checkout-item">
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>$ {item.price}</span>
                </div>
                <button type="button" onClick={handleRemove(item)}>Eliminar</button>
              </div>
            ))}

          </div>
          {cart.length > 0 && (
            <div className="Checkout-sidebar">
              <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
              <Link href='/information'>
                <button type="button">Continuar pedido</button>

              </Link>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}

export default checkout;
