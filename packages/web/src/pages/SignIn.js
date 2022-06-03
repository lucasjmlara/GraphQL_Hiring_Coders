import React, { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/authenticate', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        // .then((response) => response.json())
        .then((data) => console.log('Success!', data));
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
                    inputMode="email" 
                    autoComplete="username"/>
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input 
                    id="password" 
                    value={password}
                    onChange={handlePasswordChange} 
                    type="password" 
                    autoComplete="current-password"/>
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    );
}