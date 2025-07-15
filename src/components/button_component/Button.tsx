import './Button.css';

type ButtonProps = {
    width?: string;
    height?: string;
    children: React.ReactNode;
    onClick?: () => void;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
}


function Button({
                    width,
                    height,
                    children,
                    onClick, 
                    backgroundColor, 
                    color, 
                    fontSize, 
                    fontWeight
                }:ButtonProps) {
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