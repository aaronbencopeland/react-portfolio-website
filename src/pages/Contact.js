import React from 'react';
import "../styles/Contact.css";

function Contact() {
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
          <form className="contact-page-form">
            <label className="contact-form-field">
              <span>
                Name
              </span>

              <input className="contact-form-input"
                type="text"
                placeholder="John Doe"
              />
            </label>

            <label className="contact-form-field">
              <span>
                Email Address
              </span>

              <input className="contact-form-input"
                type="text"
                placeholder="example@email.com"
              />
            </label>

            <label className="contact-form-field">
              <span>
                Message
              </span>

              <textarea className="contact-form-input"
                rows={7}
                placeholder="Hi Aaron! 🐔"
              />
            </label>

            <button className="contact-form-submit-button"
              type="submit"
              onClick={((e) => e.preventDefault())}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact