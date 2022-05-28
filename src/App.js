import './App.css';
import Intro from './components/Intro';
import ConceptsArea from './components/ConceptsArea';
import Concept from './components/Concept';

function App() {
  return (
    <div className="App">
      <Intro/>
      <ConceptsArea/>
      <Concept title='Array.map' id="array-map" link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map'/>
      <Concept title='Array.filter' id="array-filter" link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'/>
      <Concept title='Array.forEach' id="array-forEach" link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach'/>
      <Concept title='Array.reduce' id="array-reduce" link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce'/>
      <Concept title='Sintaxe de Espalhamento' id="spread-operator" link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax'/>
      <Concept title='Parâmetro Rest' id="rest-parameter" link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters'/>
      <Concept title='Trabalhando com objetos' id="working-with-objects" link='https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics'/>
      <Concept title='Atribuição via desestruturação' id="destructuring" link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'/>
      <Concept title='Object.keys' id="object-keys" link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys'/>
    </div>
  );
}

export default App;
