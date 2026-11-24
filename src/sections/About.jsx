import { User, GraduationCap, Code, Lightbulb } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="section-heading">
          <span>GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
          <p>A little introduction about myself and my journey.</p>
        </div>

        <div className="about-content">

          {/* First Card */}
          <div className="about-card">
            <div className="about-icon">
              <User size={25} />
            </div>

            <h3>Who I Am</h3>

            <p>
              Hello! I'm Vijayashree, an aspiring software developer
              passionate about technology and web development.
              I enjoy creating meaningful digital experiences
              and exploring new ideas.
            </p>
          </div>

          {/* Second Card */}
          <div className="about-card">
            <div className="about-icon">
              <GraduationCap size={25} />
            </div>

            <h3>Education</h3>

            <p>
              I am pursuing B.Tech in Information Technology,
              continuously developing my technical knowledge
              and programming skills.
            </p>
          </div>

          {/* Third Card */}
          <div className="about-card">
            <div className="about-icon">
              <Code size={25} />
            </div>

            <h3>My Interests</h3>

            <p>
              I am interested in web development, software engineering,
              learning programming languages and building projects.
            </p>
          </div>

          {/* Fourth Card */}
          <div className="about-card">
            <div className="about-icon">
              <Lightbulb size={25} />
            </div>

            <h3>My Goal</h3>

            <p>
              My goal is to become a skilled software developer
              and build useful applications that solve real-world problems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;