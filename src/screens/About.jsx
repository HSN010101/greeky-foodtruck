// C:\Users\hussa\greeky-foodtruck\src\screens\About.jsx
import React from "react";
import { motion } from "framer-motion";
// If you want to display a photo of the founder(s) or the truck, import here:
// import founderImg from "../assets/founder.jpg";
// import truck2 from "../assets/truck (2).jpeg";

const About = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#FDFDFD",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
    },
    title: {
      color: "#213B73",
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    subtitle: {
      color: "#00559E",
      fontSize: "1.2rem",
      marginBottom: "2rem",
      textAlign: "center",
    },
    contentWrapper: {
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      alignItems: "center",
    },
    paragraph: {
      fontSize: "1rem",
      color: "#333",
      lineHeight: "1.6",
      textAlign: "left",
    },
    highlight: {
      color: "#A61D50",
      fontWeight: "bold",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      objectFit: "cover",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
  };

  // For a fade-in effect on the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
      },
    },
  };

  // Another variant for images/text
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      style={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 style={styles.title}>Our Story</h1>
      <p style={styles.subtitle}>Discover the Heart of Greeky Food Truck</p>

      <motion.div style={styles.contentWrapper} variants={itemVariants}>
        {/* Example if you want to show an image of the founder or the truck */}
        {/* <img src={founderImg} style={styles.image} alt="Founders" /> */}

        <p style={styles.paragraph}>
          Welcome to <span style={styles.highlight}>Greeky Food Truck</span>, 
          where our passion for authentic Greek cuisine meets the freedom of 
          the open road. Our journey began with a simple belief: great flavors 
          deserve to be shared far and wide, and there's no better way to do 
          that than by bringing our kitchen directly to the streets.
        </p>

        <p style={styles.paragraph}>
          Founded by a family whose roots trace back to the sun-drenched 
          coasts of the Mediterranean, we use treasured recipes passed down 
          through generations. From succulent <em>dolmades</em> to tangy 
          <em>tzatziki</em>, every dish at <span style={styles.highlight}>Greeky Food Truck</span> 
          is crafted with love, tradition, and a sprinkle of modern innovation.
        </p>

        <p style={styles.paragraph}>
          Today, we’re proud to serve our flavorful menu at bustling markets, 
          lively festivals, and local communities far beyond our humble beginnings. 
          Whether you’re a dedicated foodie or simply craving something 
          different for lunch, we invite you to join us for an unforgettable 
          dining experience on wheels.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
