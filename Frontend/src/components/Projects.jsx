import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?auto=format&fit=crop&w=1080&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?auto=format&fit=crop&w=1080&q=80",
      technologies: ["React", "Firebase", "Bootstrap", "Context API"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reports for business intelligence.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80",
      technologies: ["React", "Chart.js", "D3.js", "REST API"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Social Media App",
      description:
        "A social networking platform with user profiles, post sharing, real-time messaging, and social interactions built with modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1080&q=80",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application that provides current weather conditions, forecasts, and location-based weather updates with a clean, intuitive interface.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1080&q=80",
      technologies: ["React", "Weather API", "CSS3", "Geolocation"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1080&q=80",
      technologies: ["React", "Bootstrap", "Framer Motion", "Vercel"],
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Projects</h2>
          <div className="projects-divider mx-auto mb-3"></div>
          <p className="text-muted">
            Here are some of the projects I've worked on that showcase my skills
            and experience
          </p>
        </div>

        {/* Project Cards */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 d-flex" key={index}>
              <div className="card  shadow-sm border-0 project-card d-flex flex-column">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top project-img card-image "
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-3 d-flex flex-wrap">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-primary-subtle text-primary me-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className=" d-flex gap-2">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex-fill"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary flex-fill"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-5">
          <a
            href="https://github.com/virat65"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-5 py-2 rounded-pill fw-medium"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
