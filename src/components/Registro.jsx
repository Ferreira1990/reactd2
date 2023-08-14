import SocialButtom from "./SocialButton";
import { useState } from 'react';
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = ({ alert, setAlert })=>{
   
    return (
   <>
    <h1>Crea una Cuenta</h1>
    <SocialButtom icon="fa-brands fa-facebook"/>
    <SocialButtom icon="fa-brands fa-github"/>
    <SocialButtom icon="fa-brands fa-linkedin-in"/>
    <Formulario setAlert={setAlert}/>
    {alert.msg && <Alert msg={alert.msg} color={alert.color}/>}
 </>
 );
 
};

export default Registro;