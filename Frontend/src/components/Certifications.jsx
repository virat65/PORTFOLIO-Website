import React from "react";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const certificates = [
    {
      title: "Web Designer Training",
      provider: "AT SOLITAIRE INFOSYS, SECTOR 73 MOHALI",
      duration: "6 Weeks",
      year: "2024",
      description:
        "Learned HTML, CSS, JavaScript, and responsive design using Bootstrap.",
      certificateLink:
        "https://drive.google.com/file/d/1xZRxD_Vkjhwj_b-kV5txVIWvU2rMgXx5/view?usp=sharing",
    },
    {
      title: "Junior Software Developer Training",
      provider: "AT Orion Educaion Society,HDFC Bank Sector 101 Mohali",
      duration: "3 Months",
      year: "2024-2025",
      description:
        "Gained knowledge in Java, OOP concepts, database management, employability skills, and teamwork.",
      certificateLink:
        "https://drive.google.com/file/d/1Z32yyKTRELjiqHrjPsqH_G84GercB5Lv/view?usp=sharing",
    },
    {
      title: "Hackathon  Participant",
      provider: "PCTE - Punjab College of Technical Education",
      duration: "2 Days",
      year: "2024",
      description:
        "Developed an AI-powered finance assistant as part of a team and won 1st place.",
      certificateLink:
        "https://drive.google.com/file/d/1C_kQ860BQ6cKUaRJTUJL9UvvOYG6gBDP/view?usp=sharing", // or a public link
    },
    {
      title: "Web Design and  Development Course",
      provider: "Udemy",
      duration: "Completed Online",
      year: "2025",
      description:
        "Explored advanced MERN topics including JWT, Redux, and deployment.",
      certificateLink:
        "https://drive.google.com/file/d/1VUN6PQ8_qkDIYijGbo0Jnd8n0W1dXVn8/view?usp=sharing",
    },
    {
      title: "MERN Stack Developer Training",
      provider: "AT A2IT InternEdge, SECTOR 73 MOHALI",
      duration: "6 Months",
      year: "2025",
      description:
        "Developed full-stack apps using MongoDB, Express.js, React, and Node.js.",
      certificateLink:
        "https://drive.google.com/file/d/1YvZPLExmLxgIJU30mmA4gaOU-T4zk4ss/view?usp=sharing",
    },
  ];

  return (
    <section id="certifications" className="py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">📜 Certifications & Training</h2>
          <div className="skills-divider mx-auto mb-3"></div>
          <p className="text-muted">
            Certifications and training programs that strengthened my skills
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline position-relative">
          {certificates.map((cert, index) => (
            <div key={index} className="timeline-item d-flex mb-4 align-items-start">
              {/* Icon Circle */}
              <div className="timeline-icon rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3">

              </div>

              {/* Card */}
              <div className="card shadow-sm border-0 flex-grow-1">
                <div className="card-body d-flex p-0 align-items-start">
                  {/* Left Side */}
                  <div
                    className="card-left  p-4 text-white d-flex flex-column justify-content-start"
                    style={{
                      width: "50%",
                      background: "linear-gradient(135deg, #20c997, #0d6efd)",
                      borderTopLeftRadius: "0.375rem",
                      borderBottomLeftRadius: "0.375rem",
                      height:"100%"
                    }}
                  >
                    <h5 className="fw-bold ">{cert.title}</h5>
                    <p className="">{cert.provider}</p>
                    <small>{cert.duration} • <strong>{cert.year}</strong></small>
                  </div>

                  {/* Right Side */}
                  <div
                    className="card-right p-3 d-flex flex-column justify-content-start mb-0"
                    style={{
                      width: "50%",
                      backgroundColor: "#e9f7f6",
                      borderTopRightRadius: "0.375rem",
                      borderBottomRightRadius: "0.375rem",
                      fontSize: "1rem",
                      fontWeight: "500",
                      gap: "0.6rem"
                    }}
                  >
                    <p className="">{cert.description}</p>
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary align-self-start"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Timeline */}

    </section>
  );
};

export default Certifications;
