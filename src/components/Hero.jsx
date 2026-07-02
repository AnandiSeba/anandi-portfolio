import heroImage from "../assets/images/protphoto.jpeg";
import resume from "../assets/resume/Anandi(RESUME).pdf";

function Hero() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 80px;
          padding: 0 10%;
          background: var(--bg-color);
        }

        .hero-content {
          flex: 1;
        }

        .hero-content h3 {
          color: var(--primary-color);
          font-size: 1.2rem;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .hero-content h1 {
          font-size: 4.5rem;
          color: var(--primary-dark);
          line-height: 1.1;
          margin-bottom: 15px;
          font-weight: 800;
        }

        .hero-content h2 {
          color: var(--secondary-text);
          font-size: 1.4rem;
          font-weight: 500;
          margin-bottom: 25px;
        }

        .hero-content p {
          max-width: 600px;
          line-height: 1.9;
          color: var(--text-color);
          margin-bottom: 35px;
          font-size: 1.05rem;
        }

        .hero-buttons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: #556b2f;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primary-btn:hover {
  background: #35421e;
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(62, 77, 35, 0.25);
}

        .secondary-btn {
          background: transparent;
          color: var(--primary-dark);
          border: 2px solid var(--primary-color);
          padding: 14px 28px;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: var(--primary-light);
          transform: translateY(-3px);
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image img {
          width: 420px;
          height: 420px;
          object-fit: cover;
          border-radius: 50%;

          border: 8px solid white;

          box-shadow:
            0 20px 40px rgba(0,0,0,0.08),
            0 0 0 12px var(--primary-light);

          transition: all 0.4s ease;
        }

        .hero-image img:hover {
          transform: scale(1.03);
        }

        @media (max-width: 992px) {

          .hero {
            flex-direction: column-reverse;
            text-align: center;
            padding-top: 60px;
            gap: 50px;
          }

          .hero-content p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-content h1 {
            font-size: 3.2rem;
          }

          .hero-image img {
            width: 320px;
            height: 320px;
          }
        }

        @media (max-width: 576px) {

          .hero-content h1 {
            font-size: 2.6rem;
          }

          .hero-content h2 {
            font-size: 1.1rem;
          }

          .hero-image img {
            width: 260px;
            height: 260px;
          }
        }
      `}</style>

      <section id="hero" className="hero">

        <div className="hero-content">

          <h3>Hello, I'm</h3>

          <h1>Anandi</h1>

          <h2>
            MCA Student • Data Expert • Aspiring Web Development Enthusiast 
          </h2>

          <p>
            With 1.5 years of experience in data-focused work, 
            I am currently expanding my skills in web development and enhancing 
            my technical expertise through hands-on learning and projects.
          </p>

          <div className="hero-buttons">

          <a href="#contact-section">
  <button className="primary-btn">Contact</button>
</a>


            <a
  href={resume}
  download="Anandi_Resume.pdf"
  className="secondary-btn"
>
  Download Resume
</a>

          </div>

        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Anandi" />
        </div>

      </section>
    </>
  );
}

export default Hero;