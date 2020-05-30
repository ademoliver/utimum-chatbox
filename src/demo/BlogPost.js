import React from 'react';

const BlogPost = () => {
  return (
    <div className="blogpost">
        <div className="image-wrapper">
          <img className="responsive-img" src="https://portalrbn.com.br/wp-content/uploads/2020/01/Escola-Livre-de-IA-abre-80-vagas-para-curso-gratuito-de-Intelig%C3%AAncia-Artificial-em-SP.-portalrbn.com_.br_.jpg" />
        </div>
        <div className="content">
          <h4>Esse é o titulo</h4>
          <p>aqui vai um resumo da noticia.</p>
        </div>
        <div className="footer">
          <div className="row">
            <div className="footer-content">
              <i className="material-icons">hoje</i>
              <span>Feb 26, 2020</span>
            </div>
            <div className="footer-content">
              <i className="material-icons">escreva aqui</i>
              <a href="">6</a>
            </div>
          </div>
        </div>
        <div className="read-more">
          <a href="">Leia mais</a>
        </div>
    </div>
  );
};

export default BlogPost;
