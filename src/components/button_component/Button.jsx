import './Button.css';

function Button({width,height,children, onClick, backgroundColor, color, fontSize, fontWeight}) {
    return(
        <div className="button-component" style={{width: width, height: height}}>
               <button className="button"
                onClick={onClick}
                style={{
                    backgroundColor: backgroundColor,
                    color: color,
                    fontSize : fontSize,
                    fontWeight: fontWeight
                }}
               >
                {children}
               </button> 
        </div>

    );
}
export default Button;