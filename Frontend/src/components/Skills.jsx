import React from "react";


const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 71 },
        { name: "JavaScript", level: 92 },
        { name: "C++", level: 75 },
        { name: "Java", level: 80 },
        { name: "Python", level: 88 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 88 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Authentication", level: 75 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 70 },
        { name: "Postman", level: 85 },
      ],
    },
  ];

  const ProgressBar = ({ skill }) => {
    return (
      <div className="mb-4">
        <div className="d-flex justify-content-between mb-1">
          <span className="fw-medium">{skill.name}</span>
          <span className="text-primary fw-bold">{skill.level}%</span>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: `${skill.level}%` }}
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Skills</h2>
          <div className="skills-divider mx-auto mb-3"></div>
          <p className="text-muted">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold mb-4">
                    {category.title}
                  </h5>
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-5">
          <h3 className="fw-bold text-center mb-4">Additional Expertise</h3>
          <div className="row g-3">
            {[
              "Responsive Design",
              "SEO Optimization",
              "Performance Optimization",
              "Cross-browser Compatibility",
              "Agile Methodology",
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
              "Testing & Debugging",
              "Documentation",
              "UI/UX Design",
              "Version Control"
            ].map((skill, index) => (
              <div className="col-6 col-md-4 col-lg-2" key={index}>
                <div className="expertise-card text-center p-3">
                  <span className="fw-medium">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
