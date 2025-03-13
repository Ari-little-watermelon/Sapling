import "./CSS/SignupButton.css";

function SignupButton({title}){
    return (
        <div className="signup-button">
            <button>{title}</button>
        </div>
    )
}

export default SignupButton;