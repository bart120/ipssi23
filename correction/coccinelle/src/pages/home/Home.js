import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/brands').then(resp => {
            setBrands(resp.data);
        }).catch(er => {
            alert(er.message);
        });
    }, []);

    return (
        <>
            <h1>HOME</h1>
            <div className="row">
                {brands.map(brand => (
                    <div className="col-6" key={brand.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`/images/${brand.image}`} />
                            <Card.Body>
                                <Card.Title>{brand.name}</Card.Title>
                                <Link className="btn btn-primay" to={`/brand/${brand.id}`}>Voir plus</Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;