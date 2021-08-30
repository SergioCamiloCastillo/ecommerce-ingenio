import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div className='Header'>
            <h1 className='Header-title'>Ecommer Ingenio Code</h1>
            <div className="Header-checkout"><Link href='/checkout'>Checkout</Link></div>
        </div>
    );
}

export default Header;
