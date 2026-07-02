function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: var(--primary-dark);
          color: white;
          padding: 50px 10% 25px;
          margin-top: 50px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .footer-left h3 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: white;
        }

        .footer-left p {
          color: rgba(255,255,255,0.8);
          max-width: 400px;
          line-height: 1.7;
        }

        .footer-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: rgba(255,255,255,0.9);
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .footer-links a:hover {
          color: white;
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 20px;
          text-align: center;
        }

        .footer-bottom p {
          color: rgba(255,255,255,0.75);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-links {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-left">
            <h3>Anandi</h3>

            <p>
              MCA Graduate passionate about Web Development.
            </p>
          </div>

          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Anandi. All Rights Reserved.
          </p>
        </div>

      </footer>
    </>
  );
}

export default Footer;