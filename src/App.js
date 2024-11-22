import React from 'react';
import ProfileCard from './components/ProfileCard';
import BlogCard from './components/BlogCard';
import FormValidation from './components/FormValidation';

import FemaleImage from './img/Female.jpeg';
import MaleImage from './img/Male.jpeg';
import BlogCard1 from './img/Prof1.jpeg';
import BlogCard2 from './img/Prof2.jpeg';

function App() {
    return (
        <div style={styles.app}>
            <h1>React Intermediate Projects</h1>

            <section style={styles.section}>
                <h2>Profile Card</h2>
                <ProfileCard
                    name="Anna Palmer"
                    image={FemaleImage}
                    description="A software developer passionate about coding."
                />
                <ProfileCard
                    name="Jack Smith"
                    image={MaleImage}
                    description="An experienced designer with a flair for creativity."
                />
            </section>

            <section style={styles.section}>
                <h2>Blog Card</h2>
                <BlogCard
                    title="Understanding React Props"
                    description="Props are used to pass data between components in React."
                    image={BlogCard1}
                />
                <BlogCard
                    title="Styling Components in React"
                    description="Learn how to style components effectively using CSS-in-JS."
                    image={BlogCard2}
                />
            </section>

            <section style={styles.section}>
                <h2>Form Validation</h2>
                <FormValidation />
            </section>
        </div>
    );
}

const styles = {
    app: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center',
    },
    section: {
        marginBottom: '40px',
    },
};

export default App;
