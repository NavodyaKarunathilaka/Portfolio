import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Landscape Management System"
              description="GreenScape is a comprehensive Landscape Management System designed to streamline landscaping business operations. It efficiently handles customer management, service scheduling, inventory tracking, and employee management to ensure smooth day-to-day operations."
              ghLink="https://github.com/NavodyaKarunathilaka/GreenScape"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Computer Spare Parts Management System"
              description=" Cyber Mart – Online Spare Parts Management System
                           I worked on Cyber Mart as a group project during my second year, first semester at SLIIT. It’s an online spare parts management system built with HTML, CSS, and JavaScript for the frontend, and Java with MySQL for the backend using Tomcat 9.

                          My main role was implementing the payment functionality. I designed and styled the payment page, added form validation with JavaScript, and handled payment processing using Java Servlets, JSP, and MySQL. This project helped me master web development basics, apply OOP concepts like encapsulation and inheritance, and practice secure coding and team collaboration."
              ghLink="https://github.com/NavodyaKarunathilaka/Cyber-Mart-Web-App"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Personal Finance Tracker App"
              description="BudgetBee is a comprehensive personal finance management application designed to help users track their income, expenses, and budgets effectively. Built with modern Android development practices, BudgetBee provides a clean, intuitive interface for managing personal finances."
              ghLink="https://github.com/NavodyaKarunathilaka/BudgetBee-Finance-Tracker-App"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=" Skinova - Skincare Companion App UI Design"
              description="Skinova is a comprehensive skincare application designed to help users discover personalized skincare routines, track their skin health, and purchase recommended products. This repository contains the Figma UI design showcasing the main navigation structure, user flows, and interface components."
              ghLink="https://github.com/NavodyaKarunathilaka/skinova-skincare-app-ui"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Visit-Lanka_A-tourism-website-PHP-MySQL-"
              description="A full-stack PHP & MySQL web app to explore Sri Lanka’s tourist destinations, book nearby hotels, view detailed place info, manage bookings and transactions, and provide user feedback, with admin/staff management and coupon offers."
              ghLink="https://github.com/NavodyaKarunathilaka/Visit-Lanka-Web-App"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MusicHub - Android Music Player"
              description="MusicHub is a modern Android music streaming application developed in Kotlin using Android Studio. It features a clean and intuitive UI to deliver a seamless user experience for music lovers."
              ghLink="https://github.com/NavodyaKarunathilaka/Android-Music-Player-App"
                
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
