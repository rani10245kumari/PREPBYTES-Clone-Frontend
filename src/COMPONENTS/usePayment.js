

import { loadStripe } from '@stripe/stripe-js'



function PAYMENT(pay) {

    console.log(pay)


    const StripePayment = async () => {
        const stripe = await loadStripe(
            "pk_test_51OFIomSI0xtOp9M4Lx8yK0ymk7DICp3GTuxeSCzdqrXq848U4YfGuir1l5NIU5NYyrgKk0vgYSQ6eF7OLBPHEYFJ00agxvY8do"
        );

        const body = {
            Cartitem: pay,

        };
        console.log(body);
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await fetch(
            "http://localhost:5000/out/create-checkout-session",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            }
        );


        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            console.log(result.error);
        }
    };
    StripePayment()
}

export default PAYMENT
