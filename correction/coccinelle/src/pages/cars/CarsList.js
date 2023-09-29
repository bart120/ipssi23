import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContext } from "../../contexts/ToastContext";

const CarsList = () => {

    const [cars, setCars] = useState([]);
    const [brands, setBrands] = useState([]);
    const [toast, setToast] = useContext(ToastContext);

    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/brands/`).then(resp => {
            setBrands(resp.data);
            axios.get(`https://formation.inow.fr/demo/api/v1/cars`).then(resp => {
                setCars(resp.data);
            });
        });

    }, [])

    const getBrand = (id) => {
        return brands.find(x => x.id == id)?.name;
    }

    const delateCar = (car) => {
        if (window.confirm(`Voulez-vous supprimer la voiture ${car.name}`)) {
            axios.delete(`https://formation.inow.fr/demo/api/v1/cars/${car.id}`).then((resp) => {
                const newCars = [];
                newCars.push(cars);
                const index = newCars.findIndex(x => x.id == car.id);
                newCars.remove(index)
                setCars(newCars);
                setToast({ title: "Suppression", message: `Voiture ${car.name} supprimée` });
            });
        }
    }

    return (
        <div>
            <h1>Les voitures</h1>
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Modèle</th>
                            <th>Marque</th>
                            <th>Prix</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars?.map(car => (
                            <tr key={car.id}>
                                <td>{car.model}</td>
                                <td>{getBrand(car.brandID)}</td>
                                <td>{car.price} €</td>
                                <td>
                                    <Link className="btn btn-warning" to={`/cars/edit/${car.id}`}>Modif.</Link>
                                    <Button variant="danger" onClick={() => { delateCar(car) }}>Suppr.</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default CarsList;