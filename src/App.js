import './App.css';
import Intro from './components/Intro';
import ConceptsArea from './components/ConceptsArea';
import Concept from './components/Concept';

function App() {
  return (
    <div className="App">
      <Intro/>
      <ConceptsArea/>
      <Concept title='Array.map'/>
      <Concept title='Array.map2'/>
      <Concept title='Array.map7'/>
      <Concept title='Array.map5'/>
      <Concept title='Array.map11'/>
    </div>
  );
}

export default App;
