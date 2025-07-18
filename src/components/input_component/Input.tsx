import './Input.css';

type InputProps = {
    text_type: string;
    text_title: string;
}

export const Input = ({ text_type,text_title}: InputProps) =>{
    return(
        <div className="input-component">
            <input type={text_type} placeholder={text_title} />
        </div>
    );
}
