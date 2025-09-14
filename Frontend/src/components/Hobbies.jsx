import React from "react";

const Hobbies = () => {
  const hobbies = [
    { name: "Traveling", icon: "✈️" },
    { name: "Gaming ", icon: "🎮" },
    { name: "Listening Music", icon: "🎵" },

    { name: "Exploring New Technologies", icon: "💻" },
  ];

  return (
    <section id="hobbies" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Hobbies & Interests</h2>
          <p className="text-muted">
            Activities I enjoy outside of work and studies
          </p>
        </div>

        <div className="row text-center">
          {hobbies.map((hobby, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px", fontSize: "24px" }}
                  >
                    {hobby.icon}
                  </div>
                  <h5 className="fw-bold">{hobby.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
