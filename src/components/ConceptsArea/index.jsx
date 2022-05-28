import React from 'react';
import './styles.scss';

const ConceptsArea = () => (
  <div className='concepts-area'>
    <h1>Dois importantes conceitos precisam ser assimilados para uma melhor experiência com o react</h1>
    <section className='concept-blocks-container'>
      <div className='concept-block'>
        <h3>Manipulação de arrays</h3>
        <ul>
          <li>Map</li>
          <li>Filter</li>
          <li>ForEach</li>
          <li>Reduce(opcional)</li>
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
