function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Programming Languages",
      skills: ["Python",],
    },
    {
      title: "Database Management",
      skills: ["MySQL", "MongoDB"],
    },
    
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub","Jira" , "Figma","Canvas","Microsoft Excel" , "Google Analytics"],
    },
  ];

  return (
    <>
      <style>{`
        .skills {
          padding: 100px 10%;
          background: white;
        }

        .skills-title {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 15px;
        }

        .skills-subtitle {
          text-align: center;
          color: var(--secondary-text);
          margin-bottom: 60px;
          font-size: 1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .skill-card {
          background: var(--card-color);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 30px;

          transition: all 0.35s ease;
          box-shadow: var(--shadow-light);
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-medium);
        }

        .skill-card h3 {
          color: var(--primary-dark);
          text-align: center;
          margin-bottom: 20px;
          font-size: 1.2rem;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .skill-badge {
          background: var(--primary-light);
          color: var(--primary-dark);

          padding: 10px 16px;
          border-radius: 25px;

          font-size: 0.9rem;
          font-weight: 500;

          transition: all 0.3s ease;
        }

        .skill-badge:hover {
          background: var(--primary-color);
          color: white;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .skills-title {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <section id="skills" className="skills">

        <h2 className="skills-title">
          Skills
        </h2>

        <p className="skills-subtitle">
          Technologies, tools, and concepts I work with.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    className="skill-badge"
                    key={skillIndex}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </section>
    </>
  );
}

export default Skills;