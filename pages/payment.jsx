import React from 'react';
import Layout from "../components/Layout";

const payment = () => {
    return (
        <Layout>

        <div className="Main">

        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                <div className="Payment-button">Boton de pago con Paypal</div>
            </div>
            <div></div>
        </div>
        </div>
        </Layout>
    );
}

export default payment;
