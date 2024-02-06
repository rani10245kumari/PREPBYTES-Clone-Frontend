import React, { useState, useEffect } from "react";

import axios from "axios";



const Payment = () => {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:5000/pages/getcartdata")
            .then((res) => setCartItems(res.data))
            .catch((err) => console.error(err));
    }, []);
    console.log(cartItems)



    return (
        <>
            <h2 className="headcart">Cart</h2>

            <div className="cart-content">
                <div className="headOfcart">

                </div>
                <div className="CartConatiner">
                    {cartItems &&
                        cartItems.map((item, index) => (
                            <div className="childCartConatiner" key={index}>
                                <p>{item.testTitle}</p>



                            </div>
                        ))}

                </div>


            </div>

        </>
    );
};

export default Payment;



