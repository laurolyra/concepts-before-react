import React from 'react';
import './styles.scss';

const Concept = ({title, id, link}) => (
  <div className='concept-container'>
    <h1 id={id}>{title}</h1>
    <h2>Concept container</h2>
    <p>Explicação básica</p>
    <p>Exercícios</p>
    <a href={link} rel="noreferrer" target="_blank">Referência</a>
  </div>
  );

export default Concept;
