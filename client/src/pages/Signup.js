import "./CSS/Signup.css";
import SignupInput from "../components/SignupInput";
import SignupButton from "../components/SignupButton";
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="Signup">
            <div className="signup-inner">
                <h1>Signup</h1>
                <p>Already have an account? <Link to="/">Login</Link></p>
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