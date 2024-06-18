import React from 'react';

const Respuesta = ({ formData }) => {
    return (
        <div>
            <h2>Your Form Data</h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <p>Password: {formData.password}</p>
            <p>Confirm Password: {formData.confirmPassword}</p>
        </div>
    );
};

export default Respuesta;
