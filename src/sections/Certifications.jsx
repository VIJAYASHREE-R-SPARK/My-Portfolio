import { Award, Code, Cloud, BookOpen } from "lucide-react";
import "./Certifications.css";

import googleBadge from "../assets/Google Cloud Badge.jpeg";
function Certifications() {
  const certifications = [
    {
      title: "Introduction to Software Testing",
      organization: "Simplilearn",
      icon: <Award size={30} />,
    },
    {
      title: "AWS for Beginners",
      organization: "Simplilearn",
      icon: <Cloud size={30} />,
    },
    {
      title: "Digital Marketing Management",
      organization: "Simplilearn",
      icon: <BookOpen size={30} />,
    },
    {
      title: "Python Programming",
      organization: "Spoken Tutorial Project, IIT Bombay",
      icon: <Code size={30} />,
    },
    {
      title: "Java Programming",
      organization: "Spoken Tutorial Project, IIT Bombay",
      icon: <Code size={30} />,
    },
    {
      title: "C Programming",
      organization: "Spoken Tutorial Project, IIT Bombay",
      icon: <Code size={30} />,
    },
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">

        <div className="section-heading">
          <span>MY ACHIEVEMENTS</span>
          <h2>My <span>Certifications</span></h2>
          <p>Certifications and learning achievements from various platforms.</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-icon">
                {certificate.icon}
              </div>

              <h3>{certificate.title}</h3>

              <p>{certificate.organization}</p>
            </div>
          ))}

          <div className="certification-card google-certification">
            <img
              src={googleBadge}
              alt="Google Cloud Introduction to Generative AI Completion Badge"
            />

            <h3>Introduction to Generative AI</h3>

            <p>Google Cloud</p>

            <span className="completion-label">Completion Badge</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Certifications;