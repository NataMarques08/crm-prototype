import './Input.css';

function Input({text_title}){
    return(
        <div className="input-component">
            <input type="text" placeholder={text_title} />
        </div>
    );
}
export default Input;