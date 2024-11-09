import './contact.css'; 

const ContactForm = () => (
  <section id="contact" className="contact-section">
    <div className="overlay"></div>
    <h3 className="contact-title">Contact Us</h3>
    <div className="container">
      <form className="contact-form">
        <input
          type="text"
          placeholder="Name"
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email"
          className="form-input"
        />
        <textarea
          placeholder="Message"
          className="form-textarea"
        ></textarea>
        <button className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
