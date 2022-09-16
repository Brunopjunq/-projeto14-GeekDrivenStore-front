import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useState } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";
import SignUp from "./signup/SignUp.js";

export default function App() {
    const [token, setToken] = useState('');

    return (
        <UserContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/chekout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}