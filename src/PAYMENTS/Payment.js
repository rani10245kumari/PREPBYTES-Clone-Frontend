import React, { useState, useEffect } from "react";
import axios from "axios";
import './Payment.css'



const Payment = () => {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        axios
            .get("https://prepbytes-clone-backend-mehz.onrender.com/pages/getcartdata")
            .then((res) => setCartItems(res.data))
            .catch((err) => console.error(err));
    }, []);
    console.log(cartItems)

    const handleRemoveCart = async (itemId) => {
        await axios
            .post("https://prepbytes-clone-backend-mehz.onrender.com/pages/getdataRemove", {
                id: itemId,
            })
            .then((res) => console.log(res.data));

        axios
            .get("https://prepbytes-clone-backend-mehz.onrender.com/pages/getcartdata")
            .then((res) => setCartItems(res.data));
    };


    return (
        <>
            <h2 className="headcart">Cart</h2>

            <div className="cart-content">


                <div className="CartConatiner">
                    {cartItems &&
                        cartItems.map((item, index) => (
                            <div className="childCartConatiner" key={index}>


                                <p>{item.testTitle}</p>
                                <img src={item.testImg} alt="#"></img>
                                <p>{item.testCategory}</p>
                                <p>{item.testPrice}</p>

                                <button
                                    className="RemoveButtton"
                                    onClick={() => handleRemoveCart(item.testID)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                    <div className="buy">
                        <button className="buyNow">
                            checkout
                        </button>
                    </div>

                </div>


            </div>

        </>
    );
};

export default Payment;



