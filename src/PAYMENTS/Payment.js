// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Payment.css'
// import { loadStripe } from '@stripe/stripe-js'


// const Payment = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [sum, setSum] = useState(0);

//     useEffect(() => {
//         axios
//             .get("https://prepbytes-clone-backend-mehz.onrender.com/pages/getcartdata")
//             .then((res) => setCartItems(res.data))
//             .catch((err) => console.error(err));
//     }, []);
//     console.log(cartItems)

//     const handleRemoveCart = async (item) => {
//         await axios
//             .post("https://prepbytes-clone-backend-mehz.onrender.com/pages/getdataRemove", item)
//             .then((res) => console.log(res.data));

//         axios
//             .get("https://prepbytes-clone-backend-mehz.onrender.com/pages/getcartdata")
//             .then((res) => setCartItems(res.data));
//     };

//     useEffect(() => {
//         let value = 0;
//         cartItems.map((item) => (value += item.price));
//         setSum(value);
//     }, [cartItems]);

//     const stripePayment = async () => {
//         const stripe = await loadStripe(
//             "pk_test_51OFIomSI0xtOp9M4Lx8yK0ymk7DICp3GTuxeSCzdqrXq848U4YfGuir1l5NIU5NYyrgKk0vgYSQ6eF7OLBPHEYFJ00agxvY8do"
//         );

//         const body = {
//             Cartitem: cartItems,
//             Total: sum,
//         };
//         const headers = {
//             "Content-Type": "application/json",
//         };
//         const response = await fetch(
//             "https://prepbytes-clone-backend-mehz.onrender.com/out/create-checkout-session",
//             {
//                 method: "POST",
//                 headers: headers,
//                 body: JSON.stringify(body),
//             }
//         );


//         const session = await response.json();

//         const result = stripe.redirectToCheckout({
//             sessionId: session.id,
//         });
//         if (result.error) {
//             console.log(result.error);
//         }
//     };



//     return (
//         <div className="payment-main">
//             <h2 className="headcart">Cart</h2>

//             <div className="cart-content">

//                 <div className="cart-item">
//                     <h5>TEST TITLE</h5>
//                     <h5>TEST IMG</h5>
//                     <h5>TEST CATEGORY</h5>
//                     <h5>TEST PRICE</h5>
//                 </div>

//                 <div className="CartConatiner">
//                     {cartItems &&
//                         cartItems.map((item, index) => (
//                             <div className="childCartConatiner" key={index}>


//                                 <p className="product-name">{item.testTitle}</p>
//                                 <img src={item.testImg} alt="#" className="cart-img"></img>
//                                 <p>{item.testCategory}</p>
//                                 <p className="price">{item.testPrice}</p>

//                                 <button
//                                     className="RemoveButtton"
//                                     onClick={() => handleRemoveCart(item)}
//                                 >
//                                     Remove
//                                 </button>
//                             </div>
//                         ))}

//                     <div className="buyc">
//                         <button className="checkout" onClick={stripePayment}>
//                             checkout
//                         </button>
//                     </div>

//                 </div>


//             </div>

//         </div>
//     );
// };

// export default Payment;



