import "./CSS/Signup.css";
import SignupInput from "../components/SignupInput";
import SignupButton from "../components/SignupButton";

function Signup() {
    return (
        <div className="Signup">
            <div className="signup-inner">
                <h1>Signup</h1>
                <p>Already have an account? <a href="#">Log In</a></p>
                <SignupInput title="Full Name"/>
                <SignupInput title="Email Address"/>
                <SignupInput title="Create Password"/>
                <SignupInput title="Confirm Password"/>
                <SignupButton title="Sign Up"/>
            </div>
        </div>
    )
}

export default Signup;