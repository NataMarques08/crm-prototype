import './App.css';
import Login from './components/login/Login';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


function App(){

  const [text] = useTypewriter({
    words:['Produtividade','Eficiência','Resultados','CRM Prototype'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div className="App">
        <h1>
          <span>
            {text}
            <Cursor />
          </span>
        </h1>
        <Login/>
    </div>
  );
}
export default App;