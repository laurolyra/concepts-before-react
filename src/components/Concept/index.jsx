import React from 'react';
import './styles.scss';

const Concept = ({title, link}) => (
  <div className='concept-container'>
    <h1 id={title}>{title}</h1>
    <h2>Concept container</h2>
    <a href={link} rel="noreferrer" target="_blank">Referência</a>
  </div>
  );

export default Concept;
