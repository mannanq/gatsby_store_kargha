import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/i@mannanqz.com" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="_replyto"
                placeholder="Your email"
                className="form-control"
              />
            </div>
            {/* message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                placeholder="Your message here..."
              />
            </div>
            {/* submit button */}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
