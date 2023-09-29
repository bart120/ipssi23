import { Navigate, Route, Routes } from "react-router";
import Home from "../../pages/home/Home";

import Login from "../../pages/authentication/Login";

import NotFound from "../../pages/home/NotFound";
import BrandDetail from "../../pages/brands/BrandDetail";
import CarsList from "../../pages/cars/CarsList";
import CarsEdit from "../../pages/cars/CarsEdit";
import { useSelector } from "react-redux";


const MainRoutes = () => {
    const user = useSelector((state) => state.user.value);

    return (
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/brand/:id" element={<BrandDetail />} />
            <Route path="/cars">
                <Route index element={< CarsList />} />
                <Route path="edit" element={(user == null ?
                    (<Navigate to="/404" replace />) :
                    (<CarsEdit />))} />
                <Route path="edit/:id" element={(user == null ?
                    (<Navigate to="/404" replace />) :
                    (<CarsEdit />))} />
            </Route>
            <Route path="/auth/login" caseSensitive element={<Login />} />

            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>
    );
}

export default MainRoutes;