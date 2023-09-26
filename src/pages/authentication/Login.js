import { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
                    <Form.Control name="email" type="email" onChange={changeFormField} />
                </Form.Group>
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