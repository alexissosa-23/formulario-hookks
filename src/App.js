import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Respuesta from './components/Respuesta';

function App() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div className="App">
            <Formulario onFormSubmit={handleFormSubmit} />
            <Respuesta formData={formData} />
        </div>
    );
}

export default App;
