function Education() {
  const educationData = [
    
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Jyoti nivas College Autonomous",
      year: "2021 - 2024",
      description:
        "Completed a Bachelor of Computer Applications, gaining a strong foundation in programming, computer science fundamentals, database management, web development, and software engineering principles.",
    },
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Jyoti nivas College Autonomous",
      year: "2024 - 2026",
      description:
        "Pursuing a Master of Computer Applications with a focus on software development, web technologies, database management, and programming. Building strong problem-solving skills through academic projects and practical applications.",
    },
  ];

  return (
    <>
      <style>{`
        .education {
          padding: 100px 10%;
          background: var(--bg-color);
        }

        .education-title {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 15px;
        }

        .education-subtitle {
          text-align: center;
          color: var(--secondary-text);
          margin-bottom: 60px;
        }

        .education-container {
          max-width: 900px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .education-card {
          background: var(--card-color);
          padding: 35px;
          border-radius: 20px;

          border-left: 6px solid var(--primary-color);
          border: 1px solid var(--border-color);

          box-shadow: var(--shadow-light);
          transition: all 0.35s ease;
        }

        .education-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-medium);
        }

        .education-card h3 {
          color: var(--primary-dark);
          margin-bottom: 12px;
          font-size: 1.4rem;
        }

        .institution {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .year {
          color: var(--secondary-text);
          margin-bottom: 18px;
          font-weight: 500;
        }

        .description {
          color: var(--text-color);
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .education-title {
            font-size: 2.2rem;
          }

          .education-card {
            padding: 25px;
          }

          .education-card h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <section id="education" className="education">

        <h2 className="education-title">
          Education
        </h2>

        <p className="education-subtitle">
          Academic qualifications and learning journey.
        </p>

        <div className="education-container">
          {educationData.map((item, index) => (
            <div className="education-card" key={index}>

              <h3>{item.degree}</h3>

              <div className="institution">
                {item.institution}
              </div>

              <div className="year">
                {item.year}
              </div>

              <p className="description">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </section>
    </>
  );
}

export default Education;