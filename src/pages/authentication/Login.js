import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputMail from "../../core/components/forms/InputMail";

const Login = () => {

    const [userLog, setUserLog] = useState({ email: '', password: '' });

    const submit = (ev) => {
        ev.preventDefault();

    }

    const changeFormField = (ev) => {
        const obj = { ...userLog };
        obj[ev.target.name] = ev.target.value;
        setUserLog(obj);
    }

    return (
        <div>
            <h1>Connexion</h1>
            <Form noValidate onSubmit={submit}>
                <Form.Group>
                    <Form.Label>Login</Form.Label>
                    <Form.Control name="email" type="email" onChange={changeFormField}
                        placeholder="Votre login" />
                </Form.Group>
                <InputMail label="Login" placeholder="Votre login"
                    onChange={changeFormField} name="email" />
                <Form.Group>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control name="password" type="password" onChange={changeFormField} />
                </Form.Group>
                <Button variant="primary" type="submit">Se connecter</Button>
            </Form>
            <p>{userLog.email}</p>
        </div>
    )
}

export default Login;