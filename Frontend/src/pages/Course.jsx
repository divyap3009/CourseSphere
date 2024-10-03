import React from "react";
import Card from "../components/Card";
import "../assets/styles/Course.css";

const Course = () => {
  return (
    <div className="home-container">
      <h1 className="h1-tag">All Courses</h1>
      <div className="course-list">
        <Card
          image={require("../assets/image/Digital-marketing.webp")}
          title="Digital Marketing Mastery"
          description="Create, Engage, Convert"
        />
        <Card
          image={require("../assets/image/graphic-design.webp")}
          title="Graphic Design Fundamentals"
          description="Design, Create, Inspire"
        />
        <Card
          image={require("../assets/image/app-dev.jpeg")}
          title="Mobile App Development"
          description="Innovate, Code, Launch"
        />
        <Card
          image={require("../assets/image/ml.jpeg")}
          title="Machine Learning Basics"
          description="Train, Optimize, Predict"
        />
        <Card
          image={require("../assets/image/augmented.jpeg")}
          title="Augmented Reality Development"
          description="Protect, Detect, Respond"
        />
        <Card
          image={require("../assets/image/cloud-computing.jpeg")}
          title="Cloud Computing Fundamentals"
          description="Scale, Store, Manage"
        />
        <Card
          image={require("../assets/image/data-analytics.png")}
          title="Data Analytics Bootcamp"
          description="Transforming data insights"
        />
        <Card
          image={require("../assets/image/blockchain.jpeg")}
          title="Blockchain Technology Overview"
          description="Understanding decentralized systems"
        />
        <Card
          image={require("../assets/image/ethical-learning.jpeg")}
          title="Ethical Hacking Essentials"
          description="Embracing cloud technologies"
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
          image={require("../assets/image/user-exp.jpeg")}
          title="User Experience Design Basics"
          description="Enhancing user interactions"
        />
        <Card
          image={require("../assets/image/quantam.png")}
          title="Quantum Computing Basics"
          description="Creating user-friendly applications"
        />
        <Card
          image={require("../assets/image/ai.jpeg")}
          title="Artificial Intelligence Fundamentals"
          description="Understanding intelligent systems"
        />
        <Card
          image={require("../assets/image/webDev.webp")}
          title="Web Development Bootcamp"
          description="Learn, Build, Deploy"
        />
        <Card
          image={require("../assets/image/data-science.jpeg")}
          title="Advanced Data Science Techniques"
          description="Analyze, Visualize, Predict"
        />
      </div>
    </div>
  );
};

export default Course;
