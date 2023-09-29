import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";

const CountriesList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then(resp => {
            setCountries(resp.data);
        }).catch(er => {
            alert(er.message);
        });
    }, []);

    return (
        <div>
            <h1>Liste des pays</h1>
            <Table>
                <thead>
                    <tr><th>Nom</th><th>TLD</th><th></th></tr>
                </thead>
                <tbody>
                    {countries?.map((country, index) =>
                        <tr key={index}>
                            <td>{country.name.official}</td>
                            <td>{country.tld?.map((t) =>
                                <p key={t}>{t}</p>
                            )}</td>
                            <td>
                                <Link to={`/countries/detail/${country.name.official}`} className="btn btn-primary">
                                    Détail
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

        </div>
    );
}

export default CountriesList;