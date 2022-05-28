import './App.css';
import Intro from './components/Intro';
import ConceptsArea from './components/ConceptsArea';
import Concept from './components/Concept';

function App() {
  return (
    <div className="App">
      <Intro/>
      <ConceptsArea/>
      <Concept title='Array.map' link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map'/>
      <Concept title='Array.filter' link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'/>
      <Concept title='Array.forEach' link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach'/>
      <Concept title='Array.reduce' link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce'/>
    </div>
  );
}

export default App;
