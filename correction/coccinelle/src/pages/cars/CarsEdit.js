import axios from "axios";
import moment from "moment/moment";
import { useContext, useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { ToastContext } from "../../contexts/ToastContext";

const CarsEdit = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const [car, setCar] = useState({});
    const [brands, setBrands] = useState([]);
    const [isCreate, setIsCreate] = useState(true);
    const [toast, setToast] = useContext(ToastContext);

    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/brands`).then(resp => {
            setBrands(resp.data.sort((a, b) => a.name.localeCompare(b.name)));
            console.log(id);
            if (id == undefined || id == 0) {
                setIsCreate(true);
            } else {
                axios.get(`https://formation.inow.fr/demo/api/v1/cars/${id}`).then(resp => {
                    setCar(resp.data);
                    setIsCreate(false);
                });
            }
        });
    }, []);

    const submit = (ev) => {
        ev.preventDefault();
        let newCar = car;
        newCar.brandID = + newCar.brandID;
        newCar.price = + newCar.price;
        if (isCreate) {
            //add
            axios.post(`https://formation.inow.fr/demo/api/v1/cars`, newCar).then(resp => {
                //alert(`Voiture ${resp.data.model} créée.`);
                setToast({ title: "Suppression", message: `Voiture ${resp.data.model} créée.` });
                nav('/cars');
            });
        } else {
            //update
            axios.put(`https://formation.inow.fr/demo/api/v1/cars/${newCar.id}`, newCar).then(resp => {
                //alert(`Voiture ${resp.data.model} modifiée.`);
                setToast({ title: "Suppression", message: `Voiture ${resp.data.model} modifiée.` });
            });
        }
    };

    const changeFormField = (ev) => {
        const obj = { ...car };
        obj[ev.target.name] = ev.target.value;
        setCar(obj);
    }

    const formatDate = (date) => {
        return moment(date).format("YYYY-MM-DD");
    }

    return (
        <div>
            <h1>Ajouter une voiture</h1>
            <Form noValidate onSubmit={submit}>
                <Form.Group>
                    <Form.Label>Modèle</Form.Label>
                    <Form.Control type="text" placeholder="Modèle" name="model" onChange={changeFormField} value={car.model} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Prix</Form.Label>
                    <Form.Control type="currency" placeholder="Prix" name="price" onChange={changeFormField} value={car.price} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date de mise en circulation</Form.Label>
                    <Form.Control type="date" placeholder="Mise en circulation" name="dateOfCirculation" onChange={changeFormField} value={formatDate(car.dateOfCirculation)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Marque</Form.Label>
                    {brands.length == 0 ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> :
                        <Form.Select name="brandID" onChange={changeFormField} value={car.brandID}>
                            <option value="">--</option>
                            {brands.map(brand => (
                                <option key={brand.id} value={brand.id} >{brand.name}</option>
                            ))}
                        </Form.Select>
                    }
                </Form.Group>
                <Button variant="primary" type="submit">Enregistrer</Button>
            </Form>
        </div>
    );
}

export default CarsEdit;