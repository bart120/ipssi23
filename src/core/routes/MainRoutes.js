import { Route, Routes } from "react-router";
import Home from "../../pages/home/Home";
import CountriesList from "../../pages/countries/CountriesList";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/countries" caseSensitive element={<CountriesList />} />
        </Routes>
    );
}

export default MainRoutes;