import React from 'react';

const ProfileCard = ({ name, image, description }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={`${name}`} style={styles.image} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        width: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    image: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
    },
};

export default ProfileCard;
