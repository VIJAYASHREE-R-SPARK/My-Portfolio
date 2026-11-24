import { MapPin, Code2, ExternalLink } from "lucide-react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="section-heading">
          <span>MY WORK</span>
          <h2>Featured <span>Projects</span></h2>
          <p>Some of the projects I've worked on during my learning journey.</p>
        </div>

        <div className="projects-grid">

          {/* TripTales AI */}
          <div className="project-card">
            <div className="project-image">
              <MapPin size={55} />
              <span>Full Stack Project</span>
            </div>

            <div className="project-content">
              <h3>TripTales AI</h3>

              <p className="project-subtitle">
                Travel Photo Sharing Community Platform
              </p>

              <p className="project-description">
                A travel community platform designed to let users share
                travel experiences, explore destinations, and preserve
                their travel memories in one place.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>Cloudinary</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/VIJAYASHREE-R-SPARK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Personal Portfolio */}
          <div className="project-card">
            <div className="project-image">
              <Code2 size={55} />
              <span>Frontend Project</span>
            </div>

            <div className="project-content">
              <h3>Personal Portfolio Website</h3>

              <p className="project-subtitle">
                Responsive Developer Portfolio
              </p>

              <p className="project-description">
                A personal portfolio website showcasing my technical skills,
                education, certifications, achievements, and projects.
                Designed with a modern dark theme and responsive layout.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Vite</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Lucide React</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/VIJAYASHREE-R-SPARK/My-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Movie Quote Guessing Game */}
          <div className="project-card">
            <div className="project-image">
              <Code2 size={55} />
              <span>Java Mini Project</span>
            </div>

            <div className="project-content">
              <h3>Movie Quote Guessing Game</h3>

              <p className="project-subtitle">
                Console-Based Java Game
              </p>

              <p className="project-description">
                A Java console game where players identify movies from
                famous dialogues. Features three difficulty levels,
                hints, score-based progression, Lucky Spin rewards,
                and a final player ranking system.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>OOP</span>
                <span>Arrays</span>
                <span>Methods</span>
                <span>Scanner</span>
                <span>Random</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/VIJAYASHREE-R-SPARK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ExternalLink size={18} />
                </a>
              </div>

              <p className="project-note">
                Developed during 19-Day Placement Training
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;