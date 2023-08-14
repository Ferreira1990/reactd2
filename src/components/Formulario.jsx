import { useState} from "react";

const Formulario =({alerta}) => {
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState ("");

const validarDatos =(e) => {
        e.preventDefault();
        if (password != confirmPassword){
            setAlert({
                msg: "Las contraseñas no coinciden !)",
                color: "danger",
        });
        return;
        }

        if (
            nombre === "" ||
            email   === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            setAlert({
                msg:"Completa los campos !",
                color: "danger",
            });
            return;
        }

        alert("Cuenta creada exitosamente !")
        setNombre("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
};

return (
    <>
        <form onsubmit={validarDatos}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onchange={(e) => setNombre (e.target.value)}
                />
            <input
                type="email"
                name="email"
                placeholder="tuemail@ejemplo.com"
                value={email}
                onchange={(e) => setEmail (e.target.value)}
                />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onchange={(e) => setPassword (e.target.value)}
                />    
            <input
                type="confirmPassword,"
                name="confirmPassword,"
                placeholder="Confirma tu Contraseña"
                value={confirmPassword,}
                onchange={(e) => setConfirmPassword (e.target.value)}
                />
                <div>
                    <button type="submit">Registrarse</button>
                </div>
        </form>   
    </>
);   
};

export default Formulario;