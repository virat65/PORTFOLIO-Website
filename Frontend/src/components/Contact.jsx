import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_udl6ph5", // replace with your EmailJS service ID
        "template_vlmr5se", // replace with your EmailJS template ID
        formData, // data to send
        "Rt5sMisr7vMofF6Y8" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          console.log(result);
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold ">Get In Touch</h2>
          <p className="text-muted">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4 d-flex flex-column justify-evenly">
                <h3 className="fw-bold mb-4 pt-2">Send Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      className="form-control"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Contact Information</h3>
                <p className="mb-2">Mohali, Punjab, India</p>
                <p className="mb-2">Email: virat1322420@gmail.com</p>
                <p>Phone: +91 8427446698</p>
              </div>
            </div>

  {/* Social Links */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">Follow Me</h3>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary rounded-circle"
                      title={social.name}
                    >
                   {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="card text-white bg-primary shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="fw-bold">Available for Work</h3>
                <p className="mb-3">
                  I'm currently available for freelance projects and full-time opportunities.
                  Let's create something amazing together!
                </p>
                <span className="badge bg-success">Open to new opportunities</span>
              </div>
            </div>    </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
