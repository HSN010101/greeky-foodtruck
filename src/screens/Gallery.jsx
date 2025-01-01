// C:\Users\hussa\greeky-foodtruck\src\screens\Gallery.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

// Removed imports like `import img1 from "../assets/truck (3).jpeg";`
// We'll reference images in /public instead.

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Array of images for the gallery, now referencing /public/ paths
const GALLERY_IMAGES = [
  { src: "/truck-3.jpeg", alt: "Truck 3" },
  { src: "/truck-4.jpeg", alt: "Truck 4" },
  { src: "/truck-5.jpeg", alt: "Truck 5" },
  { src: "/truck-6.jpeg", alt: "Truck 6" },
  { src: "/truck-7.jpeg", alt: "Truck 7" },
  { src: "/truck-8.jpeg", alt: "Truck 8" },
  { src: "/truck-9.jpeg", alt: "Truck 9" },
  { src: "/truck-2.jpeg", alt: "Truck 2" },
];

const Gallery = () => {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const handleImageClick = (imgSrc) => {
    setLightboxImage(imgSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <motion.div
      style={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 style={styles.title}>Our Gallery</h1>
      <p style={styles.subtitle}>A taste of Greeky Food Truck in pictures</p>

      {/* Image Grid */}
      <div style={styles.gridWrapper}>
        {GALLERY_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            style={styles.imgCard}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleImageClick(image.src)}
          >
            <img src={image.src} alt={image.alt} style={styles.imgThumb} />
          </motion.div>
        ))}
      </div>

      {/* Lightbox (Modal) */}
      {lightboxOpen && (
        <motion.div
          style={styles.lightbox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            style={styles.lightboxContent}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <img
              src={lightboxImage}
              alt="Enlarged view"
              style={styles.lightboxImg}
            />
            <button style={styles.closeBtn} onClick={closeLightbox}>
              X
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

/* ===== Inline Styles ===== */
const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#FDFDFD",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 1rem",
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
  gridWrapper: {
    width: "100%",
    maxWidth: "1200px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1rem",
  },
  imgCard: {
    backgroundColor: "#A3BCD2",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgThumb: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
  },
  lightbox: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  lightboxContent: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "hidden",
  },
  lightboxImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "8px",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#A61D50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    width: "32px",
    height: "32px",
    cursor: "pointer",
    fontSize: "1rem",
    textAlign: "center",
    lineHeight: "32px",
  },
};

export default Gallery;
