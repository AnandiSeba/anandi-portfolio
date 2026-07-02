function About() {
  return (
    <>
      <style>{`
        .about {
          padding: 100px 10%;
          background: var(--bg-color);
        }

        .about-title {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 15px;
        }

        .about-subtitle {
          text-align: center;
          color: var(--secondary-text);
          margin-bottom: 50px;
        }

        .about-content {
          max-width: 1100px;
          margin: auto;
        }

        .about-text {
          font-size: 1.08rem;
          line-height: 2;
          color: var(--text-color);
          text-align: center;
          margin-bottom: 60px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .facts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
        }

        .fact-card {
          background: var(--card-color);
          padding: 30px;
          border-radius: 20px;

          border: 1px solid var(--border-color);

          box-shadow: var(--shadow-light);

          text-align: center;
          transition: all 0.35s ease;
        }

        .fact-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-medium);
        }

        .fact-card h3 {
          color: var(--primary-dark);
          margin-bottom: 12px;
          font-size: 1.4rem;
        }

        .fact-card p {
          color: var(--secondary-text);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 2.2rem;
          }

          .about-text {
            text-align: left;
          }
        }
      `}</style>

      <section id="about" className="about">

        <h2 className="about-title">
          About Me
        </h2>

        <p className="about-subtitle">
          Professional summary, experience, and career aspirations.
        </p>

        <div className="about-content">

          <p className="about-text">
            I am currently pursuing MCA while working as a Data Expert with 1.6 
            years of experience in the data and AI domain. 

            My work also includes web scraping, data validation, 
            quality checks, and functional testing to ensure accurate and reliable 
            datasets and system performance.

            <br /><br />

            I am passionate about Web Development and continuously 
            learning emerging technologies in full stack development. 
            My goal is to become a Full Stack Web Developer, working on both frontend and 
            backend technologies. I aim to contribute to building innovative and scalable web applications 
            while improving my technical skills and growing in the IT industry.
          </p>

          <div className="facts-grid">

            <div className="fact-card">
              <h3>1.7+ Years</h3>
              <p>Professional Work Experience</p>
            </div>

            <div className="fact-card">
              <h3>MCA Student </h3>
              <p>Advanced Computer Applications Education</p>
            </div>

            <div className="fact-card">
              <h3>Multiple Projects</h3>
              <p>Industry and Academic Experience</p>
            </div>

            <div className="fact-card">
              <h3>Career Goal</h3>
              <p> Web Development</p>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default About;