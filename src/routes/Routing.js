import AdminLogin from "../screens/auth/AdminLogin";
import Home from "../screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}/>
                <Route path="auth">
                    <Route path="admin-login" element={<AdminLogin />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;