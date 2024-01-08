import React, { useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const InputMessage = () => {
        if (firstName.length > 0 && firstName.length < 2) {
            return "First Name must be at least 2 characters";
        }
        return null;
    };

    const LastNameMessage = () => {
        if (lastName.length > 0 && lastName.length < 2) {
            return "Last Name must be at least 2 characters";
        }
        return null;
    };

    const EmailMessage = () => {
        if (email.length > 0 && email.length < 2) {
            return "Invalid email must be at least 2 characters";
        }
        return null;
    };

    const PasswordMessage = () => {
        if (password.length > 0 && password.length < 8) {
            return "Password must be at least 8 characters";
        }
        return null;
    };

    const ConPasswordMessage = () => {
        if (confirmPassword.length > 0 && password !== confirmPassword) {
            return "Passwords must match";
        }
        return null;
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <h3>{InputMessage()}</h3>
            </div>
            <div>
                <label>Nom: </label> 
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <h3>{LastNameMessage()}</h3>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <h3>{EmailMessage()}</h3>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <h3>{PasswordMessage()}</h3>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <h3>{ConPasswordMessage()}</h3>
            </div>
            
        </form>
    );
};

export default UserForm;
