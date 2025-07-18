import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Navodya Karunathilaka </span>
            from <span className="purple">Sri lanka.</span>
            <br />
            I'm currently pursuing a Bachelor of Science in BSc (Hons) in Information Technology
Specialising in Software Engineering at SLIIT, with a strong interest in exploring and learning about the latest advancements in the tech industry.
            <br />
             I’m always eager to expand my knowledge and skills, staying up-to-date with emerging technologies and innovations.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Navodya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
