import { Route, Routes } from "react-router";
import Home from "../../pages/home/Home";
import CountriesList from "../../pages/countries/CountriesList";
import Login from "../../pages/authentication/Login";


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/countries" caseSensitive element={<CountriesList />} />
            <Route path="/auth/login" caseSensitive element={<Login />} />
        </Routes>
    );
}

export default MainRoutes;