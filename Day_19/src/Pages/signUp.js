// import React, { useState } from "react";
// import useSignUp from "../hooks/useSignUp"

// const SignUp = () => {

//     const {signUp} = useSignUp();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("")

//     const validateSign = () => {
//         let validation = true;

//         if(validation) {
//             signUp({email, password})
//         }

//         else {
//             alert("Validation Error...")
//         }
//     }

//     return (
//         <div>
//             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={validateSign}>Sign Up</button>
//         </div>
//     )
// }

// export default SignUp


import React, { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {

    const {signUP} = useSignUp()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const EMAIL_REGEX = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
        return EMAIL_REGEX.test(String(email).toLowerCase());
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

        if (!name) {
            validation = false;
            newErrors.name = 'Name is required';
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
            signUP({name, email, password});
            setEmail("");
            setName("");
            setPassword("");
        } else {
        }
    };

    return (
        <div className="signup-container">
            <div className="auth-form">
                <h1>Sign Up</h1>
                <div className="form-group">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                        className={`form-control ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
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
                <button onClick={validate} type="button">Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;