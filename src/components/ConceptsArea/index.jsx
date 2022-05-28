import React from 'react';
import './styles.scss';

const ConceptsArea = () => (
  <div className='concepts-area'>
    <h1>Três grandes conceitos precisam ser assimilados para uma melhor experiência com o react</h1>
    <section className='concept-blocks-container'>
      <div className='concept-block'>
        <h3>Manipulação de arrays</h3>
        <ul>
          <a href="#Array.map">
            <li>Map</li>
          </a>
          <a href="#Array.filter">
            <li>Filter</li>
          </a>
          <a href="#Array.forEach">
            <li>ForEach</li>
          </a>
          <a href="#Array.reduce">
            <li>Reduce(opcional)</li>
          </a>
        </ul>
      </div>
      <div className='concept-block'>
        <h3>Comuns</h3>
        <ul>
          <li>Sintaxe de Espalhamento(Spread operator)</li>
          <li>Parâmetros Rest</li>
        </ul>
      </div>
      <div className='concept-block'>
        <h3>Manipulação de objetos</h3>
        <ul>
          <li>Acessando informações de objetos</li>
          <li>Desestruturação</li>
          <li><code>Object.keys()</code></li>
        </ul>
      </div>
    </section>
  </div>
  );

export default ConceptsArea;
