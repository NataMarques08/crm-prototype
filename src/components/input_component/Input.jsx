import './Input.css';

function Input({ text_type,text_title}){
    return(
        <div className="input-component">
            <input type={text_type} placeholder={text_title} />
        </div>
    );
}
export default Input;