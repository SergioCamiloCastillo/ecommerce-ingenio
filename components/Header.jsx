import React, { useContext } from 'react';
import Link from "next/link";
import {useAppContext} from '../context/AppContext'

const Header = () => {
    const {state} = useAppContext()
    const {cart} = state;
    
    return (
        <div className='Header'>
            <Link href="/"><h1 className='Header-title'>Ecommer Ingenio Code</h1></Link>
            <div className="Header-checkout"><Link href='/checkout'>Checkout</Link>
                {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
            </div>
        </div>
    );
}

export default Header;
