import React from 'react';

const CartWidGet = ({numero} ) => {
    return (
        <div>
            <img src="cart.svg" alt="carrito" />
           <p> {numero} </p> 
        </div>
    );
}

export default CartWidGet;
