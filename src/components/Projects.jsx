function Projects() {
  const projects = [
    {
      title: "College Student Wellbeing Application",
      description:
        "A comprehensive student wellbeing platform featuring mood tracking, journaling, counselor appointment booking, and mental health support modules. (On Progress)",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "https://drive.google.com/file/d/1FmziaVxaP7ieQTfZhvF6t4_IIG48jQm2/view",
    },
    {
      title: "Decor Booking System",
      description:
        "A Web-based decoration booking system where users can explore decoration themes,check prices, and contact the service provider to make bookings.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "https://decorrrrranandiiiii.netlify.app/?utm_source=whatsapp&utm_medium=social&utm_campaign=test1",
    },
    
  ];

  return (
    <>
      <style>{`
        .projects {
          padding: 100px 10%;
          background: var(--bg-color);
        }

        .projects-title {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 15px;
        }

        .projects-subtitle {
          text-align: center;
          color: var(--secondary-text);
          margin-bottom: 60px;
          font-size: 1rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: var(--card-color);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid var(--border-color);

          transition: all 0.35s ease;
          box-shadow: var(--shadow-light);

          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-medium);
        }

        .project-card h3 {
          color: var(--primary-dark);
          margin-bottom: 15px;
          font-size: 1.3rem;
        }

        .project-card p {
          color: var(--secondary-text);
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }

        .tech-badge {
          background: var(--primary-light);
          color: var(--primary-dark);

          padding: 8px 14px;
          border-radius: 25px;

          font-size: 0.85rem;
          font-weight: 500;
        }

        .project-buttons {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .github-btn,
        .demo-btn {
          padding: 12px 20px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .github-btn {
          background: var(--primary-dark);
          color: white;
        }

        .github-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        .demo-btn {
          background: var(--primary-color);
          color: white;
        }

        .demo-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        @media (max-width: 768px) {
          .projects-title {
            font-size: 2.2rem;
          }

          .project-buttons {
            flex-direction: column;
          }

          .github-btn,
          .demo-btn {
            text-align: center;
          }
        }
      `}</style>

      <section id="projects" className="projects">

        <h2 className="projects-title">
          Projects
        </h2>

        <p className="projects-subtitle">
          Some of the projects I have worked on during my academic and professional journey.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  className="github-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="demo-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>

            </div>
          ))}
        </div>

      </section>
    </>
  );
}

export default Projects;