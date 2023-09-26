import { useState } from "react";

const CountriesList = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Liste des pays</h1>

            <p>Mon nom est: {name}</p>
        </div>
    );
}

export default CountriesList;