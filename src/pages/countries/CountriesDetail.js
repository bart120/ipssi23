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

    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {country?.capital?.map((c) => (
                    <li key={c}>{c}</li>
                ))}
            </ul>
        </div>
    );
}

export default CountriesDetail;