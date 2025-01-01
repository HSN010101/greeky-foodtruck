// C:\Users\hussa\greeky-foodtruck\src\screens\Order.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample menu data (customize as needed)
const SAMPLE_MENU = [
  {
    id: 1,
    name: "Gyro Wrap",
    description: "Classic gyro with tomatoes, onions, and tzatziki in warm pita.",
    price: 8.99,
    image: "", // add a valid path if you have images
  },
  {
    id: 2,
    name: "Souvlaki Plate",
    description: "Tender grilled meat skewers served with pita, salad, and tzatziki.",
    price: 12.99,
    image: "",
  },
  {
    id: 3,
    name: "Dolmades",
    description: "Grape leaves stuffed with rice, herbs, and a hint of lemon.",
    price: 5.49,
    image: "",
  },
  {
    id: 4,
    name: "Greek Salad",
    description: "Crisp lettuce, feta, olives, and a tangy dressing.",
    price: 7.99,
    image: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Order = () => {
  // State for items in the cart (quantities, etc.)
  const [cart, setCart] = useState({});
  // State for user info
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    notes: "",
  });
  // State to show confirmation after order
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Handle quantity changes
  const handleQuantityChange = (menuItem, quantity) => {
    setCart((prevCart) => {
      // If quantity is 0 or negative, remove the item from the cart
      if (quantity <= 0) {
        const updatedCart = { ...prevCart };
        delete updatedCart[menuItem.id];
        return updatedCart;
      } else {
        return {
          ...prevCart,
          [menuItem.id]: {
            ...menuItem,
            quantity: parseInt(quantity, 10),
          },
        };
      }
    });
  };

  // Calculate subtotal
  const getSubtotal = () => {
    return Object.values(cart).reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  // Handle form submission
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!Object.keys(cart).length) {
      alert("Please add at least one item to your cart.");
      return;
    }
    // In a real app, you would send this data to your backend or payment gateway
    console.log("Order Submitted:", cart, userInfo);

    // Show confirmation and clear cart/user info
    setShowConfirmation(true);
    setCart({});
    setUserInfo({ name: "", email: "", notes: "" });
  };

  return (
    <motion.div
      className="order-container"
      style={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 style={styles.title}>Pre-Order Online</h1>
      <p style={styles.subtitle}>Skip the line. Order ahead for pickup!</p>

      {/* Menu Section */}
      <div style={styles.menuSection}>
        <h2 style={styles.sectionTitle}>Our Specials</h2>
        <div style={styles.menuGrid}>
          {SAMPLE_MENU.map((item) => {
            const cartItem = cart[item.id] || {};
            return (
              <motion.div
                key={item.id}
                style={styles.menuCard}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* If you have an image, display it here */}
                {/* <img src={item.image} alt={item.name} style={styles.menuImage} /> */}
                <h3 style={styles.itemTitle}>{item.name}</h3>
                <p style={styles.itemDesc}>{item.description}</p>
                <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>

                <div style={styles.quantityWrapper}>
                  <label htmlFor={`qty-${item.id}`} style={styles.quantityLabel}>
                    Qty:
                  </label>
                  <input
                    id={`qty-${item.id}`}
                    type="number"
                    min="0"
                    value={cartItem.quantity || 0}
                    onChange={(e) =>
                      handleQuantityChange(item, e.target.value)
                    }
                    style={styles.quantityInput}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Order Form & Summary */}
      <div style={styles.orderFormSection}>
        <h2 style={styles.sectionTitle}>Your Order</h2>
        <div style={styles.cartSummary}>
          <p style={styles.cartTotal}>
            Subtotal: <strong>${getSubtotal().toFixed(2)}</strong>
          </p>
        </div>
        <form onSubmit={handleSubmitOrder} style={styles.orderForm}>
          <label style={styles.label}>Your Name</label>
          <input
            type="text"
            required
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            style={styles.input}
          />

          <label style={styles.label}>Your Email</label>
          <input
            type="email"
            required
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            style={styles.input}
          />

          <label style={styles.label}>Notes / Special Requests</label>
          <textarea
            value={userInfo.notes}
            onChange={(e) =>
              setUserInfo({ ...userInfo, notes: e.target.value })
            }
            style={styles.textArea}
            placeholder="E.g., No onions, extra sauce..."
          />

          <motion.button
            type="submit"
            style={styles.orderButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Place Order
          </motion.button>
        </form>
      </div>

      {/* Thank You Message or Modal */}
      {showConfirmation && (
        <motion.div
          style={styles.confirmation}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 style={styles.confirmationTitle}>Thank You!</h3>
          <p>Your order has been received. We’ll have it ready soon!</p>
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
  menuSection: {
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "3rem",
  },
  sectionTitle: {
    color: "#A61D50",
    fontSize: "1.8rem",
    marginBottom: "1rem",
    textAlign: "left",
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "1.5rem",
  },
  menuCard: {
    backgroundColor: "#A3BCD2",
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  menuImage: {
    width: "100%",
    height: "auto",
    marginBottom: "1rem",
    borderRadius: "6px",
    objectFit: "cover",
  },
  itemTitle: {
    fontSize: "1.2rem",
    color: "#213B73",
    marginBottom: "0.25rem",
  },
  itemDesc: {
    fontSize: "0.9rem",
    color: "#333",
    marginBottom: "0.5rem",
  },
  itemPrice: {
    color: "#A61D50",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  quantityWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginTop: "auto",
  },
  quantityLabel: {
    color: "#213B73",
    fontWeight: "bold",
  },
  quantityInput: {
    width: "50px",
    padding: "0.4rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
  orderFormSection: {
    width: "100%",
    maxWidth: "800px",
    marginBottom: "3rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  cartSummary: {
    backgroundColor: "#A3BCD2",
    padding: "1rem",
    borderRadius: "6px",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  cartTotal: {
    fontSize: "1.1rem",
    color: "#213B73",
  },
  orderForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  label: {
    fontWeight: "bold",
    color: "#213B73",
    marginBottom: "0.25rem",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textArea: {
    padding: "0.8rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    minHeight: "100px",
  },
  orderButton: {
    backgroundColor: "#A61D50",
    border: "none",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    cursor: "pointer",
    alignSelf: "flex-start",
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

export default Order;
