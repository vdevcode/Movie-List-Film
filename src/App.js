
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Contents from './components/Content/Content';
import Menus from './components/Menus/Menu';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Contents/>
        <Menus/>
    </div>
  );
}

export default App;
