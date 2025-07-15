import './Input.css';

type InputProps = {
    text_type: string;
    text_title: string;
}

function Input({ text_type,text_title}: InputProps){
    return(
        <div className="input-component">
            <input type={text_type} placeholder={text_title} />
        </div>
    );
}
export default Input;