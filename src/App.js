import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import CharacterList from './Components/CharacterList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CharacterList></CharacterList>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
