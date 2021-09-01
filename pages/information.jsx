import React, { useRef, useContext } from 'react';
import Link from "next/link";
import Layout from "../components/Layout";
import {useAppContext} from 'context/AppContext';

const information = () => {
    const { state, addToBuyer } = useAppContext();
    const form = useRef(null);
    const { cart } = state;
    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            "name": formData.get('name'),
            "email": formData.get('email'),
            "address": formData.get('address'),
            "apto": formData.get('apto'),
            "city": formData.get('city'),
            "country": formData.get('country'),
            "state": formData.get('state'),
            "cp": formData.get('cp'),
            "phone": formData.get('phone'),
        }
        addToBuyer(buyer);
    }
    return (
        <Layout>

            <div className="Main">
                <div className="Information">
                    <div className="Information-content">
                        <div className="Information-head">
                            <h2>Información de contacto:</h2>
                        </div>
                        <div className="Information-form">
                            <form action="" ref={form}>
                                <input type="text" placeholder="Nombre completo" name="name" />
                                <input type="text" placeholder="Correo Electronico" name="email" />
                                <input type="text" placeholder="Direccion" name="addres" />
                                <input type="text" placeholder="apto" name="apto" />
                                <input type="text" placeholder="Ciudad" name="city" />
                                <input type="text" placeholder="Pais" name="country" />
                                <input type="text" placeholder="Estado" name="state" />
                                <input type="text" placeholder="Codigo postal" name="cp" />
                                <input type="text" placeholder="Telefono" name="phone" />
                            </form>
                        </div>
                        <div className="Information-buttons">
                            <div className="Information-back"><Link href="/checkout">Regresar</Link></div>
                            <div className="Information-next">
                                <Link href='payment' onClick={handleSubmit} type='button'>Pagar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="Information-sidebar">
                        <h3>Pedido:</h3>
                        {cart.map((item) => (
                            <div className="Information-item" key={item.title}>
                                <div className="Information-element">
                                    <h4>{item.title}</h4>
                                    <span>$ {item.price}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default information;
