import './Login.css';
import {Input} from '../../components/input_component/Input';
import {Button} from '../../components/button_component/Button';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useNavigate, Link } from 'react-router-dom';
 
export const Login = () =>{

    const navigate = useNavigate();

    const handleLoginClick = () =>{
        navigate('/home');
    }



    const [text] = useTypewriter({
      words:['+Produtividade','+Eficiência','+Resultados','PrototypeCRM'],
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 50,
      delaySpeed: 1500,
    });



    return(
      <div className="login-page">
        <div className="typewriter-container">
             <h1>
          <span>
            {text}
            <Cursor />
          </span>
        </h1>
        </div>
      

        <div className="login">
          <h1>Acesse sua conta</h1>
          <Input text_type={"text"} text_title={"Seu e-mail"}/>
          <Input text_type={"password"} text_title={"Sua senha"}/>
          <Link to='/reset-password'>Esqueci minha senha</Link>
          <Button 
            width={"100%"} 
            height={"10%"} 
            backgroundColor={"#209c15"} 
            color={"#fff"}
            fontSize={"1rem"}
            fontWeight={"bold"}
            onClick={handleLoginClick}
          >Entrar</Button>
        </div>

      </div>
    );
}

export default Login;