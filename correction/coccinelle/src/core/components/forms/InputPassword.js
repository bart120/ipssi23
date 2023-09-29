import { useState } from "react";
import { Form } from "react-bootstrap";

const regEx = /^(?=.*\d)(?=.* [a - z])(?=.* [A - Z])[a - zA - Z0 - 9]{ 8, }$/;

const InputPassword = ({ label, onChange, ...other }) => {

    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (ev) => {
        if (regEx.test(ev.target.value)) {
            setIsValid(true);
            if (onChange)
                onChange(ev);
        } else {
            setIsValid(false);
        }
    }

    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="password" {...other} className={!isValid && "input-error"}
                onChange={handleInputChange} />

            {isValid === false && (<p style={{ color: 'red' }}>Format du mot de passe invalide.</p>)}
        </Form.Group>
    );
}

export default InputPassword;