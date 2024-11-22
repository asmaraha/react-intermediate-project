import React from "react";

const ReusableCard = ({ title, description, image }) => {
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
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        maxWidth: "300px",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "8px",
    },
};

export default ReusableCard;
