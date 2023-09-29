import { useContext, useState, } from "react";
import { ToastContext } from "../../contexts/ToastContext";

const Toast = () => {
    const [toast, setToast] = useState(ToastContext);

    //const toggleShow = () => setToast(undefined);

    return (
        <div>
            <Toast show={true} >
                <Toast.Header>
                    <strong className="me-auto">{toast?.title}</strong>
                </Toast.Header>
                <Toast.Body>{toast?.message}</Toast.Body>
            </Toast>
        </div>
    );
}

export default Toast;