import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    "UserDetails": {
        "User": localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")) : [],
        "isLoggedIN": localStorage.getItem("User") ? true : false,
        "myOrder": localStorage.getItem("myOrder") ? JSON.parse(localStorage.getItem("myOrder")) : [],
        "tempCourse": []
    }
}

const UserReduxSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        userLoginAction(state, action) {

            state.UserDetails.User = [];
            state.UserDetails.User.push(action.payload);
            state.UserDetails.isLoggedIN = true;
            localStorage.setItem("User", JSON.stringify(state.UserDetails.User));
        },
        userLogOut(state, action) {
            state.UserDetails.User = []
            state.UserDetails.isLoggedIN = false;
            localStorage.removeItem("User")
        },

        // addTempCourse(state, action) {
        //     state.UserDetails.tempCourse = action.payload;
        // },

        // removeTempCourse(state, action) {
        //     state.UserDetails.tempCourse = [];
        // },

        confirmOrder(state, action) {
            state.UserDetails.myOrder.push(action.payload);
            console.log(action.payload);
            // localStorage.setItem("myOrder", JSON.stringify(state.UserDetails.myOrder));
            // axios.post("http://localhost:5000/purchasedCourse", action.payload).then((response) => {
            //     console.log(response.data)
            // })
        }
    }
});

export const { userLoginAction, userLogOut, confirmOrder } = UserReduxSlice.actions;
export default UserReduxSlice.reducer