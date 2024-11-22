import React from 'react';

const BlogCard = ({ title, description, image }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <h3>{title}</h3>
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
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        marginBottom: '10px',
    },
};

export default BlogCard;

