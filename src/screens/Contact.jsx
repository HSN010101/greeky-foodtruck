// C:\Users\hussa\greeky-foodtruck\src\screens\Contact.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // For displaying a "thank you" or success message
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Handle form submission (basic example)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your own logic: e.g., email service, backend call, or console log
    console.log("Form Data: ", formData);

    setShowConfirmation(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      style={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.subtitle}>We’d Love to Hear from You</p>

      {/* ========== Contact + Map Section ========== */}
      <div style={styles.contentWrapper}>
        {/* Contact Form */}
        <motion.form
          style={styles.form}
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.005 }}
        >
          <label style={styles.label}>Your Name</label>
          <input
            style={styles.input}
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />

          <label style={styles.label}>Your Email</label>
          <input
            style={styles.input}
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <label style={styles.label}>Message</label>
          <textarea
            style={styles.textArea}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />

          <motion.button
            type="submit"
            style={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>

        {/* Google Map Embed (optional) */}
        <motion.div
          style={styles.mapContainer}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {/* Replace with your actual Google Maps embed URL or remove if not needed */}
          <iframe
            title="Greeky Food Truck Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.766492097222!2d-74.046689185239!3d4.672839343165558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b6f644b4ab7%3A0xcd4b1d12c4516cd8!2sExample%20Location!5e0!3m2!1sen!2sxx!4v0000000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      {/* Contact Info Text */}
      <p style={styles.infoText}>
        For special orders, catering, or if you simply want to share your{" "}
        <span style={styles.highlight}>Greeky Food Truck</span> experience,
        drop us a line. You can also reach us by phone at{" "}
        <strong>+1-234-567-890</strong> or email:{" "}
        <strong>info@greekyfoodtruck.com</strong>.
      </p>

      {/* Thank You Modal */}
      {showConfirmation && (
        <motion.div
          style={styles.confirmation}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 style={styles.confirmationTitle}>Thank You!</h3>
          <p>We have received your message. We’ll get back to you soon!</p>
          <button
            style={styles.closeBtn}
            onClick={() => setShowConfirmation(false)}
          >
            Close
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

/* ===== Inline Style Objects ===== */
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
    textAlign: "center",
  },
  subtitle: {
    color: "#00559E",
    fontSize: "1.2rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  contentWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    width: "100%",
    maxWidth: "1000px",
    marginBottom: "2rem",
  },
  form: {
    backgroundColor: "#A3BCD2",
    borderRadius: "8px",
    padding: "2rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  label: {
    color: "#213B73",
    fontWeight: "bold",
    marginBottom: "0.2rem",
    fontSize: "0.95rem",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textArea: {
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    minHeight: "120px",
  },
  button: {
    backgroundColor: "#A61D50",
    border: "none",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
  mapContainer: {
    width: "100%",
    height: "auto",
    minHeight: "300px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  infoText: {
    color: "#333",
    marginTop: "2rem",
    textAlign: "center",
    fontSize: "0.9rem",
    maxWidth: "600px",
  },
  highlight: {
    color: "#A61D50",
    fontWeight: "bold",
  },
  confirmation: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    textAlign: "center",
    zIndex: 9999,
  },
  confirmationTitle: {
    color: "#213B73",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  closeBtn: {
    backgroundColor: "#00559E",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    marginTop: "1rem",
    cursor: "pointer",
  },
};

export default Contact;
