import React,{useContext} from 'react';
import {useAppContext} from 'context/AppContext';
import Map from "../components/Map";
const success = () => {
    const {state} = useAppContext()
    const {buyer} = state;
    return (
        <div className="Main">
            <div className="Succes">
                <div className="Success-content">
                    <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
                    <span>Tu pedido llegara en 3 dias a tu dirección:</span>
                    <div className="Success-map">
                        <Map />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default success;
