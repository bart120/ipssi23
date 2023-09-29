import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CountriesDetail = () => {
    const { name } = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`).then(resp => {
            setCountry(resp.data[0]);
        }).catch(er => {
            alert(er.message);
        });

    }, [])

    const currencies = (obj) => {
        const cs = [];
        for (const prop in obj) {
            cs.push(<li key={prop}>{obj[prop].name}</li>);
        }
        return cs;
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>Capitales:</p>
            <ul>
                {country?.capital?.map((c) => (
                    <li key={c}>{c}</li>
                ))}
            </ul>
            <p>Devises:</p>
            <ul>
                {currencies(country?.currencies)}
            </ul>
        </div>
    );
}

export default CountriesDetail;