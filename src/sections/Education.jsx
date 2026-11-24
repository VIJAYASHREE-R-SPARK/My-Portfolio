import { GraduationCap, School, Award } from "lucide-react";
import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <div className="section-heading">
          <span>MY ACADEMIC JOURNEY</span>
          <h2>My <span>Education</span></h2>
          <p>My educational background and academic achievements.</p>
        </div>

        <div className="education-timeline">

          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={28} />
            </div>
            <span className="education-year">2024 – 2028</span>
            <h3>B.Tech – Information Technology</h3>
            <h4>JJ College of Engineering and Technology</h4>
            <p>Currently pursuing undergraduate studies in Information Technology.</p>
            <div className="education-score">CGPA: 8.14</div>
          </div>

          <div className="education-card">
            <div className="education-icon">
              <School size={28} />
            </div>
            <span className="education-year">2024</span>
            <h3>Higher Secondary (12th)</h3>
            <h4>Government Girls Higher Secondary School, Townhall</h4>
            <p>Board: State Board</p>
            <div className="education-score">Percentage: 83%</div>
          </div>

          <div className="education-card">
            <div className="education-icon">
              <Award size={28} />
            </div>
            <span className="education-year">2022</span>
            <h3>Secondary School (10th)</h3>
            <h4>Government Girls Higher Secondary School, Townhall</h4>
            <p>Board: State Board</p>
            <div className="education-score">Percentage: 80%</div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;