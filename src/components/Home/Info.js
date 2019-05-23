import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              aliquam mollitia quidem provident error tempora dolore beatae.
              Doloribus ipsa illum eius neque debitis nobis recusandae, in
              molestias cumque et numquam aperiam eligendi aliquid similique
              adipisci laborum mollitia accusantium perspiciatis excepturi?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
