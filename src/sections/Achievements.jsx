import { Trophy } from "lucide-react";
import leetcodeBadge from "../assets/leetcode.png";
import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">

        <div className="section-heading">
          <span>RECOGNITION</span>
          <h2>My <span>Achievements & Badges</span></h2>
          <p>A glimpse of my learning journey and accomplishments.</p>
        </div>

        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-image">
              <img
                src={leetcodeBadge}
                alt="LeetCode 50 Days Badge 2026"
              />
            </div>

            <div className="achievement-icon">
              <Trophy size={22} />
            </div>

            <h3>50 Days Badge 2026</h3>
            <p>LeetCode</p>

            <span className="achievement-label">
              Problem-Solving Achievement
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;