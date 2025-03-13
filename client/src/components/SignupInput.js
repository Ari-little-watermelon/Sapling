import "./CSS/SignupInput.css";

function SignupInput ({title}) {
    return (
        <div className="signup-input-container">
            <div className="signup-input-title">
                {title}
            </div>
            <div className="signup-input-field">
                <input></input>
            </div>
        </div>
        

    )
}

export default SignupInput;