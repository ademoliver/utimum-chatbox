import React from 'react';
import sprintboard from '../img/sprintboard.jpg';

const Exemplar = () => {
  return (
    <section id="examplar ">
      <div className="container">
        <div className="row">
          <div className="col l1"></div>
          <div className="col l10 center-align">
            <h1>Self-Improving Software</h1>
            <p>Melhorar Infinitamente é a nossa missão, para isso desenvolveremos uma Inteligencia artificial que se auto-melhora...</p>
            <img className="responsive-img" src={sprintboard} />
          </div>
          <div className="col l1"></div>
        </div>
      </div>
    </section>
  );
};

export default Exemplar;
