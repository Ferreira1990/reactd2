import React, {useState} from "react";

const Formulario =({setAlert}) => {
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState ("");

const validarDatos =(e) => {
        e.preventDefault();
        if (password !== confirmPassword){
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

        setAlert({
         msg:"Cuenta creada exitosamente !",
         color : "success",
        });
        setNombre("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
};

return (
    <>

    <div>
        <form className="customform" onSubmit={validarDatos}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre (e.target.value)}
                />
            <input
                type="email"
                name="email"
                placeholder="tuemail@ejemplo.com"
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword (e.target.value)}
                />    
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirma tu Contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword (e.target.value)}
                />
                <div>
                    <button className="custombuttoncf" type="submit">Registrarse</button>
                </div>
        </form>

        </div>   
    </>
);   
};

export default Formulario;