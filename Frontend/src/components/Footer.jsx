import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/virat65",
      icon: (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ramanand-yadav-5aa854278/",
      icon: (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918427446698?text=Hi%20Ramanand,%20I%20found%20your%20portfolio%20and%20want%20to%20connect!",
      icon: (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M20.52 3.48A11.81 11.81 0 0012 .25C5.37.25.02 5.6.02 12.25c0 2.17.57 4.3 1.66 6.16L.25 24l5.74-1.5a11.82 11.82 0 006.01 1.61h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.75c-1.92 0-3.8-.51-5.43-1.48l-.39-.23-3.4.89.91-3.32-.25-.41a9.72 9.72 0 01-1.52-5.25c0-5.36 4.37-9.73 9.73-9.73 2.6 0 5.04 1.01 6.88 2.85a9.65 9.65 0 012.85 6.88c0 5.36-4.37 9.73-9.73 9.73zm5.32-7.29c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.43-1.72-1.6-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.58-.91-2.16-.24-.58-.49-.5-.66-.51h-.57c-.19 0-.51.07-.77.36-.27.29-1.01.98-1.01 2.39s1.03 2.77 1.17 2.96c.15.19 2.03 3.1 4.91 4.35.69.3 1.23.48 1.65.61.69.22 1.31.19 1.81.12.55-.08 1.72-.7 1.96-1.38.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=virat1322420@gmail.com",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="  position-relative tex-white">
      <div className="container py-5">
        <div className="row gy-4 gx-4">
          {/* Brand + Socials */}
          <div className="col-lg-6">
            <button
              onClick={() => scrollToSection("home")}
              className="btn btn-link p-0 text-white fs-4 fw-bold mb-3"
            >
              Ramanand Yadav
            </button>
            <p className=" mb-3" style={{ maxWidth: 480 }}>
              Full-stack web developer passionate about creating innovative
              solutions and building amazing user experiences with modern
              technologies.
            </p>
            <div className="d-flex gap-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-flex align-items-center justify-content-center btn btn-outline-light rounded-circle"
                  style={{ width: 40, height: 40 }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="btn btn-link p-0 text-white "
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-lg-4 fs-6 " style={{ cursor: "pointer" }}>
            <h5 className="fw-bold p-2">Contact</h5>
            <p className=" mb-1 p-2">📍 Mohali,Punjab, India</p>
           <p className="mb-1 p-2 text-break">📧 virat1322420@gmail.com</p>

            <p className="p-2">📞 +91 8427446698</p>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
          <small className="">
            © {new Date().getFullYear()} Ramanand Yadav. All rights reserved.
          </small>
          <div className="d-flex gap-3 mt-3 mt-md-0">
            <button
              onClick={() => scrollToSection("home")}
              className="btn btn-link p-0 text-white   "
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollToSection("home")}
              className="btn btn-link p-0 text-white   "
            >
              Terms of Service
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-link text-white   "
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => scrollToSection("home")}
        title="Back to top"
        className="btn btn-primary position-fixed d-flex align-items-center justify-content-center"
        style={{
          width: 48,
          height: 48,
          right: 20,
          bottom: 20,
          borderRadius: "50%",
          zIndex: 9999,
        }}
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
