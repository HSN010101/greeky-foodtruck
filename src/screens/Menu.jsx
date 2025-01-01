// C:\Users\hussa\greeky-foodtruck\src\screens\Menu.jsx

import React from "react";
import { motion } from "framer-motion";

// Optional: If you have images for each menu item, import them here
// import olivesImg from "../assets/olives-feta.jpg";
// import fefferonisImg from "../assets/fefferonis.jpg";
// import dolmadesImg from "../assets/dolmades.jpg";
// import tzatzikiImg from "../assets/tzatziki.jpg";
// import fetaSpreadImg from "../assets/feta-spread.jpg";

const Menu = () => {
  // Sample menu data (expand or modify as needed)
  const menuItems = [
    {
      name: "Mixed Olives with Feta Cheese & Herbs",
      description:
        "A variety of marinated olives paired with crumbly feta cheese, drizzled in aromatic herbs and extra virgin olive oil.",
      // image: olivesImg, // if you have an actual image
    },
    {
      name: "Filled Fefferonis with Cream Cheese",
      description:
        "Mildly spicy peppers stuffed with creamy cheese and a dash of olive oil for a tangy bite.",
      // image: fefferonisImg,
    },
    {
      name: "Stuffed Grape Leaves (Dolmades)",
      description:
        "Tender grape leaves filled with a fragrant rice blend, fresh herbs, and a hint of lemon.",
      // image: dolmadesImg,
    },
    {
      name: "Tzatziki",
      description:
        "Classic Greek dip made from creamy yogurt, cucumber, garlic, and a touch of olive oil.",
      // image: tzatzikiImg,
    },
    {
      name: "Herbed Feta Spread",
      description:
        "Smooth feta cheese whipped with select herbs, perfect for dipping or spreading on fresh pita.",
      // image: fetaSpreadImg,
    },
    // Add more items as desired
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      style={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 style={styles.title}>Our Menu</h1>
      <p style={styles.subtitle}>Handcrafted Greek Specialties on the Go</p>

      <motion.div style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            style={styles.menuCard}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* If you have an image for this item, uncomment:
            <img src={item.image} alt={item.name} style={styles.menuImage} />
            */}
            <h2 style={styles.itemName}>{item.name}</h2>
            <p style={styles.itemDesc}>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        style={styles.orderButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          // Example: redirect to /order page
          window.location.href = "/order";
        }}
      >
        Order Now
      </motion.button>
    </motion.div>
  );
};

/* ========== Inline Styles ========== */
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
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  subtitle: {
    color: "#00559E",
    fontSize: "1.2rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "1000px",
  },
  menuCard: {
    backgroundColor: "#A3BCD2",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  menuImage: {
    width: "100%",
    height: "180px",
    borderRadius: "6px",
    objectFit: "cover",
    marginBottom: "0.75rem",
  },
  itemName: {
    fontSize: "1.2rem",
    color: "#213B73",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  itemDesc: {
    fontSize: "0.9rem",
    color: "#333",
    lineHeight: 1.4,
  },
  orderButton: {
    marginTop: "2rem",
    backgroundColor: "#A61D50",
    border: "none",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Menu;
