import React, { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [passaword, setPassaword] = useState('');

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePassawordChange = (event) => setPassaword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/authenticate', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                passaword,
            }),
        }).then((response) => response.json())
          .then(() => console.log('Success!'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input 
                    id="email" 
                    value={email} 
                    onChange={handleEmailChange}
                    type="email" 
                    inputmode="email" 
                    autoComplete="username"/>
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input 
                    id="password" 
                    value={password}
                    onChange={handlePassawordChange} 
                    type="password" 
                    autoComplete="current-password"/>
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    );
}