import { useState } from "react";
import { Form } from "react-bootstrap";

const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const InputMail = ({ label, ...other }) => {

    const [isValid, setIsValid] = useState(false);

    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="email" {...other} className={!isValid && "input-error"} />
            {isValid === false && (<p style={{ color: 'red' }}>Format du mail invalide.</p>)}
        </Form.Group>
    );
}

export default InputMail;