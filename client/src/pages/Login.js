import "./CSS/Signup.css";
import SignupInput from "../components/SignupInput";
import SignupButton from "../components/SignupButton";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="Signup">
            <div className="signup-inner">
                <h1>Login</h1>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                <SignupInput title="Email Address"/>
                <SignupInput title="Password"/>
                <SignupButton title="Login"/>
            </div>
        </div>
    )
}

export default Login;