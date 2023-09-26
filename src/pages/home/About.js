import { useState } from "react";
import { Button } from "react-bootstrap";

const About = () => {
    const [name, setName] = useState("");
    const user = {};

    const handleTestClick = () => {
        setName("Personne");
    }

    return (
        <div>
            <h1>A propos de</h1>

            <p>Mon nom est: {name}</p>
            <div>
                <Button onClick={handleTestClick}>Test</Button>
            </div>
        </div>
    );
}

export default About;