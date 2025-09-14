const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="d-flex align-items-center  mt-4 justify-content-center min-vh-100 bg-primary text-white text-center text-lg-start position-relative"
    >
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">
          {/* Text Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <h1 className="display-4 fw-bold mb-4">
              Hi, I'm <span className="text-warning">Ramanand Yadav</span>
            </h1>
            <h2 className="h3 mb-4 text-light">Web Developer</h2>
            <p className="lead mb-4">
              Passionate full-stack developer specializing in modern web technologies.
              I create responsive, user-friendly applications that solve real-world problems.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-light text-primary px-4 py-2 fw-medium"
              >
                Hire Me
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1P6x1mNk-Zws95jy6qJu5uTYMGtpXc2tp/view?usp=sharing"
                  )
                }
                className="btn btn-outline-light px-4 py-2 fw-medium"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Profile Image (visible only on large screens) */}
          <div className="col-lg-6 order-1 order-lg-2 mt-5 mt-lg-0 d-none d-lg-flex justify-content-center">
            <div className="position-relative">
              <div
                className="rounded-circle overflow-hidden border border-4 border-light shadow-lg"
                style={{ width: "300px", height: "300px" }}
              >
                <img
                  src="/portfolioPic1.jpg"
                  alt="Ramanand Yadav"
                  className="h-100 w-100 object-fit-cover rounded-circle"
                />
              </div>

              {/* Floating elements */}
              <div
                className="position-absolute bg-warning rounded-circle opacity-75"
                style={{ width: "80px", height: "80px", top: "-20px", right: "-20px" }}
              ></div>
              <div
                className="position-absolute bg-danger rounded-circle opacity-75"
                style={{ width: "60px", height: "60px", bottom: "-20px", left: "-20px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <button
          onClick={() => scrollToSection("about")}
          className="btn btn-link text-white p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14l-7 7-7-7M12 21V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
