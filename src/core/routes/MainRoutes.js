import { Navigate, Route, Routes } from "react-router";
import Home from "../../pages/home/Home";
import CountriesList from "../../pages/countries/CountriesList";
import Login from "../../pages/authentication/Login";
import CountriesDetail from "../../pages/countries/CountriesDetail";
import NotFound from "../../pages/home/NotFound";


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/countries">
                <Route index caseSensitive element={<CountriesList />} />
                <Route path="detail/:name" element={<CountriesDetail />} />
            </Route>
            <Route path="/auth/login" caseSensitive element={<Login />} />

            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>
    );
}

export default MainRoutes;