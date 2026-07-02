function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 18px 10%;

          background: rgba(245, 241, 232, 0.9);
          backdrop-filter: blur(12px);

          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-light);
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          letter-spacing: 1px;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          color: var(--text-color);
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--primary-dark);
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: -5px;
          background: var(--primary-color);
          transition: 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .resume-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 30px;

          background: #556b2f;
          color: white;

          font-weight: 600;
          cursor: pointer;

          transition: all 0.3s ease;
        }

        .resume-btn:hover {
          background: #35421e;
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }

        @media (max-width: 900px) {
          .nav-links {
            gap: 18px;
          }

          .resume-btn {
            padding: 10px 18px;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .navbar {
            padding: 18px 7%;
          }

          .logo {
            font-size: 1.6rem;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">Anandi</div>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>


      
      </nav>
    </>
  );
}

export default Navbar;