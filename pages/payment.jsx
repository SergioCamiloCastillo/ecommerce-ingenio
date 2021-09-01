

import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useRouter } from 'next/router';
import {useAppContext} from 'context/AppContext';

const payment = () => {
    const router = useRouter()

    const {state,addNewOrder} = useAppContext()
    const { cart, buyer } = state;

  const paypalOptions = {
    clientId: "AQrXcgL51aOXar7Ti7R0Qp3oDb-2KQpTuFBL6xSEl0AkjlkHUu-5JRZmx6qYJNuUFq7p0x0JXkOQf7bm",
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      router.push("/success")
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.title}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
        <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default payment;