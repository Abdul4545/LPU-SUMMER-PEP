import React, { useState } from "react";
import useLogIn from "../hooks/useLogin";

const Login = () => {

    const { logIn } = useLogIn()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(String(email).toLowerCase());
    };

    const validate = () => {
        let validation = true;
        const newErrors = {};

        if (!email) {
            validation = false;
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            validation = false;
            newErrors.email = 'Email is invalid';
        }

        if (!password) {
            validation = false;
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            validation = false;
            newErrors.password = 'Password must be at least 6 characters long';
        }

        setErrors(newErrors);

        if (validation) {
            logIn({email, password})
        } 
    };

    return (
        <div className="login-container">
            <div className="auth-form">
                <h1>Login</h1>
                <div className="form-group">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className={`form-control ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className={`form-control ${errors.password ? 'error' : ''}`}
                    />
                    {errors.password && <div className="error-message">{errors.password}</div>}
                </div>
                <button onClick={validate} type="button">Login</button>
            </div>
        </div>
    );
};

export default Login;