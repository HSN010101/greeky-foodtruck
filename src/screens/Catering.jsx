// C:\Users\hussa\greeky-foodtruck\src\screens\Catering.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

// REMOVED the imports for images since we're now using public/ folder paths
// import heroImg from "../assets/truck (3).jpeg";
// import packageImg1 from "../assets/truck (4).jpeg";
// import packageImg2 from "../assets/truck (5).jpeg";
// import packageImg3 from "../assets/truck (6).jpeg";
// import galleryImg1 from "../assets/truck (7).jpeg";
// import galleryImg2 from "../assets/truck (8).jpeg";
// import galleryImg3 from "../assets/truck (9).jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Catering = () => {
  // Basic form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    details: "",
  });

  // State to show a thank-you or confirmation message
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real-world app, you'd send formData to a server here
    console.log("Catering Request: ", formData);

    // Show a confirmation and reset form
    setShowConfirmation(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      location: "",
      details: "",
    });
  };

  return (
    <motion.div
      style={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ========== HERO SECTION ========== */}
      <div style={styles.heroSection}>
        {/* Updated to use public folder path: truck-3.jpeg */}
        <img
          src="/truck-3.jpeg"
          alt="Food Truck Catering"
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Catering Services</h1>
          <p style={styles.heroSubtitle}>
            Let Greeky Food Truck make your special event truly unforgettable!
          </p>
        </div>
      </div>

      {/* ========== WHY CATER WITH US ========== */}
      <div style={styles.whySection}>
        <h2 style={styles.sectionTitle}>Why Cater with Greeky Food Truck?</h2>
        <p style={styles.whyText}>
          From weddings to corporate events, our authentic Greek cuisine,
          friendly staff, and mobile kitchen setup make every celebration a
          feast to remember. We handle everything, so you can focus on enjoying
          your day!
        </p>
      </div>

      {/* ========== PACKAGES / OPTIONS ========== */}
      <div style={styles.packagesSection}>
        <h2 style={styles.sectionTitle}>Catering Packages</h2>
        <div style={styles.packageGrid}>
          {/* Package 1 */}
          <motion.div
            style={styles.packageCard}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/truck-4.jpeg"
              alt="Package 1"
              style={styles.packageImage}
            />
            <h3 style={styles.packageName}>Basic Greek Feast</h3>
            <p style={styles.packageDesc}>
              Ideal for smaller gatherings. Includes our signature gyros,
              Greek salads, and homemade dips.
            </p>
          </motion.div>

          {/* Package 2 */}
          <motion.div
            style={styles.packageCard}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/truck-5.jpeg"
              alt="Package 2"
              style={styles.packageImage}
            />
            <h3 style={styles.packageName}>Mediterranean Spread</h3>
            <p style={styles.packageDesc}>
              A robust selection of souvlaki skewers, dolmades, dips,
              and dessert options for mid-sized events.
            </p>
          </motion.div>

          {/* Package 3 */}
          <motion.div
            style={styles.packageCard}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/truck-6.jpeg"
              alt="Package 3"
              style={styles.packageImage}
            />
            <h3 style={styles.packageName}>Premium Celebration</h3>
            <p style={styles.packageDesc}>
              Perfect for weddings or large gatherings. Features an
              expanded menu, premium ingredients, and personalized
              service staff.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ========== OPTIONAL: MINI GALLERY ========== */}
      <div style={styles.gallerySection}>
        <h2 style={styles.sectionTitle}>Visual Tastes</h2>
        <p style={styles.whyText}>A glimpse of our recent catering events:</p>
        <div style={styles.galleryGrid}>
          <motion.img
            src="/truck-7.jpeg"
            alt="Catering Gallery 1"
            style={styles.galleryImg}
            whileHover={{ scale: 1.03 }}
          />
          <motion.img
            src="/truck-8.jpeg"
            alt="Catering Gallery 2"
            style={styles.galleryImg}
            whileHover={{ scale: 1.03 }}
          />
          <motion.img
            src="/truck-9.jpeg"
            alt="Catering Gallery 3"
            style={styles.galleryImg}
            whileHover={{ scale: 1.03 }}
          />
        </div>
      </div>

      {/* ========== BOOKING / INQUIRY FORM ========== */}
      <div style={styles.formSection}>
        <h2 style={styles.sectionTitle}>Book Your Event</h2>
        <p style={styles.whyText}>
          Ready to serve authentic Greek flavors at your event? Fill out
          the form below, and we’ll get back to you with more details.
        </p>

        <motion.form
          style={styles.form}
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.005 }}
        >
          <label style={styles.label}>Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            style={styles.input}
          />

          <label style={styles.label}>Phone</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            style={styles.input}
          />

          <label style={styles.label}>Event Date</label>
          <input
            type="date"
            required
            value={formData.eventDate}
            onChange={(e) =>
              setFormData({ ...formData, eventDate: e.target.value })
            }
            style={styles.input}
          />

          <label style={styles.label}>Location</label>
          <input
            type="text"
            required
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            style={styles.input}
          />

          <label style={styles.label}>Details / Special Requests</label>
          <textarea
            value={formData.details}
            onChange={(e) =>
              setFormData({ ...formData, details: e.target.value })
            }
            style={styles.textArea}
            placeholder="Type any additional info here..."
          />

          <motion.button
            style={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Inquiry
          </motion.button>
        </motion.form>
      </div>

      {/* ========== THANK YOU MODAL / CONFIRMATION ========== */}
      {showConfirmation && (
        <motion.div
          style={styles.confirmation}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 style={styles.confirmationTitle}>Thank You!</h3>
          <p>
            We’ve received your catering inquiry and will get in touch
            with you soon!
          </p>
          <button
            onClick={() => setShowConfirmation(false)}
            style={styles.closeBtn}
          >
            Close
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

/* ===== Inline Styles (unchanged) ===== */
const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#FDFDFD",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // Gap between sections
    gap: "2rem",
    paddingBottom: "2rem",
  },
  heroSection: {
    position: "relative",
    width: "100%",
    height: "60vh",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(70%)",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heroTitle: {
    color: "#fff",
    fontSize: "3rem",
    textAlign: "center",
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
  },
  heroSubtitle: {
    color: "#fff",
    fontSize: "1.2rem",
    marginTop: "1rem",
    textAlign: "center",
    textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
  },
  whySection: {
    maxWidth: "900px",
    textAlign: "center",
    padding: "0 1rem",
  },
  sectionTitle: {
    color: "#A61D50",
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  whyText: {
    color: "#333",
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  packagesSection: {
    maxWidth: "1200px",
    width: "100%",
    padding: "0 1rem",
  },
  packageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  packageCard: {
    backgroundColor: "#A3BCD2",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  packageImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "0.75rem",
  },
  packageName: {
    color: "#213B73",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  packageDesc: {
    color: "#333",
    fontSize: "0.9rem",
    lineHeight: 1.5,
  },
  gallerySection: {
    maxWidth: "1000px",
    width: "100%",
    textAlign: "center",
    padding: "0 1rem",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  galleryImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  formSection: {
    maxWidth: "700px",
    width: "100%",
    padding: "0 1rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
    backgroundColor: "#A3BCD2",
    padding: "1.5rem",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  label: {
    color: "#213B73",
    fontWeight: "bold",
  },
  input: {
    padding: "0.7rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textArea: {
    padding: "0.7rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minHeight: "80px",
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#A61D50",
    color: "#fff",
    border: "none",
    padding: "0.7rem 1.2rem",
    borderRadius: "4px",
    cursor: "pointer",
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

export default Catering;
