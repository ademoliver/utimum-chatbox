import React from 'react';
import meadow from '../img/meadow.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="blue lighten-4"
      style={{ backgroundImage: 'url(' + meadow + ')'}}
    >
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <p className="flowtext hide-on-small-only">Vamos melhorar o mundo infinitamente</p>
          <h3>
            Self-improving software
          </h3>

          <p className="big">
            é com essa tecnologia que o faremos...
            <br/>
            junte-se a nós...
          </p>

          <a className="btn waves-light waves-effect m-r-16">Login</a>
          <a className="btn waves-light waves-effect">Registrar</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
