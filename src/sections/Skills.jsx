import {
  Code,
  Database,
  Brain,
  Network,
  Cloud,
  Monitor,
  Users
} from "lucide-react";

import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="section-heading">
          <span>WHAT I KNOW</span>
          <h2>Technical <span>Skills</span></h2>
          <p>My technical knowledge, tools and professional strengths.</p>
        </div>

        <div className="skills-content">

          {/* Programming Languages */}
          <div className="skills-card">
            <div className="skills-icon"><Code size={28} /></div>
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span>Java (Advanced)</span>
              <span>Python (Basic)</span>
              <span>SQL (Advanced)</span>
              <span>C (Basic)</span>
            </div>
          </div>

          {/* Linear Data Structures */}
          <div className="skills-card">
            <div className="skills-icon"><Database size={28} /></div>
            <h3>Data Structures — Linear</h3>
            <div className="skill-tags">
              <span>Arrays</span>
              <span>Singly Linked Lists</span>
              <span>Doubly Linked Lists</span>
              <span>Stacks</span>
              <span>Queues</span>
            </div>
          </div>

          {/* Non-Linear Data Structures */}
          <div className="skills-card">
            <div className="skills-icon"><Network size={28} /></div>
            <h3>Data Structures — Non-Linear</h3>
            <div className="skill-tags">
              <span>Binary Trees</span>
              <span>BST</span>
              <span>Graphs (BFS/DFS)</span>
              <span>Heaps</span>
              <span>Priority Queues</span>
              <span>Hash Tables</span>
              <span>LRU Cache Design</span>
              <span>Tries (Basic)</span>
            </div>
          </div>

          {/* Algorithms */}
          <div className="skills-card">
            <div className="skills-icon"><Brain size={28} /></div>
            <h3>Algorithms & Problem-Solving</h3>
            <div className="skill-tags">
              <span>Recursion</span>
              <span>Backtracking</span>
              <span>Divide & Conquer</span>
              <span>Greedy Algorithms</span>
              <span>Dynamic Programming (Basics)</span>
              <span>Two Pointers</span>
              <span>Sliding Window</span>
              <span>Binary Search</span>
              <span>Merge Sort</span>
              <span>Quick Sort</span>
              <span>Heap Sort</span>
              <span>Bit Manipulation</span>
              <span>Big-O Analysis</span>
            </div>
          </div>

          {/* Graph Algorithms */}
          <div className="skills-card">
            <div className="skills-icon"><Network size={28} /></div>
            <h3>Graph & Optimization Algorithms</h3>
            <div className="skill-tags">
              <span>Dijkstra's</span>
              <span>Bellman-Ford</span>
              <span>Floyd-Warshall</span>
              <span>Kruskal's</span>
              <span>Prim's (MST)</span>
              <span>Topological Sort</span>
              <span>Union-Find / DSU</span>
            </div>
          </div>

          {/* Databases */}
          <div className="skills-card">
            <div className="skills-icon"><Database size={28} /></div>
            <h3>Databases & SQL</h3>
            <div className="skill-tags">
              <span>DDL</span>
              <span>DML</span>
              <span>Joins</span>
              <span>Subqueries</span>
              <span>Aggregate Functions</span>
              <span>ER Modeling</span>
              <span>Relational Schema Design</span>
              <span>Normalization (1NF–3NF)</span>
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>

          {/* Cloud and DevOps */}
          <div className="skills-card">
            <div className="skills-icon"><Cloud size={28} /></div>
            <h3>Cloud & DevOps</h3>
            <div className="skill-tags">
              <span>AWS EC2 (Basic)</span>
              <span>AWS S3 (Basic)</span>
              <span>AWS IAM (Basic)</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Linux</span>
              <span>Shell Scripting</span>
            </div>
          </div>

          {/* Core Concepts */}
          <div className="skills-card">
            <div className="skills-icon"><Monitor size={28} /></div>
            <h3>Core Concepts</h3>
            <div className="skill-tags">
              <span>Networking Fundamentals</span>
              <span>Operating Systems Fundamentals</span>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-card">
            <div className="skills-icon"><Users size={28} /></div>
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              <span>Communication</span>
              <span>Adaptability</span>
              <span>Responsibility</span>
              <span>Teamwork & Collaboration</span>
              <span>Problem Solving</span>
              <span>Time Management</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;