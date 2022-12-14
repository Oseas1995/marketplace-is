import React, { useState } from "react";
import { supabase } from "../supabase/supabase";
import { Link } from "react-router-dom";

function Login() {


    //Con Esto se Autentica el Correo del Usuario con un enlace

    const [mail, setEmail] = useState("");
    const [pass, setPassword] = useState("");


    const handlog = async (e) => {
        e.preventDefault();
        try {
            const { data: error } = await supabase.auth.signInWithPassword({
                email: mail,
                password: pass,
            })
            console.log();
            if (error) throw error

            alert('test')
        } catch (e) {
            alert(e.message)
        }
    };


    return (
        <div className="Background_Login">
            <header>
                <h1>Login</h1>
            </header>
            <form onSubmit={e => e.preventDefault()}>
                <div className="ContainerLogin">
                    <div>
                        <label style={{ fontWeight: '700', marginRight: 5 }}>Correo:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="ejemplo@site.com"
                            value={mail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={{ fontWeight: '700', marginRight: 5 }}>Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="contraseña"
                            value={pass}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    onClickCapture={handlog}
                >Send</button>
                <div>
                    <p>Aun no estas registrado?</p>
                    <Link to="/logup">
                        <ul>LogUp</ul>
                    </Link>
                </div>
                <div>
                    <p>Volver a Homepage</p>
                    <Link to="/home">
                        <ul>Home</ul>
                    </Link>
                </div>
            </form>

        </div>
    );
}

export default Login;