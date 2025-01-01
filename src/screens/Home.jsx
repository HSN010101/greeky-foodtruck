// C:\Users\hussa\greeky-foodtruck\src\screens\Home.jsx

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick"; // React Slick
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"; // React Icons

/* ======================
   GLOBAL STYLES & ANIMATIONS
====================== */

/* Subtle parallax effect in hero */
const ParallaxAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 50%;
  }
`;

/* ======================
   PAGE CONTAINER
====================== */
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(245, 245, 245, 1) 0%,
    rgba(243, 243, 243, 1) 100%
  );
  font-family: "Poppins", Arial, sans-serif;
`;

/* ======================
   HERO SECTION
====================== */
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${ParallaxAnimation} 12s linear infinite alternate;
  background: linear-gradient(
    to bottom,
    rgba(166, 29, 80, 0.8) 10%,
    rgba(166, 29, 80, 0.2) 40%,
    transparent
  );
`;

const HeroImage = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(65%);
  transition: opacity 1s ease-in-out;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  max-width: 80%;
  margin: 0 auto;

  .headline {
    font-size: 3.2rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }

  .hero-button {
    background-color: #a61d50;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 4px;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
    box-shadow: 0 4px 10px rgba(166, 29, 80, 0.3);
  }

  .hero-button:hover {
    transform: scale(1.05);
    background-color: #8f1a44;
  }

  @media (max-width: 768px) {
    .headline {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 1rem;
    }
  }
`;

/* ======================
   FEATURES & ABOUT US
====================== */
const FeaturesContainer = styled(motion.div)`
  background-color: #fdfdfd;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .features-title {
    color: #213b73;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 0.5px;
  }

  .features-subtitle {
    color: #00559e;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.4;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: #a3bcd2;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.09);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  .feature-title {
    color: #213b73;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .feature-desc {
    color: #333;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(163, 188, 210, 0.4);
  }
`;

const AboutUsSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 3rem auto 0 auto;
  text-align: center;

  h2 {
    color: #213b73;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    color: #333;
    line-height: 1.5;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const TeamCard = styled.div`
  background-color: #fafafa;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  text-align: center;

  img {
    width: 80%;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }
  .name {
    font-weight: 600;
    color: #213b73;
    margin-bottom: 0.3rem;
  }
  .role {
    font-size: 0.85rem;
    color: #555;
  }
`;

/* ======================
   LOCATIONS / SCHEDULE
====================== */
const LocationsContainer = styled(motion.div)`
  background-color: #00559e;
  color: #fff;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .locations-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 0.5px;
  }

  .locations-subtitle {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    max-width: 600px;
    text-align: center;
    line-height: 1.4;
  }
`;

const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const ScheduleItem = styled(motion.li)`
  background-color: rgba(255, 255, 255, 0.15);
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  .left-part {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .day-label {
    font-weight: bold;
  }

  .right-part {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

/* ======================
   TESTIMONIALS
====================== */
const TestimonialsContainer = styled(motion.div)`
  background-color: #fdfdfd;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .testimonials-title {
    color: #213b73;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 0.5px;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background-color: #a3bcd2;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  .quote {
    font-style: italic;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .author {
    color: #213b73;
    font-weight: bold;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(163, 188, 210, 0.4);
  }
`;

/* ======================
   CAROUSEL (OPTIONAL)
====================== */
const CarouselSection = styled.div`
  padding: 3rem 2rem;
  background-color: #fdfdfd;

  h2 {
    color: #213b73;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 6px;
`;

/* ======================
   NEWSLETTER SIGNUP
====================== */
const NewsletterSection = styled.div`
  background: #f5f5f5;
  padding: 3rem 1.5rem;
  text-align: center;

  h3 {
    color: #213b73;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  p {
    color: #333;
    line-height: 1.4;
    max-width: 500px;
    margin: 0 auto 2rem auto;
  }

  form {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  input {
    padding: 0.6rem 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 220px;
  }
  button {
    background-color: #a61d50;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #8f1a44;
  }
`;

/* ======================
   CALL-TO-ACTION SECTION
====================== */
const CtaContainer = styled(motion.div)`
  background: linear-gradient(
    130deg,
    rgba(166, 29, 80, 1) 0%,
    rgba(166, 29, 80, 0.9) 40%,
    rgba(0, 85, 158, 0.85) 100%
  );
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;

  .cta-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  .cta-text {
    max-width: 600px;
    margin: 0 auto 2rem auto;
    font-size: 1.1rem;
    line-height: 1.4;
  }

  .cta-button {
    background-color: #fff;
    color: #a61d50;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
  }

  .cta-button:hover {
    transform: scale(1.05);
    background-color: #f2f2f2;
  }
`;

/* ======================
   HOME COMPONENT
====================== */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // slick CSS

const Home = () => {
  // 1) Hero slideshow images
  const heroImages = [
    "/truck-1.jpeg",
    "/truck-2.jpeg",
    "/truck-3.jpeg",
    "/truck-4.jpeg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // 2) Feature data
  const featureData = [
    {
      title: "Authentic Recipes",
      description:
        "Our menu is rooted in traditional Greek cuisine, curated by recipes passed down for generations.",
    },
    {
      title: "Fresh Ingredients",
      description:
        "We prioritize local produce and premium imports for an authentic Mediterranean experience.",
    },
    {
      title: "Friendly Service",
      description:
        "We love connecting with the community—our staff welcomes you with a smile!",
    },
    {
      title: "Mobile & Convenient",
      description:
        "We bring Greek flavors to your neighborhood, events, and celebrations—no fuss!",
    },
  ];

  // 3) Schedule data
  const schedule = [
    { day: "Monday", location: "Central Market, 9 AM - 2 PM" },
    { day: "Wednesday", location: "Riverside Park, 11 AM - 4 PM" },
    { day: "Friday", location: "Downtown Plaza, 10 AM - 3 PM" },
    { day: "Sunday", location: "Beachfront Boardwalk, 12 PM - 5 PM" },
  ];

  // 4) Testimonials
  const testimonials = [
    {
      quote:
        "Absolutely incredible! The tzatziki was the best I have ever had—fresh, tangy, and so flavorful!",
      author: "Maria A.",
    },
    {
      quote:
        "Greeky Food Truck made our event memorable. The dolmades were a hit among my friends!",
      author: "Jake R.",
    },
    {
      quote:
        "Never expected such authentic Greek food from a truck. The service was outstanding!",
      author: "Pauline L.",
    },
  ];

  // 5) Team (Your AI images)
  const teamMembers = [
    {
      name: "Dionysios",
      role: "Head Chef",
      img: "/Dionysios.png", // in public folder
    },
    {
      name: "Sophia",
      role: "Operations Manager",
      img: "/Sophia.png",
    },
    {
      name: "Yanni",
      role: "Souvlaki Specialist",
      img: "/Yanni.png",
    },
  ];

  // 6) Optional carousel images
  const carouselImages = [
    "/truck-5.jpeg",
    "/truck-6.jpeg",
    "/truck-7.jpeg",
    "/truck-8.jpeg",
    "/truck-9.jpeg",
  ];

  // Settings for react-slick carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <PageContainer>
      {/* ========== HERO SECTION ========== */}
      <HeroContainer>
        {heroImages.map((img, index) => (
          <HeroImage
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}

        <HeroContent>
          <div className="headline">Greeky Food Truck</div>
          <div className="subtitle">
            Bringing Authentic Greek Flavors to Your Neighborhood
          </div>
          <button
            className="hero-button"
            onClick={() => {
              window.location.href = "/menu";
            }}
          >
            View Our Menu
          </button>
        </HeroContent>
      </HeroContainer>

      {/* ========== FEATURES ========== */}
      <FeaturesContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="features-title">Why Choose Us?</div>
        <div className="features-subtitle">
          Discover what makes Greeky Food Truck the perfect choice for your next
          meal or event.
        </div>

        <CardGrid>
          {featureData.map((feat, idx) => (
            <FeatureCard
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="feature-title">{feat.title}</div>
              <div className="feature-desc">{feat.description}</div>
            </FeatureCard>
          ))}
        </CardGrid>

        {/* ========== ABOUT US / TEAM SECTION ========== */}
        <AboutUsSection>
          <h2>Meet the Team</h2>
          <p>
            Our dedicated team is committed to delivering the best Greek dishes
            straight from our family recipes. Each member brings a passion for
            food and hospitality, making your experience one to remember.
          </p>

          <div className="team-grid">
            {teamMembers.map((person, index) => (
              <TeamCard key={index}>
                <img src={person.img} alt={person.name} />
                <div className="name">{person.name}</div>
                <div className="role">{person.role}</div>
              </TeamCard>
            ))}
          </div>
        </AboutUsSection>
      </FeaturesContainer>

      {/* ========== LOCATIONS SECTION ========== */}
      <LocationsContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="locations-title">Where to Find Us</div>
        <div className="locations-subtitle">
          We serve up fresh Greek dishes around town. Catch us at these spots:
        </div>

        <ScheduleList>
          {schedule.map((item, idx) => (
            <ScheduleItem
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="left-part">
                <FaMapMarkerAlt />
                <span className="day-label">{item.day}</span>
              </div>
              <div className="right-part">
                <FaClock />
                <span>{item.location}</span>
              </div>
            </ScheduleItem>
          ))}
        </ScheduleList>
      </LocationsContainer>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <TestimonialsContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="testimonials-title">Happy Customers</div>
        <TestimonialsGrid>
          {testimonials.map((testi, idx) => (
            <TestimonialCard
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="quote">"{testi.quote}"</div>
              <div className="author">- {testi.author}</div>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>

      {/* ========== CAROUSEL SECTION (Optional) ========== */}
      <CarouselSection>
        <h2>Behind the Scenes</h2>
        <Slider {...carouselSettings}>
          {carouselImages.map((src, idx) => (
            <div key={idx}>
              <SlideImg src={src} alt={`Carousel ${idx}`} />
            </div>
          ))}
        </Slider>
      </CarouselSection>

      {/* ========== NEWSLETTER SIGNUP ========== */}
      <NewsletterSection>
        <h3>Stay in the Loop</h3>
        <p>
          Sign up for our newsletter to get updates on our weekly schedule,
          exclusive offers, and delicious new menu items!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for subscribing!");
          }}
        >
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </NewsletterSection>

      {/* ========== CALL TO ACTION ========== */}
      <CtaContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="cta-title">Ready to Savor Greeky Goodness?</div>
        <div className="cta-text">
          Whether you're planning a special event or simply craving a taste of
          Greece, we are here to serve you. Experience our fast, friendly, and
          flavorful food truck!
        </div>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "/contact";
          }}
        >
          Get in Touch
        </button>
      </CtaContainer>
    </PageContainer>
  );
};

/* ======================
   FRAMER MOTION VARIANTS
====================== */
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default Home;
