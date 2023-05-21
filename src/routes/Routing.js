import AdminLogin from "../screens/auth/AdminLogin";
import Dashboard from "../screens/admin/Dashboard";
import Home from "../screens/Home";
import Private from "./Private";
import Public from "./Public";
import Categories from "../screens/admin/Categories/Index";
import CreateCategory from "../screens/admin/Categories/CreateCategory";
import Products from "../screens/admin/Products/Index";
import Orders from "../screens/admin/Orders/Index";
import Customers from "../screens/admin/Customers/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}/>
                <Route path="auth">
                    <Route path="admin-login" element={<Public><AdminLogin /></Public>}/>
                </Route>
                <Route path="dashboard">
                    <Route path="home" element={<Private><Dashboard /></Private>}/>
                    <Route path="categories" element={<Private><Categories /></Private>}/>
                    <Route path="products" element={<Private><Products /></Private>}/>
                    <Route path="orders" element={<Private><Orders /></Private>}/>
                    <Route path="customers" element={<Private><Customers /></Private>}/>
                    <Route path="category">
                        <Route path="create" element={<Private><CreateCategory /></Private>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;