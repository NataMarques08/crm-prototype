import './Login.css';
import Input from '../input_component/Input';
import Button from '../button_component/Button';

function Login(){
    return(
      <div className="login">
        <h1>Acesse sua conta</h1>
        <Input text_type={"text"} text_title={"Seu e-mail"}/>
        <Input text_type={"password"} text_title={"Sua senha"}/>
        <a href='#'>Esqueci minha senha</a>
        <Button 
        width={"100%"} 
        height={"10%"} 
        backgroundColor={"#209c15"} 
        color={"#fff"}
        fontSize={"1rem"}
        fontWeight={"bold"}
        >Entrar</Button>
      </div>
    );
}

export default Login;