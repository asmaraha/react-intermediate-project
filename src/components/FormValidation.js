import React, { useState } from 'react';

const FormValidation = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = 'First name is required';
        if (!formData.lastName) tempErrors.lastName = 'Last name is required';
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            tempErrors.email = 'Email is not valid';
        if (formData.password.length < 6)
            tempErrors.password = 'Password must be at least 6 characters';
        if (formData.password !== formData.confirmPassword)
            tempErrors.confirmPassword = 'Passwords do not match';
        if (!formData.dateOfBirth) tempErrors.dateOfBirth = 'Date of birth is required';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form Submitted Successfully!');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                style={styles.input}
            />
            <div style={styles.error}>{errors.firstName}</div>

            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                style={styles.input}
            />
            <div style={styles.error}>{errors.lastName}</div>

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
            />
            <div style={styles.error}>{errors.email}</div>

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
            />
            <div style={styles.error}>{errors.password}</div>

            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={styles.input}
            />
            <div style={styles.error}>{errors.confirmPassword}</div>

            <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                style={styles.input}
            />
            <div style={styles.error}>{errors.dateOfBirth}</div>

            <button type="submit" style={styles.button}>
                Submit
            </button>
        </form>
    );
};

const styles = {
    form: {
        width: '300px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        fontSize: '12px',
        marginBottom: '10px',
    },
};

export default FormValidation;
