import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_x2h2ztk",
      "template_5f50bsj",
      form.current,
      "qrBZoptQeeg212Kau"
    )
    .then(() => {
  alert("Message sent successfully!");
  form.current.reset();
})
    .catch((error) => {
  console.error("EmailJS Error:", error);
  alert("Failed to send message. Check console.");
});
};
  
  
  return (
    <>
      <style>{`
        .contact {
          padding: 100px 10%;
          background: white;
        }

        .contact-title {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 15px;
        }

        .contact-subtitle {
          text-align: center;
          color: var(--secondary-text);
          margin-bottom: 60px;
        }

        .contact-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
        }

        .contact-info {
          background: var(--primary-light);
          padding: 35px;
          border-radius: 20px;
          border: 1px solid var(--border-color);

          box-shadow: var(--shadow-light);
        }

        .contact-info h3 {
          color: var(--primary-dark);
          margin-bottom: 25px;
          font-size: 1.5rem;
        }

        .contact-item {
          margin-bottom: 25px;
        }

        .contact-item strong {
          display: block;
          margin-bottom: 8px;
          color: var(--primary-dark);
        }

        .contact-item p,
        .contact-item a {
          color: var(--text-color);
          text-decoration: none;
          transition: 0.3s ease;
        }

        .contact-item a:hover {
          color: var(--primary-color);
        }

        .contact-form {
          background: var(--card-color);

          padding: 35px;
          border-radius: 20px;

          border: 1px solid var(--border-color);

          box-shadow: var(--shadow-light);

          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 15px;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          outline: none;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(122,143,99,0.15);
        }

        .contact-form textarea {
          resize: none;
          height: 160px;
        }

        .send-btn {
          background: #556b2f;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .send-btn:hover {
          background: #35421e;
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .contact-title {
            font-size: 2.2rem;
          }

          .contact-info,
          .contact-form {
            padding: 25px;
          }
        }
      `}</style>
      <section id="contact-section"></section>

      <section id="contact" className="contact">

        <h2 className="contact-title">
          Contact Me
        </h2>

        <p className="contact-subtitle">
          Let's connect and discuss opportunities, projects, or collaborations.
        </p>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Get In Touch</h3>

            <div className="contact-item">
              <strong>Email</strong>
              <p>anandia568@gmail.com</p>
            </div>

            <div className="contact-item">
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com/in/anandi-d-523a02277?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/anandi
              </a>
            </div>

            <div className="contact-item">
              <strong>GitHub</strong>
              <a
                href="https://github.com/AnandiSeba"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Anandi
              </a>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <p>Bangalore, India</p>
            </div>

          </div>

          <form
  ref={form}
  onSubmit={sendEmail}
  className="contact-form"
>

            <input
  type="text"
  name="from_name"
  placeholder="Your Name"
  required
/>

           <input
  type="email"
  name="from_email"
  placeholder="Your Email"
  required
/>

           <textarea
  name="message"
  placeholder="Your Message"
  required
></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default Contact;