// import { ImageWithFallback } from "./figma/ImageWithFallback";

const About = () => {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
    "Github"
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">About Me</h2>
          <div
            className="mx-auto mb-4"
            style={{ width: "80px", height: "4px", background: "linear-gradient(to right, #0d6efd, #6f42c1)" }}
          ></div>
        </div>

        <div className="row align-items-center g-5 w-100">
          {/* Profile Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="position-relative">
              <div
                className="shadow-lg overflow-hidden rounded"
                style={{ width: "320px", height: "320px" }}
              >
              <img src="/portfolioPic1.jpg" alt="Ramanand Yadav" className="h-100 w-100 object-fit-cover " />
              </div>
              <div
                className="position-absolute d-flex align-items-center justify-content-center fw-bold text-white"
                style={{
                  bottom: "-30px",
                  right: "-30px",
                  width: "90px",
                  height: "90px",
                  borderRadius: "15px",
                  background: "linear-gradient(to right, #0d6efd, #6f42c1)",
                  fontSize: "1.5rem",
                }}
              >
                RY
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <h3 className="h2 fw-bold text-dark mb-4">
              Web Developer & Problem Solver
            </h3>
            <p className="lead text-muted mb-4">
              I'm a passionate web developer with a strong foundation in both
              frontend and backend technologies. With expertise in the MERN
              stack, I enjoy creating seamless user experiences and robust
              applications that make a difference.
            </p>
            <p className="lead text-muted mb-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community. I believe in continuous learning and
              staying updated with the latest industry trends.
            </p>

            {/* Technologies */}
            <div>
              <h4 className="fw-bold text-dark mb-3">Core Technologies</h4>
              <div className="d-flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="badge bg-white text-dark border border-2 border-secondary-subtle shadow-sm px-3 py-2"
                    style={{ cursor: "default", transition: "all 0.3s" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="row text-center mt-5">
              <div className="col">
                <div className="fs-2 fw-bold text-primary">20+</div>
                <div className="text-muted">Projects</div>
              </div>
              <div className="col">
                <div className="fs-2 fw-bold text-primary">2+</div>
                <div className="text-muted">Years Exp</div>
              </div>
              <div className="col">
                <div className="fs-2 fw-bold text-primary">100%</div>
                <div className="text-muted">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
