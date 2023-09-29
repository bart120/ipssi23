import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BrandDetail = () => {

    const { id } = useParams();
    const [brand, setBrand] = useState({});
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/brands/${id}`).then(resp => {
            setBrand(resp.data);
        }).catch(er => {
            alert(er.message);
        });
        axios.get(`https://formation.inow.fr/demo/api/v1/cars`).then(resp => {
            setCars(resp.data.filter(x => x.brandID == id));
        }).catch(er => {
            alert(er.message);
        });


    }, [])

    return (
        <div>
            <h1>{brand.name}</h1>
            <img src={`/images/${brand.image}`} />
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Modèle</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(car => (
                            <tr key={car.id}>
                                <td>{car.model}</td>
                                <td>{car.price} €</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BrandDetail;