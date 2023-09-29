import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputMail from "../../core/components/forms/InputMail";
import { UserContext } from "../../core/contexts/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {

    const [userLog, setUserLog] = useState({ email: '', password: '' });
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const submit = (ev) => {
        ev.preventDefault();
        let conf = window.confirm("est-ce que ça marche?");
        //appel et retour serveur auth
        let u = { lastname: 'Leponge', firstname: 'Bob', mail: userLog.email };
        setUser(u);
        sessionStorage.setItem('USER', JSON.stringify(u));
        navigate('/');
    }

    const changeFormField = (ev) => {
        const obj = { ...userLog };
        obj[ev.target.name] = ev.target.value;
        setUserLog(obj);
        console.log(obj);
    }

    return (
        <div>
            <h1>Connexion</h1>
            <Form noValidate onSubmit={submit}>

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