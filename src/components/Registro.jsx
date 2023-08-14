import SocialButton from "./SocialButton";
import { useState } from 'react';
import Formulario from "./Formulario";
import Alert from "./Alert";


const Registro = ({ alert, setAlert })=>{

    return (
   <>
   <div className="padre">
   <div className="titlebox">
    <h1 className="titletext">Crea una Cuenta</h1>

    <div className="customicon">
    <SocialButton icon="fa-brands fa-facebook"/>
    <SocialButton icon="fa-brands fa-github"/>
    <SocialButton icon="fa-brands fa-linkedin-in"/>
    </div>
    <Formulario setAlert={setAlert}/>



    {alert.msg && <Alert msg={alert.msg} color={alert.color}/>}
    </div>
    </div>
 </>
 ); 
};

export default Registro;