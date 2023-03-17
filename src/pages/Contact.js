import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const formReference = useRef(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleTextFieldChange = (e) => {
    console.log(form);
    const { name, value } = e.currentTarget;

    // Unpack current values of form fields,
    // then change value of name]
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_nozs4mq',  // service
      'template_ymrbbjt', // template 
      {
        from_name: form.name,
        to_name: '',
        from_email: form.email,
        to_email: '',
        message: form.message
      },
      ''  // public key
    )
    .then(() => {
      setLoading(false);
      alert('Thank you for your time. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      setLoading(false);
      console.log(error);

      alert('Something went wrong.');
    })
  }

  return (
    <>
      <div id="contact-page">
        <div className="contact-page-text">
          <h3 className="contact-page-header">
            Contact Aaron.
          </h3>

          <p className="contact-page-welcome">
            Thanks for taking the time to check out my portfolio.
          </p>
        </div>

        <div id="contact-form-container"> 
          <form className="contact-page-form"
            ref={formReference}
          >
            <label className="contact-form-field">
              <span>
                Name
              </span>

              <input className="contact-form-input"
                type="text"
                placeholder="John Doe"
                name="name"
                value={form.name}
                onChange={handleTextFieldChange}
              />
            </label>

            <label className="contact-form-field">
              <span>
                Email Address
              </span>

              <input className="contact-form-input"
                type="email"
                placeholder="example@email.com"
                name="email"
                value={form.email}
                onChange={handleTextFieldChange}
              />
            </label>

            <label className="contact-form-field">
              <span>
                Message
              </span>

              <textarea className="contact-form-input"
                rows={7}
                placeholder="Hi Aaron! 🐔"
                name="message"
                value={form.message}
                onChange={handleTextFieldChange}
              />
            </label>

            <button className="contact-form-submit-button"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact