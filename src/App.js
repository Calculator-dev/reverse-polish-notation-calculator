import './index.css';
import Calculator from "./components/Calculator";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Calculator />
      <AppFooter />
    </div>
  );
}

export default App;
