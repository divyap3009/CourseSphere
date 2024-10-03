import React from "react";
import "../assets/styles/Home.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Accelerate Your Career Growth & Upskill Yourself</h1>
        <Link to="/course">
          <button className="cta-button">Explore Course</button>
        </Link>
      </header>

      <section className="course-section">
        <h2>Featured Courses</h2>
        <div className="course-listt">
          <Card 
            image={require("../assets/image/data-analytics.png")}
            title="Data Analytics Bootcamp" 
            description="Transforming data insights" 
          />
          <Card 
            image={require("../assets/image/cloud-computing.jpeg")}
            title="Introduction to Cloud Computing" 
            description="Embracing cloud technologies" 
          />
          <Card 
            image={require("../assets/image/blockchain.jpeg")}
            title="Blockchain Technology Overview" 
            description="Understanding decentralized systems" 
          />
          <Card 
            image={require("../assets/image/cybersecurity.jpeg")}
            title="Fundamentals of Cybersecurity" 
            description="Safeguarding digital assets" 
          />
          <Card 
            image={require("../assets/image/agile.jpeg")}
            title="Agile Project Management" 
            description="Streamlining project workflows" 
          />
          <Card
          image={require("../assets/image/quantam.png")}
          title="Quantum Computing Basics"
          description="Creating user-friendly applications"
        />
        </div>
      </section>
    </div>
  );
};

export default Home;
