import React from 'react';
import Link from "next/link";

const checkout = () => {
    return (
        <div className="Main">
        <div className="Checkout">
          <div className="Checkout-content">
            <h3>Lista de Pedidos:</h3>
            <div className="Checkout-item">
              <div className="Checkout-element">
                <h4>ITEM name</h4>
                <span>$10</span>
              </div>
              <button type="button">Eliminar</button>
            </div>
          </div>
          <div className="Checkout-sidebar">
            <h3>Precio Total: $10</h3>
            <Link href='/information'>
            <button type="button">Continuar pedido</button>

            </Link>
          </div>
        </div>
        </div>
      );
}

export default checkout;
