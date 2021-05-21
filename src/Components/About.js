import React from 'react'
import church from '../img/church.jpg'


function About () {
  return (
    <section id="about" className="my-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary pb-3">About Section</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet, assumenda aliquid tempore dolorum
              error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam accusantium pariatur aut sint deleniti
              laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate dicta blanditiis similique
              praesentium temporibus adipisci debitis labore!</p>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet, assumenda aliquid tempore dolorum
              error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam accusantium pariatur aut sint deleniti
              laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate dicta blanditiis similique
              praesentium temporibus adipisci debitis labore!</p>
          </div>
          <div className="col-md-6 px-5">
            <img src={church} alt="church" className="img-fluid rounded d-none d-md-block about-img" />
          </div>
        </div>
      </div>
    </section>

  )
}

export default About