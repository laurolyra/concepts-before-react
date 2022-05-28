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
          <a href="#spread-operator">
            <li>Sintaxe de Espalhamento(Spread operator)</li>
          </a>
          <a href="#rest-parameter">
            <li>Parâmetros Rest</li>
          </a>
        </ul>
      </div>
      <div className='concept-block'>
        <h3>Manipulação de objetos</h3>
        <ul>
          <a href="#working-with-objects">
            <li>Trabalhando com objetos</li>
          </a>
          <a href="#destructuring">
            <li>Atribuição via desestruturação</li>
          </a>
          <a href="#object-keys">
            <li><code>Object.keys()</code></li>
          </a>
        </ul>
      </div>
    </section>
  </div>
  );

export default ConceptsArea;
