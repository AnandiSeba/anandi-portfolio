function Experience() {
  return (
    <>
      <style>{`
        .experience {
          padding: 100px 10%;
          background: white;
        }

        .experience-title {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 15px;
        }

        .experience-subtitle {
          text-align: center;
          color: var(--secondary-text);
          margin-bottom: 60px;
        }

        .timeline {
          max-width: 900px;
          margin: auto;
        }

        .timeline-card {
          background: var(--card-color);
          padding: 40px;
          border-radius: 20px;

          border-left: 6px solid var(--primary-color);
          border: 1px solid var(--border-color);

          box-shadow: var(--shadow-light);
          transition: all 0.35s ease;
        }

        .timeline-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-medium);
        }

        .job-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 10px;
        }

        .company {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 8px;
        }

        .duration {
          color: var(--secondary-text);
          margin-bottom: 25px;
          font-weight: 500;
        }

        .responsibilities {
          padding-left: 20px;
        }

        .responsibilities li {
          margin-bottom: 15px;
          color: var(--text-color);
          line-height: 1.8;
        }

        .highlight {
          color: var(--primary-dark);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .experience-title {
            font-size: 2.2rem;
          }

          .timeline-card {
            padding: 25px;
          }

          .job-title {
            font-size: 1.3rem;
          }
        }
      `}</style>

      <section id="experience" className="experience">

        <h2 className="experience-title">
          Experience
        </h2>

        <p className="experience-subtitle">
          My professional journey and contributions.
        </p>

        <div className="timeline">

          <div className="timeline-card">

            <h3 className="job-title">
              Associate Analyst
            </h3>

            <p className="company">
              Data Expert
            </p>

           <p className="duration">
  1.5 Years Professional Experience
</p>

<ul className="responsibilities">

  <li>
    Worked on multiple projects and collaborated with cross-functional teams, improving technical and analytical skills.
  </li>

  <li>
    Experience working with Large Language Models (LLMs) using predefined prompts to generate structured outputs for client requirements, mainly used in model training and evaluation.
  </li>

  <li>
    Performed web scraping, data validation, and quality checks to ensure accuracy and consistency of data.
  </li>

  <li>
    Adapted quickly to new tools, workflows, and project requirements.
  </li>

  <li>
    Gained strong problem-solving and teamwork skills through real-world project experience.
  </li>

</ul>
            

          </div>

        </div>

      </section>
    </>
  );
}

export default Experience;