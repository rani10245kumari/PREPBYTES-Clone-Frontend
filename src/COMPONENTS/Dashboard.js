import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Dashboard() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/pages/dashboardget")
            .then((res) => setCartItems(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            {cartItems.map((item) => {
                return (
                    <div>
                        {item.testID}
                        {item.testTitle}
                    </div>

                )
            })}
        </div>
    )
}

export default Dashboard
