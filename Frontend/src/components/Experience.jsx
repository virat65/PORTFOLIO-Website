import React from "react";

const Experience = () => {
  const experiences = [
    {
  type: "education",
  title: "High School (Class 10)",
  company: "Anand Public School, PSEB Board",
  period: "From 2018 to 2020",
  description: "Scored 95% in board exams",
  achievements: ["High academic performance", "Active in sports activity"]
},
{
  type: "education",
  title: "Senior Secondary (Class 12) in Science", // choose your stream

  company: "CBSE ",
  period: "From 2020 to 2022",  achievements:["Time management from juggling studies and hobbies.","Volunteered in school or local community events"],
}

, {
      type: "education",
      title: "B.Tech in Computer Science & Engineering",
      company: "I.K. Gujral Punjab Technical University",
      period: "2022 - 2026",
      description:
        "Studied Computer Science fundamentals, Data Structures, Algorithms, Web Development, and IoT. Participated actively in projects and coding competitions.",
      achievements: [
        " Focusing on MERN Stack",
        "Developed teamwork, event management, and leadership skills while helping in events",
        "Active participant in coding contests & technical clubs",
      ],
    },
    {
      type: "work",
      title: "Frontend Developer (Personal Projects & Freelance)",
      company: "Self / Independent",
      period: "2023 - Present",
      description:
        "Designed and developed responsive web applications using React, Bootstrap, and modern JavaScript. Focused on building smooth user interfaces, optimizing performance, and delivering real-world solutions.",
      achievements: [
        "Built a Food Ordering Website (MERN + Bootstrap)",
        "Created multiple portfolio & business websites",
        "Worked on hackathon project: AI-powered Personal Finance Assistant",
      ],
    },

    {
      type: "work",
      title: "Hackathon Developer",
      company: "PCTE - Punjab College of Technical Education| PCTE Group of Institute",
      period: "2024",
      description:
        "Contributed to a team project building an AI-powered personal finance assistant with secure bank integrations using the MERN stack.",
      achievements: [
        "Build APIs",
        "Built the frontend for finance dashboard in React",
        "Collaborated in a team of 4 developers under tight deadlines",
      ],
    },

    {
      type: "work",
      title: "Full Stack Web Development (Self Learning)",
      company: "Online / Self Practice",
      period: "2024 - Present",
      description:
        "Learning and building projects with the MERN stack, RESTful APIs, and deployment techniques.",
      achievements: [
        "Completed 10+ hands-on projects",
        "Explored React Hooks, Bootstrap, Tailwind, and Figma",
        "Working towards Full-Stack Developer role",
      ],
    },
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Experience & Education</h2>
          <hr className="w-25 mx-auto" />
          <p className="text-muted">
            My journey in web development and computer science
          </p>
        </div>

        {/* Legend */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          <div className="d-flex align-items-center">
            <span
              className="rounded-circle bg-primary me-2"
              style={{ width: "16px", height: "16px", display: "inline-block" }}
            ></span>
            <span className="fw-medium">Work Experience</span>
          </div>
          <div className="d-flex align-items-center">
            <span
              className="rounded-circle bg-purple me-2"
              style={{ width: "16px", height: "16px", display: "inline-block", backgroundColor: "#6f42c1" }}
            ></span>
            <span className="fw-medium">Education</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-5">
              <div className="card shadow-sm border-0">
                <div
                  className={`card-header text-white ${
                    exp.type === "work" ? "bg-primary" : "bg-purple"
                  }`}
                  style={exp.type === "education" ? { backgroundColor: "#6f42c1" } : {}}
                >
                  <h5 className="mb-0">{exp.title}</h5>
                  <small>{exp.company}</small>
                  <span className="badge bg-light text-dark ms-3">
                    {exp.period}
                  </span>
                </div>
                <div className="card-body">
                  <p className="text-muted">{exp.description}</p>
                  <h6>Key Achievements:</h6>
                  <ul>
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Section */}
        <div className="mt-5 p-4 bg-white rounded shadow-sm">
          <h3 className="text-center fw-bold mb-4">What I Bring to the Table</h3>
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px" }}>
                ⚡
              </div>
              <h5>Fast Learner</h5>
              <p className="text-muted">Quick to adapt to new technologies and frameworks</p>
            </div>
            <div className="col-md-4 mb-3">
              <div className="rounded-circle bg-purple text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px", backgroundColor: "#6f42c1" }}>
                🤝
              </div>
              <h5>Team Player</h5>
              <p className="text-muted">Excellent collaboration and communication skills</p>
            </div>
            <div className="col-md-4 mb-3">
              <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px" }}>
                💡
              </div>
              <h5>Problem Solver</h5>
              <p className="text-muted">Creative solutions to complex challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
