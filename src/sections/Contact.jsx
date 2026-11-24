import { Mail, Send } from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>Let's <span>Connect</span></h2>
          <p>
            I'm always interested in learning opportunities,
            collaborations, and connecting with new people.
          </p>
        </div>

        <div className="contact-card">

          <div className="contact-icon">
            <Mail size={32} />
          </div>

          <h3>Have an opportunity or question?</h3>

          <p>
            Feel free to reach out. I'd be happy to connect with you!
          </p>

          <a
            href="mailto:vijayashreeit0711@gmail.com"
            className="contact-button"
          >
            <Send size={18} />
            Send Me an Email
          </a>

          <div className="contact-socials">

            <a
              href="https://github.com/VIJAYASHREE-R-SPARK"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vijayashree-r-396540398/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Vijayashree_0711/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>

          </div>

          <p className="contact-email">
            vijayashreeit0711@gmail.com
          </p>

        </div>
      </div>
    </section>
  );
}

export default Contact;