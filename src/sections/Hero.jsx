import profileImg from '../assets/My Profile.jpeg'
import { ArrowDown, Sparkles } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Welcome to my Portfolio</span>
          </div>

          <h1>
            Hello, I'm <br />
            <span>Vijayashree</span>
          </h1>

          <h2>Aspiring Software Developer</h2>

          <p>
            Passionate about programming and software development.
            I enjoy solving problems, learning new technologies,
            and building meaningful projects that make a difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Explore My Work
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="YOUR_LINKEDIN_PROFILE_URL"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="hero-image-container">

          <img
            src={profileImg}
            alt="Vijayashree Profile"
            className="profile-img"
          />

          <div className="floating-card">
            <Sparkles size={18} />
            <span>Always Learning</span>
          </div>

        </div>

      </div>

      <a href="#about" className="scroll-down">
        <ArrowDown />
      </a>

    </section>
  )
}

export default Hero