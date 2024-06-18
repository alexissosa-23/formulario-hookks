import React, { useState, useEffect } from 'react';

const Formulario = ({ onFormSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        onFormSubmit({ firstName, lastName, email, password, confirmPassword });
    }, [firstName, lastName, email, password, confirmPassword, onFormSubmit]);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <label>First Name</label>
                <input 
                    type="text" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                />
            </div>
            <div>
                <label>Last Name</label>
                <input 
                    type="text" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                />
            </div>
            <div>
                <label>Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div>
                <label>Confirm Password</label>
                <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
            </div>
        </form>
    );
};

export default Formulario;
