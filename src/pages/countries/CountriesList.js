import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';

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
            <table>
                <thead>
                    <tr><th>Nom</th><th>TLD</th></tr>
                </thead>
                <tbody>
                    {countries?.map((country, index) =>
                        <tr key={index}>
                            <td>{country.name.official}</td>
                            <td>{country.tld?.map((t) =>
                                <p key={t}>{t}</p>
                            )}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}

export default CountriesList;