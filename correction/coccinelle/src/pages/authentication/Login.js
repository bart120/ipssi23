import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputMail from "../../core/components/forms/InputMail";
import { UserContext } from "../../core/contexts/AuthContext";
import { useNavigate } from "react-router";
import InputPassword from "../../core/components/forms/InputPassword";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";

const Login = () => {

    const [userLog, setUserLog] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    const submit = (ev) => {
        ev.preventDefault();

        if (userLog.email != '' /*&& userLog.password != ''*/) {
            dispatch(login(userLog));
            navigate('/');
        }
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

                <InputPassword label="Mot de passe" name="password" onChange={changeFormField} />
                <Button variant="primary" type="submit">Se connecter</Button>
            </Form>
        </div>
    )
}

export default Login;