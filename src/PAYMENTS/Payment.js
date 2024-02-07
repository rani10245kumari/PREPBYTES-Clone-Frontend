import React, { useState, useEffect } from "react";
import axios from "axios";
import './Payment.css'



const Payment = () => {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:5000/pages/getcartdata")
            .then((res) => setCartItems(res.data))
            .catch((err) => console.error(err));
    }, []);
    console.log(cartItems)

    const handleRemoveCart = async (item) => {
        await axios
            .post("http://localhost:5000/pages/getdataRemove", item)
            .then((res) => console.log(res.data));

        axios
            .get("http://localhost:5000/pages/getcartdata")
            .then((res) => setCartItems(res.data));
    };


    return (
        <>
            <h2 className="headcart">Cart</h2>

            <div className="cart-content">

                <div className="cart-item">
                    <h5>TEST TITLE</h5>
                    <h5>TEST IMG</h5>
                    <h5>TEST CATEGORY</h5>
                    <h5>TEST PRICE</h5>
                </div>

                <div className="CartConatiner">
                    {cartItems &&
                        cartItems.map((item, index) => (
                            <div className="childCartConatiner" key={index}>


                                <p>{item.testTitle}</p>
                                <img src={item.testImg} alt="#" className="cart-img"></img>
                                <p>{item.testCategory}</p>
                                <p>{item.testPrice}</p>

                                <button
                                    className="RemoveButtton"
                                    onClick={() => handleRemoveCart(item)}
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



